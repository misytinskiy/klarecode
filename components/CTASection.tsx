"use client";

import Image from "next/image";
import styles from "./CTASection.module.css";
import { useContactModal } from "./ContactModalContext";

export default function CTASection() {
  const { openModal } = useContactModal();
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBackground}>
        <Image
          src="/ctaImg.jpg"
          alt="Background"
          fill
          className={styles.ctaBackgroundImage}
          unoptimized
        />
        <div className={styles.ctaGradientOverlay} />
      </div>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaLabel}>ACTION</div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to build your next product?</h2>
          <div className={styles.ctaInfo}>
            <p className={styles.ctaDescription}>
              Validate your idea, build a production-ready MVP, and prepare your
              product for scaling.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaButtonPrimary} onClick={openModal}>
                Discuss Project
              </button>
              <button className={styles.ctaButtonSecondary}>
                Schedule a Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16 10H4.33333M16 10L11 15M16 10L11 5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
