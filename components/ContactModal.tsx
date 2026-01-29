"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./ContactModal.module.css";
import { useContactModal } from "./ContactModalContext";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [activeTab, setActiveTab] = useState<"message" | "call">("message");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    details: "",
  });

  const MAX_CHARS = 1500;
  const remainingChars = MAX_CHARS - formData.details.length;

  const projectTypes = [
    { value: "web3", label: "Web3" },
    { value: "ai", label: "AI" },
    { value: "telegram", label: "Telegram" },
    { value: "other", label: "Other" },
  ];

  const selectedProjectType = projectTypes.find(
    (type) => type.value === formData.projectType
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleTabChange = (tab: "message" | "call") => {
    setActiveTab(tab);
    if (tab === "call") {
      setIsCalendlyLoading(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.selectWrapper}`)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setFormData({ ...formData, details: value });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* Close button */}
            <button className={styles.closeButton} onClick={closeModal}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="white"
                />
              </svg>
            </button>

            <div className={styles.modalContent}>
              {/* Left Section */}
              <div className={styles.leftSection}>
                <h2 className={styles.leftTitle}>
                  Let&apos;s build something great.
                </h2>
                <p className={styles.leftSubtitle}>
                  Tell us about your challenge. <br /> We usually respond within
                  2 hours.
                </p>

                <div className={styles.featuresList}>
                  <div className={styles.featureItem}>
                    <Image
                      src="/form/listIcon.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>NDA-protected consultation</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Image
                      src="/form/listIcon.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>Technical roadmap within 48h</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Image
                      src="/form/listIcon.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>Rough estimate & timeline</span>
                  </div>
                </div>

                <div className={styles.contacts}>
                  <div className={styles.contactItem}>
                    <Image
                      src="/form/emailIcon.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>hello@klarecode.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <Image
                      src="/form/telegramIcon.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>@klarecode</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className={styles.rightSection}>
                {/* Tabs */}
                <div className={styles.tabs}>
                  <button
                    className={`${styles.tab} ${
                      activeTab === "message" ? styles.tabActive : ""
                    }`}
                    onClick={() => handleTabChange("message")}
                  >
                    Send message
                  </button>
                  <button
                    className={`${styles.tab} ${
                      activeTab === "call" ? styles.tabActive : ""
                    }`}
                    onClick={() => handleTabChange("call")}
                  >
                    Book a call
                  </button>
                </div>

                {/* Form or Calendly */}
                {activeTab === "message" ? (
                  <form className={styles.form}>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className={styles.input}
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <div className={styles.selectWrapper}>
                      <button
                        type="button"
                        className={`${styles.customSelect} ${
                          formData.projectType ? styles.selectFilled : ""
                        } ${isDropdownOpen ? styles.selectOpen : ""}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>
                          {selectedProjectType
                            ? selectedProjectType.label
                            : "Project Type"}
                        </span>
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={styles.selectArrow}
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {isDropdownOpen && (
                        <motion.div
                          className={styles.dropdown}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {projectTypes.map((type) => (
                            <button
                              key={type.value}
                              type="button"
                              className={`${styles.dropdownOption} ${
                                formData.projectType === type.value
                                  ? styles.dropdownOptionActive
                                  : ""
                              }`}
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  projectType: type.value,
                                });
                                setIsDropdownOpen(false);
                              }}
                            >
                              {type.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    <div className={styles.textareaWrapper}>
                      <textarea
                        placeholder="Project Details"
                        className={styles.textarea}
                        value={formData.details}
                        onChange={handleDetailsChange}
                        rows={5}
                      />
                      <span className={styles.charCount}>{remainingChars}</span>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                      Send Request
                    </button>

                    <p className={styles.privacyText}>
                      By clicking &quot;Send Request&quot; you agree to our{" "}
                      <a href="#" className={styles.privacyLink}>
                        Privacy Policy.
                      </a>
                    </p>
                  </form>
                ) : (
                  <div className={styles.calendlyContainer}>
                    {isCalendlyLoading && (
                      <div className={styles.calendlySkeleton}>
                        <div className={styles.skeletonHeader}>
                          <div
                            className={styles.skeletonLine}
                            style={{ width: "60%", height: "24px" }}
                          />
                          <div
                            className={styles.skeletonLine}
                            style={{ width: "40%", height: "16px" }}
                          />
                        </div>
                        <div className={styles.skeletonContent}>
                          <div
                            className={styles.skeletonLine}
                            style={{
                              width: "100%",
                              height: "12px",
                              marginBottom: "12px",
                            }}
                          />
                          <div
                            className={styles.skeletonLine}
                            style={{
                              width: "90%",
                              height: "12px",
                              marginBottom: "12px",
                            }}
                          />
                          <div
                            className={styles.skeletonLine}
                            style={{
                              width: "85%",
                              height: "12px",
                              marginBottom: "12px",
                            }}
                          />
                          <div
                            className={styles.skeletonLine}
                            style={{
                              width: "95%",
                              height: "12px",
                              marginBottom: "24px",
                            }}
                          />
                          <div className={styles.skeletonCard} />
                          <div className={styles.skeletonCard} />
                          <div className={styles.skeletonCard} />
                        </div>
                      </div>
                    )}
                    <iframe
                      src="https://calendly.com/s2d_mm?embed=true"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      className={styles.calendlyIframe}
                      title="Calendly Scheduling"
                      onLoad={() => setIsCalendlyLoading(false)}
                      style={{ display: isCalendlyLoading ? "none" : "block" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
