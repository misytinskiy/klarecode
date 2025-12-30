import styles from "./Marquee.module.css";

export default function Marquee() {
  const technologies = "REACT // SOLIDITY // PYTHON // NODE.JS // AWS // TYPESCRIPT // DOCKER //";

  return (
    <section className={styles.marquee}>
      <div className={styles.marqueeContent}>
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeText}>{technologies}</span>
          <span className={styles.marqueeText}>{technologies}</span>
          <span className={styles.marqueeText}>{technologies}</span>
        </div>
      </div>
    </section>
  );
}

