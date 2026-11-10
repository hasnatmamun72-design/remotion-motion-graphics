// src/components/ClaudeAsterisk.tsx — Procedural Anthropic Claude Asterisk / Starburst Logo
import React from "react";
import { theme } from "../theme";

export const ClaudeAsterisk: React.FC<{
  size?: number;
  color?: string;
  rotation?: number;
  glow?: boolean;
}> = ({ size = 80, color = theme.colors.primary, rotation = 0, glow = true }) => {
  const arms = 12;
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `rotate(${rotation}deg)`,
        filter: glow ? `drop-shadow(0 0 20px ${color}88)` : undefined,
      }}
    >
      {Array.from({ length: arms }).map((_, i) => {
        const angle = (i * 360) / arms;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size * 0.12,
              height: size * 0.44,
              backgroundColor: color,
              borderRadius: size * 0.06,
              transformOrigin: "center bottom",
              transform: `rotate(${angle}deg) translateY(-${size * 0.12}px)`,
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          width: size * 0.28,
          height: size * 0.28,
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />
    </div>
  );
};
