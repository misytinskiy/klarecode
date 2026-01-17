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
            width={26}
            height={30}
            className={styles.logoImage}
            priority
          />
          <h1 className={styles.logo}>Klarecode</h1>
        </div>

        {/* Navigation Links */}
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

        {/* Language Switcher & CTA */}
        <div className={styles.navRight}>
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

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Engineering studio by ex-Big Tech experts. We deliver scalable Web3
            solutions, AI automation, and Telegram Mini Apps focused on your
            business metrics.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButtonPrimary} onClick={openModal}>
              Discuss Project
            </button>
            <button className={styles.ctaButtonSecondary}>
              View Cases
              {/* <svg
                className={styles.arrowIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
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

        {/* Hero Image */}
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/heroImg.png"
              alt="Dashboard Preview"
              width={1085}
              height={603}
              className={styles.heroImage}
              priority
            />
            {/* Blur overlay at bottom */}
            <div className={styles.blurOverlay} />
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className={styles.decorativeBackground}>
        {/* Radial gradient circle */}
        <div className={styles.radialGradient}>
          <div className={styles.radialGradientInner}>
            <div className={styles.radialGradientCircle} />
          </div>
        </div>

        {/* Decorative vectors */}
        <div className={styles.decorativeVectors}>
          <Image
            src="/hero/grouped.svg"
            alt=""
            width={1920}
            height={400}
            className={styles.decorativeGroup}
            priority
          />
        </div>
      </div>
    </div>
  );
}
