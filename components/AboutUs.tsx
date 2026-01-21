"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./AboutUs.module.css";

// Функция для разбиения текста на символы с учетом переносов строк
const splitTextIntoChars = (text: string) => {
  const chars: (string | React.ReactElement)[] = [];
  const lines = text.split(/\n/);

  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      chars.push(<br key={`br-${lineIndex}`} />);
    }
    line.split("").forEach((char) => {
      chars.push(char);
    });
  });

  return chars;
};

const headingText = `You focus on business growth.
We ensure your infrastructure
is stable, secure, and predictable
— eliminating technical risks
so you don't have to manage them`;

export default function AboutUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const chars = splitTextIntoChars(headingText);

  return (
    <section className={styles.aboutUs}>
      {/* Background Image with Gradient */}

      {/* Content */}
      <div className={styles.content}>
        {/* Tag */}
        <div className={styles.tag}>
          <span className={styles.tagText}>ABOUT US</span>
        </div>

        <div className={styles.aboutUsContent}>
          {/* Main Heading */}
          <h2 className={styles.heading}>
            <motion.div className={styles.headingText}>
              {chars.map((char, index) => {
                if (typeof char === "object") {
                  return char;
                }
                const totalChars = chars.filter(
                  (c) => typeof c === "string"
                ).length;
                const letterDelay = 0.04; // Задержка между буквами (в секундах)
                const letterDuration = 0.15; // Длительность изменения цвета одной буквы
                const pauseDuration = 1.2; // Пауза перед следующим циклом

                // Время когда последняя буква становится белой
                const lastLetterWhiteTime =
                  (totalChars - 1) * letterDelay + letterDuration;

                // Время начала изменения цвета для этой буквы (становится белой)
                const whiteStartTime = index * letterDelay;
                const whiteEndTime = whiteStartTime + letterDuration;

                // Время начала возврата к серому для этой буквы (последовательно с первой)
                const grayStartTime = lastLetterWhiteTime + index * letterDelay;
                const grayEndTime = grayStartTime + letterDuration;

                // Общая длительность цикла
                const cycleDuration =
                  lastLetterWhiteTime +
                  totalChars * letterDelay +
                  pauseDuration;

                return (
                  <motion.span
                    key={index}
                    className={styles.headingChar}
                    initial={{ color: "#818181" }}
                    animate={{
                      color: [
                        "#818181", // Начало - серый
                        "#818181", // Ожидание своей очереди стать белой
                        "#ffffff", // Становится белым
                        "#ffffff", // Остается белым до начала возврата
                        "#818181", // Возвращается к серому (последовательно)
                        "#818181", // Пауза перед следующим циклом
                      ],
                    }}
                    transition={{
                      duration: cycleDuration,
                      times: [
                        0,
                        whiteStartTime / cycleDuration,
                        whiteEndTime / cycleDuration,
                        grayStartTime / cycleDuration,
                        grayEndTime / cycleDuration,
                        1,
                      ],
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {char === " " ? (isMobile ? " " : "\u00A0") : char}
                  </motion.span>
                );
              })}
            </motion.div>
          </h2>

          {/* Two Column Text */}
          <div className={styles.textColumns}>
            <p className={styles.textColumn}>
              In an industry obsessed with &quot;breaking things fast,&quot; we
              choose a different path. We believe that true innovation requires
              clarity, not chaos. Our process is designed to filter out the
              noise, leaving only what truly matters for your product&apos;s
              success. No unnecessary features, no panic, no overhead.
            </p>
            <p className={styles.textColumn}>
              When you work with us, you don&apos;t get a vendor; you get a
              partner who values your peace of mind as much as your KPIs. We
              build systems that are robust enough to run themselves, giving you
              the freedom to focus on your vision, your growth, and yes — even
              your morning coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
