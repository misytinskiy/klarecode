import Image from "next/image";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  return (
    <section id="cases" className={styles.selectedWork}>
      <h2 className={styles.title}>Selected Work</h2>

      <div className={styles.cardContainer}>
        {/* Background layers for depth effect */}
        <div className={styles.cardLayer3}>
          <Image
            src="/selectedWorks/syndicate.png"
            alt="Syndicate"
            fill
            className={styles.layerImage}
            priority
            unoptimized
          />
        </div>
        <div className={styles.cardLayer2}>
          <Image
            src="/selectedWorks/gamblox.png"
            alt="Gamblox"
            fill
            className={styles.layerImage}
            priority
            unoptimized
          />
        </div>
        <div className={styles.cardLayer1}>
          <Image
            src="/selectedWorks/traumerch.png"
            alt="Traumerch"
            fill
            className={styles.layerImage}
            priority
            unoptimized
          />
        </div>

        {/* Main card with image */}
        <div className={styles.mainCard}>
          <div className={styles.imageWrapper}>
            <Image
              src="/selectedWorks/traumerch.png"
              alt="TRAUMERCH"
              fill
              className={styles.image}
              priority
              unoptimized
            />
            <div className={styles.imageGradient} />
          </div>

          <div className={styles.cardContent}>
            <div className={styles.cardContentLeft}>
              <div className={styles.tag}>B2B</div>
              <h3 className={styles.cardTitle}>TRAUMERCH</h3>
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
