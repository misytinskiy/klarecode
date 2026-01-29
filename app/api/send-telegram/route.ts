import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, projectType, details } = body;

    // Validate required fields
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get Telegram bot token and chat ID from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Telegram service not configured" },
        { status: 500 }
      );
    }

    // Format message for Telegram
    const projectTypeLabel = projectType
      ? projectType.charAt(0).toUpperCase() + projectType.slice(1)
      : "Not specified";

    const message = `
🆕 *New Contact Form Submission*

👤 *Name:* ${name}
🏢 *Company:* ${company || "Not specified"}
📧 *Email:* ${email}
📋 *Project Type:* ${projectTypeLabel}
📝 *Details:*
${details}
    `.trim();

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message to Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
