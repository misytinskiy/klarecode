"use client";

import { useEffect } from "react";

export default function Favicon() {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll('link[rel="icon"]');
    existingLinks.forEach((link) => link.remove());

    // Add favicon for light theme
    const lightLink = document.createElement("link");
    lightLink.rel = "icon";
    lightLink.href = "/favIcoLightTheme.svg";
    lightLink.setAttribute("media", "(prefers-color-scheme: light)");
    document.head.appendChild(lightLink);

    // Add favicon for dark theme
    const darkLink = document.createElement("link");
    darkLink.rel = "icon";
    darkLink.href = "/favIcoDarkTheme.svg";
    darkLink.setAttribute("media", "(prefers-color-scheme: dark)");
    document.head.appendChild(darkLink);

    // Listen for theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateFavicon = () => {
      const isDark = mediaQuery.matches;
      lightLink.setAttribute("media", isDark ? "none" : "(prefers-color-scheme: light)");
      darkLink.setAttribute("media", isDark ? "(prefers-color-scheme: dark)" : "none");
    };

    mediaQuery.addEventListener("change", updateFavicon);
    updateFavicon();

    return () => {
      mediaQuery.removeEventListener("change", updateFavicon);
    };
  }, []);

  return null;
}

