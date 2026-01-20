import styles from "./DecorativeBlock.module.css";

export default function DecorativeBlock() {
  return (
    <section className={styles.decorativeBlock}>
      <div className={styles.videoContainer}>
        <video
          src="/decorativeBlock.mp4"
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.gradientOverlay} />
      </div>
    </section>
  );
}

