import Image from "next/image";
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
        <div className={styles.logoPlaceholder}>
          <Image
            src="/trustedByIcons/1.svg"
            alt="Company logo 1"
            width={112}
            height={48}
            className={`${styles.logoImage} ${styles.logoImage1}`}
          />
        </div>
        <div className={styles.logoPlaceholder}>
          <Image
            src="/trustedByIcons/2.svg"
            alt="Company logo 2"
            width={112}
            height={48}
            className={`${styles.logoImage} ${styles.logoImage2}`}
          />
        </div>
        <div className={styles.logoPlaceholder}>
          <Image
            src="/trustedByIcons/3.svg"
            alt="Company logo 3"
            width={112}
            height={48}
            className={`${styles.logoImage} ${styles.logoImage3}`}
          />
        </div>
        <div className={styles.logoPlaceholder}>
          <Image
            src="/trustedByIcons/4.svg"
            alt="Company logo 4"
            width={112}
            height={48}
            className={`${styles.logoImage} ${styles.logoImage4}`}
          />
        </div>
      </div>
    </section>
  );
}
