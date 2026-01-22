"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./AboutUs.module.css";

const headingText = `You focus on business growth.
We ensure your infrastructure
is stable, secure, and predictable
— eliminating technical risks
so you don't have to manage them`;

export default function AboutUs() {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const checkNarrow = () => {
      setIsNarrow(window.innerWidth <= 744);
    };
    checkNarrow();
    window.addEventListener("resize", checkNarrow);
    return () => window.removeEventListener("resize", checkNarrow);
  }, []);

  const totalChars = headingText.replace(/\n/g, "").length;
  const letterDelay = 0.04;
  const letterDuration = 0.15;
  const pauseDuration = 1.2;
  const lastLetterWhiteTime = (totalChars - 1) * letterDelay + letterDuration;
  const cycleDuration =
    lastLetterWhiteTime + totalChars * letterDelay + pauseDuration;

  const getCharTimes = (index: number) => {
    const whiteStartTime = index * letterDelay;
    const whiteEndTime = whiteStartTime + letterDuration;
    const grayStartTime = lastLetterWhiteTime + index * letterDelay;
    const grayEndTime = grayStartTime + letterDuration;
    return [
      0,
      whiteStartTime / cycleDuration,
      whiteEndTime / cycleDuration,
      grayStartTime / cycleDuration,
      grayEndTime / cycleDuration,
      1,
    ];
  };

  const renderChar = (char: string, key: string, index: number) => {
    return (
      <motion.span
        key={key}
        className={styles.headingChar}
        initial={{ color: "#818181" }}
        animate={{
          color: [
            "#818181",
            "#818181",
            "#ffffff",
            "#ffffff",
            "#818181",
            "#818181",
          ],
        }}
        transition={{
          duration: cycleDuration,
          times: getCharTimes(index),
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {char}
      </motion.span>
    );
  };

  const headingNodes = headingText.split(/\n/).reduce(
    (lineAcc, line, lineIndex) => {
      const startNodes =
        lineIndex > 0
          ? [...lineAcc.nodes, <br key={`br-${lineIndex}`} />]
          : lineAcc.nodes;
      return line.split(" ").reduce(
        (wordAcc, word, wordIndex) => {
          const hasSpace = wordIndex > 0;
          const spaceNode = hasSpace
            ? renderChar(
                isNarrow ? " " : "\u00A0",
                `space-${lineIndex}-${wordIndex}`,
                wordAcc.charIndex
              )
            : null;
          const charStart = wordAcc.charIndex + (hasSpace ? 1 : 0);
          const wordNodes = word.split("").map((char, charOffset) =>
            renderChar(
              char,
              `char-${lineIndex}-${wordIndex}-${charStart + charOffset}`,
              charStart + charOffset
            )
          );
          const nextCharIndex = charStart + word.length;
          return {
            nodes: [
              ...wordAcc.nodes,
              ...(spaceNode ? [spaceNode] : []),
              <span
                className={styles.headingWord}
                key={`word-${lineIndex}-${wordIndex}`}
              >
                {wordNodes}
              </span>,
            ],
            charIndex: nextCharIndex,
          };
        },
        { nodes: startNodes, charIndex: lineAcc.charIndex }
      );
    },
    { nodes: [] as React.ReactNode[], charIndex: 0 }
  ).nodes;

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
            <motion.div className={styles.headingText}>
              {headingNodes}
            </motion.div>
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
