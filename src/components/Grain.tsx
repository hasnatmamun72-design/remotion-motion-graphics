// src/components/Grain.tsx — Procedural SVG Fractal Noise Grain
import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const Grain: React.FC = () => {
  const frame = useCurrentFrame();
  const shift = (frame % 4) * 25;
  const noise = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`;

  return (
    <AbsoluteFill
      style={{
        backgroundImage: noise,
        backgroundPosition: `${shift}px ${shift}px`,
        mixBlendMode: "overlay",
        opacity: 0.16,
        pointerEvents: "none",
        zIndex: 95,
      }}
    />
  );
};
