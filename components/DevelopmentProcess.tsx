"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./DevelopmentProcess.module.css";

const steps = [
  {
    title: "Discovery",
    description: "We audit your goals, define technical requirements, and build a roadmap.",
    number: "01",
  },
  {
    title: "Architecture/Design",
    description: "Scalable system design, database structure, and high-fidelity UI/UX prototypes.",
    number: "02",
  },
  {
    title: "Development",
    description: "Agile sprints with bi-weekly demos. Clean code and rigorous testing.",
    number: "03",
  },
  {
    title: "Launch",
    description: "Deployment to production, final QA, and seamless onboarding for your team.",
    number: "04",
  },
  {
    title: "Support",
    description: "24/7 monitoring, bug fixing, and iterative feature updates.",
    number: "05",
  },
];

export default function DevelopmentProcess() {
  const [selectedIndex, setSelectedIndex] = useState(1); // По умолчанию выбрана вторая карточка (Architecture/Design)

  return (
    <section id="process" className={styles.developmentProcess}>
      <h2 className={styles.title}>Development Process</h2>
      
      <div className={styles.cards}>
        {steps.map((step, index) => {
          const isSelected = selectedIndex === index;
          
          return (
            <motion.div
              key={index}
              className={`${styles.card} ${isSelected ? styles.cardHighlighted : ""}`}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              animate={{
                scale: isSelected ? 1.02 : 1,
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
              <div className={styles.cardNumber}>{step.number}</div>
            </motion.div>
          );
        })}
      </div>

      <button className={styles.viewMoreButton}>View more</button>
    </section>
  );
}

