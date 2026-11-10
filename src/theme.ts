// src/theme.ts — Single source of truth for Claude Warm Keynote theme.
// Never inline hex colors or raw spring configs in components.
import { Easing } from "remotion";

export const theme = {
  colors: {
    bg: "#181714",
    bgAlt: "#1F1E1B",
    surface: "#24221E",
    surfaceHover: "#2E2B25",
    surfaceBorder: "rgba(217, 119, 87, 0.2)",
    primary: "#D97757", // Claude Terracotta / Coral — hero color
    accent: "#E28D73",  // Light Coral
    accentWarm: "#E8A33D", // Amber accent
    accentCyan: "#00E5FF", // Tech accent
    accentGreen: "#34D399", // Success metric
    text: "#FAF7F2",
    textDim: "#A8A29E",
    glow: "rgba(217, 119, 87, 0.4)",
    captionBg: "rgba(24, 23, 20, 0.94)",
  },
  fonts: {
    display: "'Space Grotesk', 'Hind Siliguri', sans-serif",
    bengali: "'Hind Siliguri', sans-serif",
    mono: "'Courier New', monospace",
  },
  ease: {
    out: Easing.bezier(0.16, 1, 0.3, 1), // easeOutExpo — entrances
    inOut: Easing.bezier(0.83, 0, 0.17, 1), // easeInOutQuint — moves
    in: Easing.bezier(0.7, 0, 0.84, 0), // exits
  },
  spring: {
    snappy: { damping: 14, stiffness: 160, mass: 0.6 },
    smooth: { damping: 20, stiffness: 90, mass: 1 },
    bouncy: { damping: 11, stiffness: 170, mass: 0.7 },
  },
} as const;
