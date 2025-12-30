import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Background grid lines */}
      <div className={styles.gridLines}>
        <div className={styles.horizontalLines}>
          <div className={styles.horizontalLine} />
          <div className={styles.horizontalLine} />
        </div>
        <div className={styles.verticalLines}>
          <div className={styles.verticalLine} />
          <div className={styles.verticalLine} />
          <div className={styles.verticalLine} />
        </div>
      </div>

      {/* Footer Content */}
      <div className={styles.footerContent}>
        {/* Logo */}
        <div className={styles.footerLeft}>
          <div className={styles.logoSection}>
            <Image
              src="/logo.svg"
              alt="Klarecode"
              width={32}
              height={32}
              className={styles.logo}
            />
            <h3 className={styles.logoText}>Klarecode</h3>
          </div>
        </div>

        {/* Footer Columns */}
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.columnList}>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#cases">Case Studies</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Solutions</h4>
            <ul className={styles.columnList}>
              <li>
                <a href="#ai">AI & Automation</a>
              </li>
              <li>
                <a href="#web3">Web3 Development</a>
              </li>
              <li>
                <a href="#web">Web & Telegram Apps</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contacts</h4>
            <ul className={styles.columnList}>
              <li>Email: hello@klarecode.com</li>
              <li>Telegram: @klarecode</li>
              <li>Response time: within 24 hours</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Support</h4>
            <p className={styles.supportText}>
              24/7 monitoring, bug fixing, and iterative feature updates.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <button className={styles.footerButton}>Discuss Project</button>
          <p className={styles.copyright}>
            © 2025 Klarecode. All rights reserved.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
