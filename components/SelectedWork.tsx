import Image from "next/image";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  return (
    <section id="cases" className={styles.selectedWork}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h2 className={styles.title}>Selected Work</h2>
          <div className={styles.tag}>
            <span className={styles.tagText}>PORTFOLIO</span>
          </div>
        </div>
        <p className={styles.subtitle}>
          We handle the complexity so you can enjoy the clarity.
        </p>
      </div>

      <div className={styles.imagesContainer}>
        {/* Left Image */}
          <div className={styles.imageWrapper}>
          <div className={styles.imageLeft}>
            <Image
              src="/selectedWorks/traumerch.png"
              alt="Traumerch"
              fill
              className={styles.image}
              priority
              unoptimized
            />
            <div className={styles.imageGradient} />
            <video
              src="/selectedWorks/traumerch.mp4"
              className={styles.imageVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={styles.imageInfo}>
            <span className={styles.imageNumber}>01.</span>
            <h3 className={styles.imageTitle}>TRAUMERCH</h3>
            <p className={styles.imageDescription}>
                Custom LLM solutions & RAG systems.
              </p>
            <span className={styles.imageYear}>2025</span>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageRight}>
            <video
              src="/selectedWorks/gamlox.mp4"
              className={styles.image}
              autoPlay
              loop
              muted
              playsInline
            />
            </div>
          <div className={styles.imageInfo}>
            <span className={styles.imageNumber}>02.</span>
            <h3 className={styles.imageTitle}>GAMBLOX</h3>
            <p className={styles.imageDescription}>
              Custom LLM solutions & RAG systems.
            </p>
            <span className={styles.imageYear}>2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
