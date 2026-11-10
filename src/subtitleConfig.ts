// src/subtitleConfig.ts — Stable News Caption subtitle configuration
export interface SubtitleConfig {
  enabled: boolean;
  preset: "news" | "minimal" | "karaoke" | "cinematic" | "social";
  boxWidth: number;
  boxHeight: number;
  boxLeft: number;
  boxTop: number;
  maxLines: number;
  lineHeightPx: number;
  fontSizePx: number;
  maxCharsPerPage: number;
  paddingX: number;
  paddingY: number;
  stripeWidth: number;
  colors: {
    bg: string;
    text: string;
    highlight: string;
    stripe: string;
    border: string;
  };
}

export const subtitleConfig: SubtitleConfig = {
  enabled: true,
  preset: "news",
  boxWidth: 940,
  boxHeight: 160,
  boxLeft: 70,
  boxTop: 1640, // Inside 9:16 safe zone (captions below 1580px, above bottom UI)
  maxLines: 2,
  lineHeightPx: 64,
  fontSizePx: 38,
  maxCharsPerPage: 54,
  paddingX: 32,
  paddingY: 16,
  stripeWidth: 6,
  colors: {
    bg: "rgba(24, 23, 20, 0.94)",
    text: "#FAF7F2",
    highlight: "#D97757",
    stripe: "#D97757",
    border: "rgba(217, 119, 87, 0.25)",
  },
};
