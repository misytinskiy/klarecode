"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { useContactModal } from "./ContactModalContext";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset for nav

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

export default function Hero() {
  const { openModal } = useContactModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
    setIsMenuOpen(false);
  };
  return (
    <div className={styles.hero}>
      {/* Navigation */}
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/logo.svg"
            alt="Klarecode Logo"
            width={94}
            height={94}
            className={styles.logoImage}
            priority
          />
        </div>

        {/* Navigation Links & Language Switcher & CTA */}
        <div className={styles.navRight}>
          <div
            className={`${styles.navLinks} ${
              isMenuOpen ? styles.navLinksOpen : ""
            }`}
          >
            <a
              href="#services"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, "services")}
            >
              Services
            </a>
            <a
              href="#cases"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, "cases")}
            >
              Cases
            </a>
            <a
              href="#process"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, "process")}
            >
              Process
            </a>
            <a
              href="#about"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
            </a>
          </div>
          <div className={styles.languageSwitcher}>
            <span className={styles.languageActive}>EN</span>
            <span className={styles.languageInactive}>DE</span>
          </div>
          <button className={styles.discussButton} onClick={openModal}>
            <span className={styles.discussButtonText}>Discuss</span>
          </button>
          <button
            className={`${styles.burgerButton} ${
              isMenuOpen ? styles.burgerButtonActive : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroTextBlock}>
          {/* Main Heading */}
          <h2 className={styles.heading}>
            Building Intelligent <br />
            Web & Decentralized Future
          </h2>

          <div className={styles.heroTextBlockContent}>
            {/* Subtitle */}
            <p className={styles.subtitle}>
              Engineering studio by ex-Big Tech experts. We deliver scalable
              Web3 solutions, AI automation, and Telegram Mini Apps focused on
              your business metrics.
            </p>
            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <button className={styles.ctaButtonPrimary} onClick={openModal}>
                Discuss Project
              </button>
              <button className={styles.ctaButtonSecondary}>
                View Cases
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.833 8L4.16634 8M15.833 8L10.833 13M15.833 8L10.833 3"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className={styles.heroImageContainer}>
          <Image
            src="/hero/heroImg.png"
            alt="Hero Decorative"
            fill
            className={styles.heroImage}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
