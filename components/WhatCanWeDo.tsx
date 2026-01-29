"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WhatCanWeDo.module.css";
import { useContactModal } from "./ContactModalContext";

const services = [
  {
    id: 1,
    number: "01.",
    title: "AI Agents & Automation",
    description: "Smart contracts & DeFi protocols.",
    expanded: true,
  },
  {
    id: 2,
    number: "02.",
    title: "Web3 Development",
    description: "Smart contracts & DeFi protocols.",
    expanded: false,
  },
  {
    id: 3,
    number: "03.",
    title: "Web & Telegram Apps",
    description: "Smart contracts & DeFi protocols.",
    expanded: false,
  },
  {
    id: 4,
    number: "04.",
    title: "DevOps",
    description: "Smart contracts & DeFi protocols.",
    expanded: false,
  },
  {
    id: 5,
    number: "05.",
    title: "SC, NFT, Defi",
    description: "Smart contracts & DeFi protocols.",
    expanded: false,
  },
  {
    id: 6,
    number: "06.",
    title: "Design",
    description: "Smart contracts & DeFi protocols.",
    expanded: false,
  },
];

export default function WhatCanWeDo() {
  const { openModal } = useContactModal();
  const [expandedId, setExpandedId] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={styles.whatCanWeDo}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.tag}>
            <span className={styles.tagText}>Our Expertise</span>
          </div>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>What we can do</h2>
            <p className={styles.subtitle}>
              We handle the complexity so you can enjoy the clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className={styles.servicesList}>
        {/* Top divider */}
        <div className={styles.dividerTop} />

        {services.map((service) => {
          const isExpanded = expandedId === service.id;
          return (
            <div key={service.id} className={styles.serviceItem}>
              <motion.div
                className={styles.serviceContent}
                initial={{
                  height: isExpanded
                    ? "var(--expanded-h)"
                    : "var(--collapsed-h)",
                }}
                animate={{
                  height: isExpanded
                    ? "var(--expanded-h)"
                    : "var(--collapsed-h)",
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{ overflow: "hidden", maxHeight: "none" }}
                layout={!isMobile}
                onClick={() => setExpandedId(isExpanded ? 0 : service.id)}
              >
                {/* Left Side - Number, Title, Description and Button */}
                <div className={styles.serviceLeftWrapper}>
                  <div className={styles.serviceLeft}>
                    <span className={styles.serviceNumber}>
                      {service.number}
                    </span>
                    <div className={styles.serviceTitleColumn}>
                      <div className={styles.serviceTitleRow}>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <div
                          className={styles.arrowButtonMobile}
                          aria-label="Toggle service"
                        >
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            className={styles.arrowIcon}
                            animate={{
                              rotate: isExpanded ? -90 : 0,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          >
                            <path
                              d="M12.0399 12.0477L27.5078 27.5156"
                              stroke="#59FF00"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M27.9528 15.5791V27.9534H15.5784"
                              stroke="#59FF00"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </div>
                      </div>
                      <AnimatePresence>
                        {isExpanded && service.description && (
                          <motion.div
                            className={styles.serviceDetails}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          >
                            <p className={styles.serviceDescription}>
                              {service.description}
                            </p>
                            <button
                              className={styles.discussButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                openModal();
                              }}
                            >
                              Discuss Project
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Right Side - Video Placeholder and Arrow */}
                <div className={styles.serviceRight}>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className={styles.imagePlaceholder}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        <video
                          src={`/whatCanWeDo/${service.id}.mp4`}
                          className={styles.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div
                    className={styles.arrowButton}
                    aria-label="Toggle service"
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      className={styles.arrowIcon}
                      animate={{
                        rotate: isExpanded ? -90 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <path
                        d="M12.0399 12.0477L27.5078 27.5156"
                        stroke="#59FF00"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.9528 15.5791V27.9534H15.5784"
                        stroke="#59FF00"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                  <AnimatePresence>
                    {isExpanded && service.description && (
                      <motion.div
                        className={styles.serviceDetailsMobile}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        <p className={styles.serviceDescription}>
                          {service.description}
                        </p>
                        <button
                          className={styles.discussButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal();
                          }}
                        >
                          Discuss Project
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Bottom Divider Line */}
              <motion.div
                className={styles.divider}
                animate={{
                  marginTop: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
          );
        })}

        {/* Bottom divider */}
        <div className={styles.dividerBottom} />
      </div>
    </section>
  );
}
