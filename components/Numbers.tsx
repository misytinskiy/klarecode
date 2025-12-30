import styles from "./Numbers.module.css";

export default function Numbers() {
  return (
    <section className={styles.numbers}>
      <h2 className={styles.title}>About us in numbers</h2>
      <p className={styles.subtitle}>
        We don't just write code. <br />
        We deliver measurable business results.
      </p>

      <div className={styles.cards}>
        {/* Card 1 */}
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.cardContent}>
            <p className={styles.number}>10+</p>
            <p className={styles.description}>Years in Big Tech</p>
          </div>
          <div className={styles.decorativeCircle1} />
          <div className={styles.decorativeCircle2} />
        </div>

        {/* Card 2 */}
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.cardContent}>
            <p className={styles.number}>$50+</p>
            <p className={styles.description}>Millions TVL Secured</p>
          </div>
          <div className={styles.decorativeCircle1} />
          <div className={styles.decorativeCircle2} />
        </div>

        {/* Card 3 */}
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardContent}>
            <p className={styles.number}>&lt;3</p>
            <p className={styles.description}>Weeks Avg. MVP Launch</p>
          </div>
          <div className={styles.decorativeCircle1} />
          <div className={styles.decorativeCircle2} />
        </div>
      </div>
    </section>
  );
}
