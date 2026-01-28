"use client";

import { motion } from "framer-motion";
import styles from "./Numbers.module.css";

export default function Numbers() {

  return (
    <section id="about" className={styles.numbers}>
      <div className={styles.header}>
      <h2 className={styles.title}>About us in numbers</h2>
      <p className={styles.subtitle}>
          We don&apos;t just write code. <br />
        We deliver measurable business results.
      </p>
      </div>

      <div className={styles.cards}>
        {/* Card 1 */}
        <div className={styles.cardWrapper}>
        <motion.div
          className={`${styles.card} ${styles.card1}`}
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          {/* Wave fill (circle clipPath) */}
          <motion.div
            className={`${styles.fillOverlay} ${styles.fillWave}`}
            variants={{
              rest: { clipPath: "circle(0% at 15% 85%)", opacity: 0.9 },
              hover: { clipPath: "circle(150% at 15% 85%)", opacity: 1 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={styles.cardContent}>
            <p className={styles.number}>10+</p>
            <p className={styles.description}>Years in Big Tech</p>
          </div>
            <div className={styles.decorativeEllipse1} />
            <div className={styles.decorativeEllipse2} />
            <div className={styles.cardShadow} />
          </motion.div>
        </div>

        {/* Card 2 - Highlighted */}
        <div className={styles.cardWrapper}>
        <motion.div
          className={`${styles.card} ${styles.card2}`}
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          {/* Wave fill (circle clipPath) */}
          <motion.div
            className={`${styles.fillOverlay} ${styles.fillWave}`}
            variants={{
              rest: { clipPath: "circle(0% at 15% 85%)", opacity: 0.9 },
              hover: { clipPath: "circle(150% at 15% 85%)", opacity: 1 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={styles.cardContent}>
            <p className={styles.number}>$50+</p>
            <p className={styles.description}>Millions TVL Secured</p>
          </div>
            <div className={styles.decorativeEllipse1} />
            <div className={styles.decorativeEllipse2} />
          </motion.div>
        </div>

        {/* Card 3 */}
        <div className={styles.cardWrapper}>
        <motion.div
          className={`${styles.card} ${styles.card3}`}
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          {/* Wave fill (circle clipPath) */}
          <motion.div
            className={`${styles.fillOverlay} ${styles.fillWave}`}
            variants={{
              rest: { clipPath: "circle(0% at 15% 85%)", opacity: 0.9 },
              hover: { clipPath: "circle(150% at 15% 85%)", opacity: 1 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={styles.cardContent}>
            <p className={styles.number}>&lt;3</p>
            <p className={styles.description}>Weeks Avg. MVP Launch</p>
          </div>
            <div className={styles.decorativeEllipse1} />
            <div className={styles.decorativeEllipse2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
