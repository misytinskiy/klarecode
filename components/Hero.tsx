import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* Navigation */}
      <nav className={styles.nav}>
        {/* Logo */}
        <h1 className={styles.logo}>Klarecode</h1>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <a href="#services" className={styles.navLink}>
            Services
          </a>
          <a href="#cases" className={styles.navLink}>
            Cases
          </a>
          <a href="#process" className={styles.navLink}>
            Process
          </a>
          <a href="#about" className={styles.navLink}>
            About
          </a>
        </div>

        {/* Language Switcher & CTA */}
        <div className={styles.navRight}>
          <div className={styles.languageSwitcher}>
            <span className={styles.languageActive}>EN</span>
            <span className={styles.languageInactive}>DE</span>
          </div>
          <button className={styles.discussButton}>
            <span className={styles.discussButtonText}>Discuss</span>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroTextBlock}>
          {/* Main Heading */}
          <h2 className={styles.heading}>
            Building Intelligent <br />
            Web & Decentralized Future
          </h2>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Engineering studio by ex-Big Tech experts. We deliver scalable Web3
            solutions, AI automation, and Telegram Mini Apps focused on your
            business metrics.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButtonPrimary}>Discuss Project</button>
            <button className={styles.ctaButtonSecondary}>
              View Cases
              {/* <svg
                className={styles.arrowIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.833 8L4.16634 8M15.833 8L10.833 13M15.833 8L10.833 3"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/heroImg.jpg"
              alt="Dashboard Preview"
              width={1085}
              height={603}
              className={styles.heroImage}
              priority
            />
            {/* Blur overlay at bottom */}
            <div className={styles.blurOverlay} />
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className={styles.decorativeBackground}>
        {/* Radial gradient circle */}
        <div className={styles.radialGradient}>
          <div className={styles.radialGradientInner}>
            <div className={styles.radialGradientCircle} />
          </div>
        </div>

        {/* Decorative vectors */}
        <div className={styles.decorativeVectors}>
          <div className={styles.vector1}>
            <img
              src="/hero/heroIcons/Vector1.svg"
              alt=""
              className={styles.vectorSvg}
            />
          </div>
          <div className={styles.vector2}>
            <img
              src="/hero/heroIcons/Vector2.svg"
              alt=""
              className={styles.vectorSvg}
            />
          </div>
          <div className={styles.vector3}>
            <img
              src="/hero/heroIcons/Vector3.svg"
              alt=""
              className={styles.vectorSvg}
            />
          </div>

          {/* Icons on vectors */}
          {/* Left side icons */}
          <div className={styles.iconWhatsapp}>
            <div className={styles.iconCircle}>
              <img
                src="/hero/heroIcons/iconWhatsapp.svg"
                alt="WhatsApp"
                className={styles.icon}
              />
            </div>
          </div>
          <div className={styles.iconNotion}>
            <div className={styles.iconCircle}>
              <img
                src="/hero/heroIcons/iconNotion.svg"
                alt="Notion"
                className={styles.icon}
              />
            </div>
          </div>
          <div className={styles.iconGoogle}>
            <div className={styles.iconCircle}>
              <img
                src="/hero/heroIcons/iconGoogle.svg"
                alt="Google"
                className={styles.icon}
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className={styles.iconN8N}>
            <div className={styles.iconCircle}>
              <img
                src="/hero/heroIcons/iconN8N.svg"
                alt="N8N"
                className={styles.icon}
              />
            </div>
          </div>
          <div className={styles.iconFigma}>
            <div className={styles.iconCircle}>
              <img
                src="/hero/heroIcons/iconFigma.svg"
                alt="Figma"
                className={styles.icon}
              />
            </div>
          </div>
          <div className={styles.iconTelegram}>
            <div className={styles.iconCircle}>
              <img
                src="/hero/heroIcons/iconTelegram.svg"
                alt="Telegram"
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
