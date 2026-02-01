"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContactModal } from "./ContactModalContext";
import Footer from "./Footer";
import styles from "./PolicyContent.module.css";
import navStyles from "./Hero.module.css";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.4, 600);
    let start: number | null = null;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo({
        top: startPosition + distance * ease,
        behavior: "auto",
      });

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
};

export default function TermsContent() {
  const { openModal } = useContactModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Block scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Block scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Restore scroll position when menu closes
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={styles.policyPage}>
        {/* Menu Overlay */}
        {isMenuOpen && (
          <div
            className={navStyles.menuOverlay}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        {/* Navigation */}
        <nav className={navStyles.nav}>
          {/* Logo */}
          <div className={navStyles.logoContainer}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Klarecode Logo"
                width={94}
                height={94}
                className={navStyles.logoImage}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links & CTA */}
          <div className={navStyles.navRight}>
            <div className={navStyles.desktopNavLinks}>
              <Link
                href="/#services"
                className={navStyles.desktopNavLink}
                onClick={(e) => handleNavClick(e, "services")}
              >
                Services
              </Link>
              <Link
                href="/#cases"
                className={navStyles.desktopNavLink}
                onClick={(e) => handleNavClick(e, "cases")}
              >
                Cases
              </Link>
              <Link
                href="/#process"
                className={navStyles.desktopNavLink}
                onClick={(e) => handleNavClick(e, "process")}
              >
                Process
              </Link>
              <Link
                href="/#about"
                className={navStyles.desktopNavLink}
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </Link>
            </div>
            <div
              className={`${navStyles.navLinks} ${
                isMenuOpen ? navStyles.navLinksOpen : ""
              }`}
            >
              <div className={navStyles.menuHeader}></div>
              <div className={navStyles.menuContent}>
                <div className={navStyles.menuLogoContainer}>
                  <Image
                    src="/logo.svg"
                    alt="Klarecode Logo"
                    width={94}
                    height={94}
                    className={navStyles.menuLogoImage}
                    priority
                  />
                </div>
                <div className={navStyles.menuLinks}>
                  <Link
                    href="/#services"
                    className={navStyles.navLink}
                    onClick={(e) => handleNavClick(e, "services")}
                  >
                    Services
                  </Link>
                  <Link
                    href="/#cases"
                    className={navStyles.navLink}
                    onClick={(e) => handleNavClick(e, "cases")}
                  >
                    Cases
                  </Link>
                  <Link
                    href="/#process"
                    className={navStyles.navLink}
                    onClick={(e) => handleNavClick(e, "process")}
                  >
                    Process
                  </Link>
                  <Link
                    href="/#about"
                    className={navStyles.navLink}
                    onClick={(e) => handleNavClick(e, "about")}
                  >
                    About
                  </Link>
                </div>
              </div>
              <div className={navStyles.menuFooter}>
                <button
                  className={navStyles.menuDiscussButton}
                  onClick={() => {
                    openModal("message");
                    setIsMenuOpen(false);
                  }}
                >
                  <span className={navStyles.menuDiscussButtonText}>
                    Discuss
                  </span>
                </button>
                <div className={navStyles.menuFooterText}>
                  <p className={navStyles.menuCopyright}>
                    © 2025 Klarecode. All rights reserved.
                  </p>
                  <Link href="/policy" className={navStyles.menuFooterLink}>
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className={navStyles.menuFooterLink}
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
            <button
              className={navStyles.discussButton}
              onClick={() => openModal("message")}
            >
              <span className={navStyles.discussButtonText}>Discuss</span>
            </button>
            <button
              className={`${navStyles.burgerButton} ${
                isMenuOpen ? navStyles.burgerButtonActive : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span className={navStyles.burgerLine}></span>
              <span className={navStyles.burgerLine}></span>
              <span className={navStyles.burgerLine}></span>
            </button>
          </div>
        </nav>

        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Terms & Conditions</h1>
            <p className={styles.lastUpdated}>Last updated: 26 January 2026</p>
          </header>

          <div className={styles.content}>
            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>1. ABOUT THESE TERMS</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  These Terms & Conditions (&quot;Terms&quot;) govern your use of
                  the Klarecodev website (&quot;Website&quot;). By accessing or
                  using the Website, you agree to these Terms.
                </p>
                <p className={styles.paragraph}>
                  <strong>Operator / Company:</strong> Klarecodev LLC (Georgia)
                  (registration pending)
                </p>
                <p className={styles.paragraph}>
                  <strong>Address:</strong> Tbilisi, Georgia
                </p>
                <p className={styles.paragraph}>
                  <strong>Contact:</strong> support@klarecodev.com
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  2. WEBSITE PURPOSE (NO PUBLIC OFFER)
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  The Website is a portfolio and informational website. It does
                  not provide e-commerce functionality and does not accept online
                  payments. Nothing on the Website constitutes a binding or public
                  offer.
                </p>
                <p className={styles.paragraph}>
                  Services, scope, timelines, pricing, and deliverables are
                  agreed individually and confirmed in a separate written
                  agreement and/or Statement of Work (&quot;SOW&quot;).
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  3. REQUESTS, CALLS, AND PROPOSALS
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  You can contact via the Website, email, Telegram, or schedule a
                  call using the embedded Calendly widget.
                </p>
                <p className={styles.paragraph}>
                  Any estimates, timelines, or proposals provided before a
                  written agreement/SOW are non-binding unless explicitly
                  confirmed in writing.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  4. INTELLECTUAL PROPERTY (WEBSITE CONTENT)
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  All Website content (text, visuals, branding, UI, layouts,
                  videos, and other materials) is owned by Klarecodev or used
                  under license and is protected by applicable IP laws.
                </p>
                <p className={styles.paragraph}>
                  You may view Website content for personal or internal business
                  evaluation but may not reproduce, distribute, or create
                  derivative works for commercial purposes without prior written
                  permission.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  5. CLIENT DELIVERABLES, SOURCE CODE, AND REUSE
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  Unless otherwise agreed in writing for a specific project:
                </p>
                <p className={styles.paragraph}>
                  Upon full payment, the Client receives the deliverables and
                  source code created specifically for the Client, as defined in
                  the SOW.
                </p>
                <p className={styles.paragraph}>
                  Klarecodev may reuse general know-how, non-client-specific
                  components, patterns, libraries, and internal tooling developed
                  or used during delivery, provided this does not disclose Client
                  confidential information.
                </p>
                <p className={styles.paragraph}>
                  If the Client requires a full buyout (exclusive assignment with
                  no reuse by Klarecodev), this must be agreed separately and may
                  involve an additional fee.
                </p>
                <p className={styles.paragraph}>
                  Separate IP assignment documents and non-competition/non-use
                  provisions can be provided &quot;by agreement&quot; and
                  reflected in the SOW or a separate addendum.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  6. PORTFOLIO AND PUBLICITY
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  Klarecodev may reference a Client relationship in a general
                  manner (e.g., &quot;B2B client in fintech&quot;) without
                  disclosing confidential details.
                </p>
                <p className={styles.paragraph}>
                  Use of a Client&apos;s name, logo, or identifiable case study
                  requires the Client&apos;s prior written approval.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>7. CONFIDENTIALITY</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  Confidentiality obligations should be documented in a separate
                  NDA and/or SOW. Until then, please avoid sharing sensitive
                  information you are not authorized to disclose.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>8. ACCEPTABLE USE</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>You agree not to:</p>
                <ul className={styles.list}>
                  <li>
                    interfere with the Website&apos;s security or availability,
                  </li>
                  <li>
                    attempt unauthorized access, scraping, or automated
                    extraction,
                  </li>
                  <li>
                    submit unlawful, abusive, misleading, or malicious content.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  9. THIRD-PARTY SERVICES
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  The Website uses third-party services such as Calendly
                  (embedded scheduling), and hosting/infrastructure providers.
                </p>
                <p className={styles.paragraph}>
                  Your use of third-party services is governed by their own terms
                  and policies. Klarecodev is not responsible for third-party
                  content, availability, or practices.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>10. DISCLAIMERS</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  The Website is provided &quot;as is&quot; and &quot;as
                  available&quot;. We do not warrant uninterrupted or error-free
                  operation.
                </p>
                <p className={styles.paragraph}>
                  Any case studies, metrics, or testimonials are illustrative
                  and do not guarantee specific outcomes.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  11. LIMITATION OF LIABILITY
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  To the maximum extent permitted by law, Klarecodev will not be
                  liable for indirect, incidental, special, consequential, or
                  punitive damages arising from your use of the Website.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  12. CHANGES TO THESE TERMS
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  We may update these Terms from time to time. The &quot;Last
                  updated&quot; date indicates the latest revision.
                </p>
                <p className={styles.paragraph}>
                  Continued use of the Website means you accept the updated Terms.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  13. GOVERNING LAW AND JURISDICTION
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  These Terms are governed by the laws of Georgia. Any disputes
                  shall be resolved by the competent courts located in Tbilisi,
                  Georgia, unless mandatory rules provide otherwise.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>14. LANGUAGE</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  This English version is the governing version of these Terms.
                  Any translations are provided for convenience only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

