// src/components/Grade.tsx — Color Grade Overlay
import React from "react";
import { AbsoluteFill } from "remotion";
import { theme } from "../theme";

export const Grade: React.FC = () => (
  <AbsoluteFill style={{ pointerEvents: "none", zIndex: 90 }}>
    {/* Soft warm tint to unify all imagery and UI */}
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.primary,
        mixBlendMode: "soft-light",
        opacity: 0.14,
      }}
    />
    {/* Top and bottom subtle cinematic gradient */}
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.35) 100%)",
      }}
    />
  </AbsoluteFill>
);
