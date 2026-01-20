import Image from "next/image";
import styles from "./Expertise.module.css";

const cardImages = [
  "/outExpertice/1.png",
  "/outExpertice/2.png",
  "/outExpertice/2.png",
  "/outExpertice/1.png",
  "/outExpertice/3.png",
  "/outExpertice/3.png",
];

export default function Expertise() {
  return (
    <section id="services" className={styles.expertise}>
      <h2 className={styles.title}>Our Expertise</h2>
      
      <div className={styles.cards}>
        {/* Top row - two large cards */}
        <div className={styles.cardTopLeft}>
          <Image
            src={cardImages[0]}
            alt=""
            fill
            className={styles.cardBackground}
            priority
            unoptimized
          />
          <h3 className={styles.cardTitle}>AI Agents & Automation</h3>
          <p className={styles.cardDescription}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardTextMobile}>
          <h3 className={styles.cardTitleMobile}>AI Agents & Automation</h3>
          <p className={styles.cardDescriptionMobile}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardTopRight}>
          <Image
            src={cardImages[1]}
            alt=""
            fill
            className={styles.cardBackground}
            priority
            unoptimized
          />
          <h3 className={styles.cardTitle}>Web3 Development</h3>
          <p className={styles.cardDescription}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardTextMobile}>
          <h3 className={styles.cardTitleMobile}>Web3 Development</h3>
          <p className={styles.cardDescriptionMobile}>
            Smart contracts & DeFi protocols.
          </p>
        </div>

        {/* Bottom row - one tall card on left, three small cards on right */}
        <div className={styles.cardBottomLeft}>
          <Image
            src={cardImages[2]}
            alt=""
            fill
            className={styles.cardBackground}
            priority
            unoptimized
          />
          <h3 className={styles.cardTitle}>DevOps</h3>
          <p className={styles.cardDescription}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardTextMobile}>
          <h3 className={styles.cardTitleMobile}>DevOps</h3>
          <p className={styles.cardDescriptionMobile}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardBottomRight1}>
          <Image
            src={cardImages[3]}
            alt=""
            fill
            className={styles.cardBackground}
            priority
            unoptimized
          />
          <h3 className={styles.cardTitle}>Web & Telegram Apps</h3>
          <p className={styles.cardDescription}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardTextMobile}>
          <h3 className={styles.cardTitleMobile}>Web & Telegram Apps</h3>
          <p className={styles.cardDescriptionMobile}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardBottomRight2}>
          <Image
            src={cardImages[4]}
            alt=""
            fill
            className={styles.cardBackground}
            priority
            unoptimized
          />
          <h3 className={styles.cardTitle}>SC, NFT collections, Defi</h3>
          <p className={styles.cardDescription}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardTextMobile}>
          <h3 className={styles.cardTitleMobile}>SC, NFT collections, Defi</h3>
          <p className={styles.cardDescriptionMobile}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardBottomRight3}>
          <Image
            src={cardImages[5]}
            alt=""
            fill
            className={styles.cardBackground}
            priority
            unoptimized
          />
          <h3 className={styles.cardTitle}>Design</h3>
          <p className={styles.cardDescription}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
        <div className={styles.cardTextMobile}>
          <h3 className={styles.cardTitleMobile}>Design</h3>
          <p className={styles.cardDescriptionMobile}>
            Smart contracts & DeFi protocols.
          </p>
        </div>
      </div>
    </section>
  );
}
