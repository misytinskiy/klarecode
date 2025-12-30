import Image from "next/image";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  return (
    <section className={styles.selectedWork}>
      <h2 className={styles.title}>Selected Work</h2>

      <div className={styles.cardContainer}>
        {/* Background layers for depth effect */}
        <div className={styles.cardLayer3} />
        <div className={styles.cardLayer2} />
        <div className={styles.cardLayer1} />

        {/* Main card with image */}
        <div className={styles.mainCard}>
          <div className={styles.imageWrapper}>
            <Image
              src="/selectedWorks/selectedWork.jpeg"
              alt="Support Agent for NeoBank"
              fill
              className={styles.image}
              priority
            />
            <div className={styles.imageGradient} />
          </div>

          <div className={styles.cardContent}>
            <div className={styles.cardContentLeft}>
              <div className={styles.tag}>FINTECH</div>
              <h3 className={styles.cardTitle}>Support Agent for NeoBank</h3>
              <p className={styles.cardDescription}>
                Custom LLM solutions & RAG systems.
              </p>
            </div>
            <button className={styles.viewButton}>View Case</button>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className={styles.decorativeCircle1} />
      <div className={styles.decorativeCircle2} />
    </section>
  );
}

