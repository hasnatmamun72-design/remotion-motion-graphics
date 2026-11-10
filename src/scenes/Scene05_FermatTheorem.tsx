// src/scenes/Scene05_FermatTheorem.tsx — Cues 14-16 (1995 - 2535 frames | 66.5s - 84.5s)
// Fermat's Last Theorem: 11 Days reduced to 30 Hours
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene05_FermatTheorem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const formulaSpring = spring({ frame: frame - 30, fps, config: theme.spring.snappy });
  const barOldSpring = spring({ frame: frame - 120, fps, config: theme.spring.smooth });
  const barNewSpring = spring({ frame: frame - 220, fps, config: theme.spring.smooth });
  const speedupSpring = spring({ frame: frame - 320, fps, config: theme.spring.bouncy });

  // Bar progress
  const oldWidth = interpolate(barOldSpring, [0, 1], [0, 720]);
  const newWidth = interpolate(barNewSpring, [0, 1], [0, 240]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [-20, 0])}px)`,
          padding: "8px 24px",
          borderRadius: 30,
          backgroundColor: "rgba(217, 119, 87, 0.15)",
          border: `1px solid ${theme.colors.primary}`,
          color: theme.colors.primary,
          fontFamily: theme.fonts.display,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: 16,
        }}
      >
        FORMAL MATHEMATICS PROOF
      </div>

      <h1
        style={{
          opacity: titleSpring,
          fontFamily: theme.fonts.display,
          fontSize: 52,
          fontWeight: 800,
          color: theme.colors.text,
          margin: "0 0 20px 0",
          textAlign: "center",
        }}
      >
        Fermat's Last Theorem
      </h1>

      {/* Math Equation Card */}
      <div
        style={{
          opacity: formulaSpring,
          transform: `scale(${interpolate(formulaSpring, [0, 1], [0.9, 1])})`,
          padding: "16px 40px",
          borderRadius: 18,
          backgroundColor: theme.colors.surface,
          border: `1px solid ${theme.colors.surfaceBorder}`,
          marginBottom: 36,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
        }}
      >
        <span
          style={{
            fontFamily: theme.fonts.mono,
            fontSize: 34,
            fontWeight: 700,
            color: theme.colors.accent,
            letterSpacing: "0.05em",
          }}
        >
          aⁿ + bⁿ = cⁿ &nbsp;[n &gt; 2]
        </span>
      </div>

      {/* Comparison Benchmark Bars */}
      <div
        style={{
          width: 860,
          backgroundColor: theme.colors.surface,
          borderRadius: 24,
          border: `1px solid ${theme.colors.surfaceBorder}`,
          padding: "36px 36px",
          boxShadow: `0 16px 50px rgba(0, 0, 0, 0.5)`,
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {/* Baseline Bar */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              fontFamily: theme.fonts.bengali,
              fontSize: 22,
              color: theme.colors.textDim,
              fontWeight: 600,
            }}
          >
            <span>আগের রেকর্ড (Previous Method):</span>
            <span style={{ fontFamily: theme.fonts.display, fontWeight: 700, color: theme.colors.text }}>
              ১১ দিন (২৬৪ ঘণ্টা)
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: 24,
              backgroundColor: "#2E2B25",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(oldWidth / 720) * 100}%`,
                height: "100%",
                backgroundColor: "#716E68",
                borderRadius: 12,
              }}
            />
          </div>
        </div>

        {/* Fable 5.2 Bar */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              fontFamily: theme.fonts.bengali,
              fontSize: 22,
              color: theme.colors.primary,
              fontWeight: 700,
            }}
          >
            <span>Claude Fable 5.2 (১,০০০ Agent):</span>
            <span style={{ fontFamily: theme.fonts.display, fontSize: 26, fontWeight: 800 }}>
              মাত্র ৩০ ঘণ্টা!
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: 28,
              backgroundColor: "#2E2B25",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(newWidth / 720) * 100}%`,
                height: "100%",
                backgroundColor: theme.colors.primary,
                borderRadius: 14,
                boxShadow: `0 0 20px ${theme.colors.primary}`,
              }}
            />
          </div>
        </div>

        {/* Speedup Tag */}
        <div
          style={{
            opacity: speedupSpring,
            transform: `scale(${interpolate(speedupSpring, [0, 1], [0.8, 1])})`,
            alignSelf: "center",
            marginTop: 6,
            padding: "10px 28px",
            borderRadius: 14,
            backgroundColor: "rgba(52, 211, 153, 0.15)",
            border: "1px solid #34D399",
            color: "#34D399",
            fontFamily: theme.fonts.display,
            fontSize: 24,
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span>⚡</span>
          <span>প্রায় ৮.৮ গুণ দ্রুত সমাধান (8.8x Faster)</span>
        </div>
      </div>
    </div>
  );
};
