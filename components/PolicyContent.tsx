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

export default function PolicyContent() {
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
            <h1 className={styles.title}>Privacy policy</h1>
            <p className={styles.lastUpdated}>Last updated: 26 January 2026</p>
          </header>

          <div className={styles.content}>
            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  1. WHO WE ARE (CONTROLLER)
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  This Privacy Policy explains how Klarecodev processes personal
                  data when you use our Website or contact us.
                </p>
                <p className={styles.paragraph}>
                  <strong>Controller:</strong> Klarecodev LLC (Georgia)
                  (registration pending)
                </p>
                <p className={styles.paragraph}>
                  <strong>Address:</strong> Tbilisi, Georgia
                </p>
                <p className={styles.paragraph}>
                  <strong>Email:</strong> support@klarecodev.com
                </p>
                <p className={styles.paragraph}>
                  We primarily operate under Georgian personal data protection
                  requirements. Where applicable (EU/UK/Switzerland), we also
                  aim to follow generally accepted data protection standards.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  2. WHAT DATA WE COLLECT
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  <strong>A) Data you provide</strong>
                </p>
                <p className={styles.paragraph}>
                  When you contact us or book a call, we may collect: Name,
                  Email, Telegram handle and/or phone number, Company name,
                  Industry/direction, Project description and requirements.
                </p>
                <p className={styles.paragraph}>
                  <strong>B) Technical data (limited)</strong>
                </p>
                <p className={styles.paragraph}>
                  When you visit the Website, we may collect limited technical
                  data necessary for security and delivery (e.g., IP address,
                  device/browser information, server logs).
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  4. WHY WE PROCESS DATA (PURPOSES)
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  We process personal data to: respond to your requests and
                  communicate with you, schedule and manage calls, prepare
                  proposals and scope discussions, provide support through
                  support@klarecodev.com, maintain security, prevent abuse, and
                  ensure Website stability.
                </p>
                <p className={styles.paragraph}>
                  <strong>We do not sell personal data.</strong>
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>5. LEGAL BASES</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  Depending on your jurisdiction, we rely on one or more of the
                  following: legitimate interests (responding to business
                  inquiries, securing the Website), steps prior to entering a
                  contract (preparing proposals/negotiating scope), performance
                  of a contract (when an SOW/agreement exists), legal
                  obligations (where applicable).
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>6. COOKIES</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  We use strictly necessary cookies only for core Website
                  functionality and security. We do not use analytics or
                  advertising cookies on the Website.
                </p>
                <p className={styles.paragraph}>
                  <strong>Embedded Calendly note:</strong> The scheduling
                  function is provided via an embedded Calendly widget. When you
                  interact with the widget, Calendly may process certain data
                  and may place its own cookies or use similar technologies as
                  part of providing the scheduling service. This processing is
                  governed by Calendly&apos;s own privacy/cookie practices.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  7. WHO WE SHARE DATA WITH (PROCESSORS)
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  We may share personal data with the following service
                  providers strictly for the purposes described above: Vercel
                  (hosting and content delivery), Google (CRM/business
                  communications and lead management via Google tools), Calendly
                  (meeting scheduling).
                </p>
                <p className={styles.paragraph}>
                  We do not use additional subcontractors for lead processing
                  beyond the providers listed above.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  8. INTERNATIONAL DATA TRANSFERS
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  Some providers may process data on servers located outside
                  Georgia and/or outside your country. Where required, we rely
                  on appropriate contractual and organizational safeguards
                  provided by vendors and standard industry practices.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>9. DATA RETENTION</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  We retain personal data only as long as necessary:
                </p>
                <ul className={styles.list}>
                  <li>
                    Leads/inquiries: up to 24 months from the last interaction,
                    unless you request deletion earlier.
                  </li>
                  <li>
                    Client/project records: for the duration of the relationship
                    and as needed for legal/accounting purposes.
                  </li>
                  <li>
                    Security logs: for a limited period appropriate for security
                    and troubleshooting.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>10. SECURITY</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  We implement reasonable technical and organizational measures
                  to protect personal data (access controls, least privilege,
                  secure tooling, and vendor security features). No system is
                  perfectly secure, but we work to reduce risk.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>11. YOUR RIGHTS</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  Depending on your jurisdiction, you may have rights to: access
                  your personal data, correct or update it, request deletion,
                  object to certain processing or request restriction, request
                  data portability (where applicable).
                </p>
                <p className={styles.paragraph}>
                  To exercise rights, email support@klarecodev.com. We may
                  request verification to protect against unauthorized requests.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>
                  13. CHANGES TO THIS PRIVACY POLICY
                </div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  We may update this Privacy Policy from time to time. We will
                  post the updated version on this page and update the
                  &quot;Last updated&quot; date.
                </p>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCellLeft}>
                <div className={styles.sectionTitle}>14. LANGUAGE</div>
              </div>
              <div className={styles.tableCellRight}>
                <p className={styles.paragraph}>
                  This English version is the governing version of this Privacy
                  Policy. Any translations are provided for convenience only.
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
