// src/components/BackgroundMotif.tsx — Atmospheric Warm Keynote Background
import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { theme } from "../theme";

export const BackgroundMotif: React.FC = () => {
  const frame = useCurrentFrame();
  const d1 = Math.sin(frame / 60) * 40;
  const d2 = Math.cos(frame / 75) * 35;
  const rot = (frame * 0.08) % 360;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.bg,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Subtle Warm Base Radial Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 35%, #24211C 0%, ${theme.colors.bg} 85%)`,
        }}
      />

      {/* Atmospheric Terracotta Glow Orb Top-Right */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          top: -250 + d1,
          right: -250,
          background: `radial-gradient(circle, ${theme.colors.primary}22 0%, transparent 68%)`,
          filter: "blur(60px)",
        }}
      />

      {/* Atmospheric Accent Warm Glow Bottom-Left */}
      <div
        style={{
          position: "absolute",
          width: 850,
          height: 850,
          borderRadius: "50%",
          bottom: -300 - d2,
          left: -200,
          background: `radial-gradient(circle, ${theme.colors.accentWarm}18 0%, transparent 68%)`,
          filter: "blur(70px)",
        }}
      />

      {/* Subtle Tech Grid Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(217, 119, 87, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 87, 0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />

      {/* Rotating Atmospheric Orbit Ring */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 1400,
          borderRadius: "50%",
          top: 260,
          left: -160,
          border: `1px dashed rgba(217, 119, 87, 0.08)`,
          transform: `rotate(${rot}deg)`,
        }}
      />
    </AbsoluteFill>
  );
};
