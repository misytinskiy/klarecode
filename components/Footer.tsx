"use client";

import Image from "next/image";
import styles from "./Footer.module.css";
import { useContactModal } from "./ContactModalContext";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100;

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.4, 600); // Even faster
    let start: number | null = null;

    // EaseOutCubic - very fast start, smooth end
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

export default function Footer() {
  const { openModal } = useContactModal();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };
  return (
    <footer className={styles.footer}>
      {/* Background grid lines */}
      <div className={styles.gridLines}>
        <div className={styles.horizontalLines}>
          <div className={styles.horizontalLine} />
          <div className={styles.horizontalLine} />
        </div>
        <div className={styles.verticalLines}>
          <div className={styles.verticalLine} />
          <div className={styles.verticalLine} />
          <div className={styles.verticalLine} />
        </div>
      </div>

      {/* Footer Content */}
      <div className={styles.footerContent}>
        {/* Logo */}
        <div className={styles.footerLeft}>
          <div className={styles.logoSection}>
            <Image
              src="/logo.svg"
              alt="Klarecode"
              width={32}
              height={32}
              className={styles.logo}
            />
          </div>
        </div>

        {/* Footer Columns */}
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.columnList}>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#cases" onClick={(e) => handleLinkClick(e, "cases")}>
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleLinkClick(e, "process")}
                >
                  Process
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Solutions</h4>
            <ul className={styles.columnList}>
              <li>
                <a href="#ai">AI & Automation</a>
              </li>
              <li>
                <a href="#web3">Web3 Development</a>
              </li>
              <li>
                <a href="#web">Web & Telegram Apps</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contacts</h4>
            <ul className={styles.columnList}>
              <li>Email: hello@klarecode.com</li>
              <li>Telegram: @klarecode</li>
              <li>Response time: within 24 hours</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Support</h4>
            <p className={styles.supportText}>
              24/7 monitoring, bug fixing, and iterative feature updates.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <button className={styles.footerButton} onClick={openModal}>
            Discuss Project
          </button>
          <p className={styles.copyright}>
            © 2025 Klarecode. All rights reserved.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="/PRIVACY POLICY (EN).pdf" download>
            Privacy Policy
          </a>
          <a href="/TERMS & CONDITIONS (EN).pdf" download>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
