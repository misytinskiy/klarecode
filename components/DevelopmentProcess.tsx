"use client";

import { motion } from "framer-motion";
import styles from "./DevelopmentProcess.module.css";
import { useContactModal } from "./ContactModalContext";

const steps = [
  {
    title: "Discovery",
    description:
      "We audit your goals, define technical requirements, and build a roadmap.",
    number: "01",
  },
  {
    title: "Architecture/Design",
    description:
      "Scalable system design, database structure, and high-fidelity UI/UX prototypes.",
    number: "02",
  },
  {
    title: "Development",
    description:
      "Agile sprints with bi-weekly demos. Clean code and rigorous testing.",
    number: "03",
  },
  {
    title: "Launch",
    description:
      "Deployment to production, final QA, and seamless onboarding for your team.",
    number: "04",
  },
  {
    title: "Support",
    description: "24/7 monitoring, bug fixing, and iterative feature updates.",
    number: "05",
  },
];

export default function DevelopmentProcess() {
  const { openModal } = useContactModal();

  return (
    <section id="process" className={styles.developmentProcess}>
      <h2 className={styles.title}>Development Process</h2>

      <div className={styles.cards}>
        {steps.map((step, index) => {
          return (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className={styles.cardTitleWrapper}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <div className={styles.cardNumber}>{step.number}</div>
              </div>
              <p className={styles.cardDescription}>{step.description}</p>
            </motion.div>
          );
        })}
      </div>

      <button
        className={styles.viewMoreButton}
        onClick={() => openModal("message")}
      >
        Discuss
      </button>
    </section>
  );
}
