import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to build your{" "}
            <span className={styles.ctaTitleAccent}>next product?</span>
          </h2>
          <p className={styles.ctaDescription}>
            Validate your idea, build a production-ready MVP, and prepare your
            product for scaling.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButtonPrimary}>Discuss Project</button>
            <button className={styles.ctaButtonSecondary}>
              Schedule a Call
              <svg
                width="16"
                height="16"
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
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
