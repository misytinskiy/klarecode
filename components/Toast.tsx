"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`${styles.toast} ${styles[type]}`}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.toastContent}>
            <span className={styles.toastIcon}>
              {type === "success" ? "✓" : "✕"}
            </span>
            <span className={styles.toastMessage}>{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

