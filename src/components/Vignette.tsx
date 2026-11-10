// src/components/Vignette.tsx — Cinematic Radial Vignette
import React from "react";
import { AbsoluteFill } from "remotion";

export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(circle at 50% 50%, transparent 60%, rgba(10, 9, 8, 0.55) 100%)",
      pointerEvents: "none",
      zIndex: 96,
    }}
  />
);
