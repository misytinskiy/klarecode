"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Error404.module.css";
import { useContactModal } from "./ContactModalContext";
import Footer from "./Footer";

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

// Chaotic grid positions for error blocks
// Each block can start from any column (1-11, since span is 2)
// null means empty cell
// Using a deterministic but chaotic pattern
const GRID_POSITIONS: Array<{ startCol: number } | null> = [
  { startCol: 1 },
  { startCol: 4 },
  null,
  { startCol: 7 },
  { startCol: 2 },
  null,
  { startCol: 9 },
  { startCol: 3 },
  { startCol: 6 },
  null,
  { startCol: 11 },
  { startCol: 1 },
  { startCol: 5 },
  null,
  { startCol: 8 },
  { startCol: 2 },
  { startCol: 10 },
  null,
  { startCol: 4 },
  { startCol: 7 },
  { startCol: 1 },
  null,
  { startCol: 9 },
  { startCol: 3 },
  { startCol: 6 },
  null,
  { startCol: 11 },
  { startCol: 2 },
  { startCol: 5 },
  { startCol: 8 },
  null,
  { startCol: 10 },
  { startCol: 4 },
  { startCol: 1 },
  null,
  { startCol: 7 },
  { startCol: 3 },
  { startCol: 9 },
  { startCol: 6 },
];

export default function Error404() {
  const { openModal } = useContactModal();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Hide cursor on body
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "";
    };
  }, []);

  const handlePageClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on navigation or links
    const target = e.target as HTMLElement;
    if (
      target.closest("nav") ||
      target.closest("a") ||
      target.closest("button")
    ) {
      return;
    }
    router.push("/");
  };

  return (
    <>
      <div className={styles.error404} onClick={handlePageClick}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Klarecode Logo"
                width={94}
                height={94}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>

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

        {/* Error Blocks Grid */}
        <div className={styles.errorBlocksContainer}>
          {GRID_POSITIONS.map((position, index) => {
            if (position === null) {
              return (
                <div key={`empty-${index}`} className={styles.emptyCell}></div>
              );
            }
            return (
              <div
                key={index}
                className={styles.errorBlock}
                style={{ gridColumn: `${position.startCol} / span 2` }}
              >
                <div className={styles.errorHeader}>
                  <div className={styles.errorIndicator}></div>
                  <span className={styles.errorText}>*ERROR</span>
                </div>
                <p className={styles.errorCode}>#404</p>
                <p className={styles.errorTime}>00:04:25</p>
              </div>
            );
          })}
        </div>
        {/* Cursor Button */}
        <div
          className={styles.cursorButton}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          <p className={styles.mainButtonText}>to main page</p>
          <div className={styles.mainButtonSubtext}>
            <p>just click</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
