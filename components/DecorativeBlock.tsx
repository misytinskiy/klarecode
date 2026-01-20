import Image from "next/image";
import styles from "./DecorativeBlock.module.css";

export default function DecorativeBlock() {
  return (
    <section className={styles.decorativeBlock}>
      <div className={styles.imageContainer}>
        <Image
          src="/decorativeBlock.jpg"
          alt="Decorative Block"
          fill
          className={styles.image}
          priority
          unoptimized
        />
        <div className={styles.gradientOverlay} />
      </div>
    </section>
  );
}

