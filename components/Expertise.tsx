import styles from "./Expertise.module.css";

export default function Expertise() {
  return (
    <section className={styles.expertise}>
      <h2 className={styles.title}>Our Expertise</h2>
      
      <div className={styles.cards}>
        {/* Left card - AI Agents & Automation */}
        <div className={styles.cardLarge}>
          <h3 className={styles.cardTitle}>AI Agents & Automation</h3>
          <p className={styles.cardDescription}>
            Custom LLM solutions & RAG systems.
          </p>
          <button className={styles.exploreButton}>Explore AI</button>
        </div>

        {/* Right column */}
        <div className={styles.cardsRight}>
          {/* Top right card - Web3 Development */}
          <div className={styles.cardSmall}>
            <h3 className={styles.cardTitle}>Web3 Development</h3>
            <p className={styles.cardDescription}>
              Smart contracts & DeFi protocols.
            </p>
          </div>

          {/* Bottom right card - Web & Telegram Apps */}
          <div className={styles.cardSmall}>
            <h3 className={styles.cardTitle}>Web & Telegram Apps</h3>
            <p className={styles.cardDescription}>
              High-load apps & TMA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

