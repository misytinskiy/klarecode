import styles from "./TrustedBy.module.css";

export default function TrustedBy() {
  return (
    <section className={styles.trustedBy}>
      <div className={styles.header}>
        <div className={styles.line} />
        <p className={styles.label}>TRUSTED BY INNOVATIVE TEAMS</p>
        <div className={styles.lineReversed} />
      </div>
      
      <div className={styles.logos}>
        <div className={styles.logoPlaceholder} />
        <div className={styles.logoPlaceholder} />
        <div className={styles.logoPlaceholder} />
        <div className={styles.logoPlaceholder} />
        <div className={styles.logoPlaceholder} />
        <div className={styles.logoPlaceholder} />
      </div>
    </section>
  );
}

