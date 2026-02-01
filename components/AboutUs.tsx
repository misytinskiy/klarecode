"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AboutUs.module.css";

const headingText = `You focus on business growth.
We ensure your infrastructure
is stable, secure, and predictable
— eliminating technical risks
so you don't have to manage them`;

function HeadingChar({
  char,
  className,
  index,
  scrollProgress,
  totalChars,
}: {
  char: string;
  className: string;
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  totalChars: number;
}) {
  const start = index / Math.max(totalChars, 1);
  const end = (index + 1) / Math.max(totalChars, 1);
  const color = useTransform(
    scrollProgress,
    [start, end],
    ["#818181", "#ffffff"]
  );

  return (
    <motion.span className={className} style={{ color }}>
      {char}
    </motion.span>
  );
}

export default function AboutUs() {
  const [isNarrow, setIsNarrow] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "start 0.2"],
  });

  useEffect(() => {
    const checkNarrow = () => {
      setIsNarrow(window.innerWidth <= 744);
    };
    checkNarrow();
    window.addEventListener("resize", checkNarrow);
    return () => window.removeEventListener("resize", checkNarrow);
  }, []);

  const totalChars = useMemo(() => headingText.replace(/\n/g, "").length, []);

  const headingNodes = headingText.split(/\n/).reduce(
    (lineAcc, line, lineIndex) => {
      const startNodes =
        lineIndex > 0
          ? [...lineAcc.nodes, <br key={`br-${lineIndex}`} />]
          : lineAcc.nodes;
      return line.split(" ").reduce(
        (wordAcc, word, wordIndex) => {
          const hasSpace = wordIndex > 0;
          const spaceNode = hasSpace ? (
            <HeadingChar
              key={`space-${lineIndex}-${wordIndex}`}
              char={isNarrow ? " " : "\u00A0"}
              className={styles.headingChar}
              index={wordAcc.charIndex}
              scrollProgress={scrollYProgress}
              totalChars={totalChars}
            />
          ) : null;
          const charStart = wordAcc.charIndex + (hasSpace ? 1 : 0);
          const wordNodes = word
            .split("")
            .map((char, charOffset) => (
              <HeadingChar
                key={`char-${lineIndex}-${wordIndex}-${charStart + charOffset}`}
                char={char}
                className={styles.headingChar}
                index={charStart + charOffset}
                scrollProgress={scrollYProgress}
                totalChars={totalChars}
              />
            ));
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
    <section className={styles.aboutUs} ref={sectionRef}>
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
