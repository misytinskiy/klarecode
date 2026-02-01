"use client";

import { motion } from "framer-motion";
import styles from "./Numbers.module.css";

export default function Numbers() {
  const fillVariants = {
    rest: {
      clipPath: "circle(0% at var(--hover-x, 50%) var(--hover-y, 50%))",
      opacity: 0.9,
    },
    hover: {
      clipPath: "circle(150% at var(--hover-x, 50%) var(--hover-y, 50%))",
      opacity: 1,
    },
  };

  const setHoverOrigin = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--hover-x", `${x}%`);
    target.style.setProperty("--hover-y", `${y}%`);
  };

  const setLeaveOrigin = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--hover-x", `${x}%`);
    target.style.setProperty("--hover-y", `${y}%`);
  };

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
          onMouseEnter={setHoverOrigin}
          onMouseLeave={setLeaveOrigin}
        >
          {/* Wave fill (circle clipPath) */}
          <motion.div
            className={`${styles.fillOverlay} ${styles.fillWave}`}
            variants={fillVariants}
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
          onMouseEnter={setHoverOrigin}
          onMouseLeave={setLeaveOrigin}
        >
          {/* Wave fill (circle clipPath) */}
          <motion.div
            className={`${styles.fillOverlay} ${styles.fillWave}`}
            variants={fillVariants}
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
          onMouseEnter={setHoverOrigin}
          onMouseLeave={setLeaveOrigin}
        >
          {/* Wave fill (circle clipPath) */}
          <motion.div
            className={`${styles.fillOverlay} ${styles.fillWave}`}
            variants={fillVariants}
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
