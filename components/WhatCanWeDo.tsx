"use client";

import { useState } from "react";
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

  return (
    <section className={styles.whatCanWeDo}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>What we can do</h2>
        <p className={styles.subtitle}>
          We handle the complexity so you can enjoy the clarity.
        </p>
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
                animate={{
                  height: isExpanded ? "auto" : "177px",
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{ overflow: "hidden" }}
                layout
              >
                {/* Left Side - Number, Title, Description and Button */}
                <div className={styles.serviceLeftWrapper}>
                  <div className={styles.serviceLeft}>
                    <span className={styles.serviceNumber}>
                      {service.number}
                    </span>
                    <div className={styles.serviceTitleColumn}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
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
                              onClick={openModal}
                            >
                              Discuss Project
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image Placeholder and Arrow */}
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
                      />
                    )}
                  </AnimatePresence>
                  <button
                    className={styles.arrowButton}
                    onClick={() => setExpandedId(isExpanded ? 0 : service.id)}
                    aria-label="Toggle service"
                  >
                    <motion.svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
                        d="M6.18359 6.19077L21.6516 21.6587"
                        stroke="#2AC293"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.0966 9.72218V22.0966H9.72218"
                        stroke="#2AC293"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </button>
                </div>
              </motion.div>

              {/* Bottom Divider Line */}
              <motion.div
                className={styles.divider}
                animate={{
                  marginTop: isExpanded ? 60 : 0,
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
