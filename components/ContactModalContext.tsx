"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ContactModalContextType {
  openModal: (tab?: "message" | "call") => void;
  closeModal: () => void;
  isOpen: boolean;
  initialTab: "message" | "call" | null;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<"message" | "call" | null>(null);

  const openModal = (tab?: "message" | "call") => {
    setInitialTab(tab || null);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setInitialTab(null);
  };

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal, isOpen, initialTab }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error(
      "useContactModal must be used within a ContactModalProvider"
    );
  }
  return context;
}

