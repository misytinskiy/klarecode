import Image from "next/image";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      {/* Background Image with Gradient */}

      {/* Content */}
      <div className={styles.content}>
        {/* Tag */}
        <div className={styles.tag}>
          <span className={styles.tagText}>ABOUT US</span>
        </div>

        <div className={styles.aboutUsContent}>
          {/* Main Heading */}
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>
              You focus on business growth. <br />
              We ensure your infr
            </span>
            <span className={styles.headingGray}>
              astructure <br />
              is stable, secure, and predictable <br />
              — eliminating technical risks <br />
              so you don&apos;t have to manage them
            </span>
          </h2>

          {/* Two Column Text */}
          <div className={styles.textColumns}>
            <p className={styles.textColumn}>
              In an industry obsessed with &quot;breaking things fast,&quot; we
              choose a different path. We believe that true innovation requires
              clarity, not chaos. Our process is designed to filter out the
              noise, leaving only what truly matters for your product&apos;s
              success. No unnecessary features, no panic, no overhead.
            </p>
            <p className={styles.textColumn}>
              When you work with us, you don&apos;t get a vendor; you get a
              partner who values your peace of mind as much as your KPIs. We
              build systems that are robust enough to run themselves, giving you
              the freedom to focus on your vision, your growth, and yes — even
              your morning coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
