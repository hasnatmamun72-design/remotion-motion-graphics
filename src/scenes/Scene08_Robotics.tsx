// src/scenes/Scene08_Robotics.tsx — Cues 23-24 (3480 - 3870 frames | 116.0s - 129.0s)
// Breakthrough 03: Robotics — 64.9% Score on Simulated Robot Arm Test (More than 2x Fable 5.1)
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene08_Robotics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const tasksSpring = spring({ frame: frame - 25, fps, config: theme.spring.smooth });
  const gaugeSpring = spring({ frame: frame - 100, fps, config: theme.spring.snappy });
  const compSpring = spring({ frame: frame - 220, fps, config: theme.spring.bouncy });

  // Score counter 0 -> 64.9%
  const scoreVal = interpolate(frame, [100, 220], [0, 64.9], {
    easing: theme.ease.out,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }).toFixed(1);

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
        BREAKTHROUGH 03 • ROBOTICS &amp; MANIPULATION
      </div>

      <h1
        style={{
          opacity: titleSpring,
          fontFamily: theme.fonts.bengali,
          fontSize: 48,
          fontWeight: 700,
          color: theme.colors.text,
          margin: "0 0 24px 0",
          textAlign: "center",
        }}
      >
        তিন, Robot Arm Control
      </h1>

      {/* 3 Robot Tasks Strip */}
      <div
        style={{
          opacity: tasksSpring,
          transform: `scale(${interpolate(tasksSpring, [0, 1], [0.92, 1])})`,
          display: "flex",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            padding: "10px 22px",
            borderRadius: 14,
            backgroundColor: "#2E2B25",
            border: `1px solid ${theme.colors.surfaceBorder}`,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: theme.fonts.bengali,
            fontSize: 20,
            color: theme.colors.text,
          }}
        >
          <span>🧊</span> Puzzle Cube সমাধান
        </div>

        <div
          style={{
            padding: "10px 22px",
            borderRadius: 14,
            backgroundColor: "#2E2B25",
            border: `1px solid ${theme.colors.surfaceBorder}`,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: theme.fonts.bengali,
            fontSize: 20,
            color: theme.colors.text,
          }}
        >
          <span>🍾</span> বোতলের ছিপি খোলা
        </div>

        <div
          style={{
            padding: "10px 22px",
            borderRadius: 14,
            backgroundColor: "#2E2B25",
            border: `1px solid ${theme.colors.surfaceBorder}`,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: theme.fonts.bengali,
            fontSize: 20,
            color: theme.colors.text,
          }}
        >
          <span>🎨</span> ছবি আঁকা
        </div>
      </div>

      {/* Central Robot Arm Benchmark Card */}
      <div
        style={{
          opacity: gaugeSpring,
          transform: `scale(${interpolate(gaugeSpring, [0, 1], [0.9, 1])})`,
          width: 860,
          backgroundColor: theme.colors.surface,
          borderRadius: 24,
          border: `2px solid ${theme.colors.primary}`,
          padding: "36px 36px",
          boxShadow: `0 16px 50px rgba(0, 0, 0, 0.5), 0 0 40px ${theme.colors.glow}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 20,
            fontWeight: 700,
            color: theme.colors.accent,
            letterSpacing: "0.08em",
            marginBottom: 10,
          }}
        >
          SIMULATED ROBOT ARM TEST SCORE
        </div>

        {/* Hero Score */}
        <div
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 76,
            fontWeight: 800,
            color: theme.colors.primary,
            lineHeight: 1,
            marginBottom: 16,
            textShadow: `0 0 30px ${theme.colors.glow}`,
          }}
        >
          {scoreVal}%
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: "80%",
            height: 18,
            backgroundColor: "#2E2B25",
            borderRadius: 9,
            overflow: "hidden",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: `${scoreVal}%`,
              height: "100%",
              backgroundColor: theme.colors.primary,
              borderRadius: 9,
              boxShadow: `0 0 15px ${theme.colors.primary}`,
            }}
          />
        </div>

        {/* Comparison Tag: >2x Fable 5.1 */}
        <div
          style={{
            opacity: compSpring,
            transform: `scale(${interpolate(compSpring, [0, 1], [0.85, 1])})`,
            padding: "10px 24px",
            borderRadius: 14,
            backgroundColor: "rgba(52, 211, 153, 0.15)",
            border: "1px solid #34D399",
            color: "#34D399",
            fontFamily: theme.fonts.bengali,
            fontSize: 22,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span>🚀</span>
          <span>আগের Fable 5.1-এর তুলনায় দ্বিগুণেরও বেশি স্কোর! (2x+ Jump)</span>
        </div>
      </div>
    </div>
  );
};
