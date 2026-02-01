"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const leftOverlayVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // На мобильных устройствах всегда включаем видео
      if (leftVideoRef.current) {
        leftVideoRef.current.play().catch(() => {});
      }
      if (leftOverlayVideoRef.current) {
        leftOverlayVideoRef.current.play().catch(() => {});
      }
      if (rightVideoRef.current) {
        rightVideoRef.current.play().catch(() => {});
      }
    }
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (leftVideoRef.current) {
        leftVideoRef.current.play().catch(() => {});
      }
      if (leftOverlayVideoRef.current) {
        leftOverlayVideoRef.current.play().catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      if (leftVideoRef.current) {
        leftVideoRef.current.pause();
      }
      if (leftOverlayVideoRef.current) {
        leftOverlayVideoRef.current.pause();
      }
    }
  };

  const handleRightMouseEnter = () => {
    if (!isMobile && rightVideoRef.current) {
      rightVideoRef.current.play().catch(() => {});
    }
  };

  const handleRightMouseLeave = () => {
    if (!isMobile && rightVideoRef.current) {
      rightVideoRef.current.pause();
    }
  };

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
          <div
            className={styles.imageLeft}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={leftVideoRef}
              src="/selectedWorks/backgroundVideo.mov"
              className={styles.image}
              loop
              muted
              playsInline
              preload="auto"
            />
            <div className={styles.imageGradient} />
            <video
              ref={leftOverlayVideoRef}
              src="/selectedWorks/traumerch.mp4"
              className={styles.imageVideo}
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
          <div
            className={styles.imageRight}
            onMouseEnter={handleRightMouseEnter}
            onMouseLeave={handleRightMouseLeave}
          >
            <video
              ref={rightVideoRef}
              src="/selectedWorks/gamlox.mp4"
              className={styles.image}
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
