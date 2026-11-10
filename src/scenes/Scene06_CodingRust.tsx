// src/scenes/Scene06_CodingRust.tsx — Cues 16-19 (2535 - 2955 frames | 84.5s - 98.5s)
// Breakthrough 01: Coding — 90%+ Codebase Written by Claude & Python -> Rust 26x Speedup
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene06_CodingRust: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const card1 = spring({ frame: frame - 20, fps, config: theme.spring.smooth });
  const card2 = spring({ frame: frame - 140, fps, config: theme.spring.smooth });
  const stat26Spring = spring({ frame: frame - 240, fps, config: theme.spring.bouncy });

  const pct = Math.min(
    90,
    Math.floor(
      interpolate(frame, [30, 110], [0, 90], {
        easing: theme.ease.out,
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

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
      {/* Step Badge */}
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
        BREAKTHROUGH 01 • SOFTWARE ENGINEERING
      </div>

      <h1
        style={{
          opacity: titleSpring,
          fontFamily: theme.fonts.bengali,
          fontSize: 48,
          fontWeight: 700,
          color: theme.colors.text,
          margin: "0 0 32px 0",
          textAlign: "center",
        }}
      >
        এক, Coding &amp; Architecture
      </h1>

      {/* Grid of Two Key Results */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          width: 880,
        }}
      >
        {/* Metric 1: 90%+ Anthropic Codebase */}
        <div
          style={{
            opacity: card1,
            transform: `translateY(${interpolate(card1, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 22,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            gap: 32,
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Circular KPI */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: `6px solid ${theme.colors.primary}`,
              boxShadow: `0 0 25px ${theme.colors.glow}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 38,
                fontWeight: 800,
                color: theme.colors.primary,
              }}
            >
              &gt;{pct}%
            </span>
          </div>

          <div>
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 22,
                fontWeight: 700,
                color: theme.colors.text,
                marginBottom: 6,
              }}
            >
              Anthropic Internal Codebase
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 22,
                color: theme.colors.textDim,
                lineHeight: 1.4,
              }}
            >
              কোডবেসে যত পরিবর্তন যুক্ত হয়, তার ৯০%+ এখন মানুষের নির্দেশনায় Claude লিখছে।
            </div>
          </div>
        </div>

        {/* Metric 2: Python to Rust Migration (26x Faster) */}
        <div
          style={{
            opacity: card2,
            transform: `translateY(${interpolate(card2, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 22,
            border: `2px solid ${theme.colors.primary}`,
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: `0 16px 50px rgba(0, 0, 0, 0.5), 0 0 30px ${theme.colors.glow}`,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 20,
                fontWeight: 700,
                color: theme.colors.accent,
                marginBottom: 8,
              }}
            >
              PRODUCTION SERVICE RE-ARCHITECTURE
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  padding: "6px 16px",
                  borderRadius: 8,
                  backgroundColor: "#2E2B25",
                  fontFamily: theme.fonts.mono,
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#38BDF8",
                }}
              >
                Python
              </span>
              <span style={{ fontSize: 24, color: theme.colors.primary }}>➔</span>
              <span
                style={{
                  padding: "6px 16px",
                  borderRadius: 8,
                  backgroundColor: "rgba(217, 119, 87, 0.2)",
                  border: `1px solid ${theme.colors.primary}`,
                  fontFamily: theme.fonts.mono,
                  fontSize: 20,
                  fontWeight: 700,
                  color: theme.colors.primary,
                }}
              >
                Rust
              </span>
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 20,
                color: theme.colors.textDim,
              }}
            >
              স্বয়ংক্রিয় রি-রাইট ও প্রোডাকশনে সফল ডিপ্লয়
            </div>
          </div>

          {/* Hero 26x Speed Badge */}
          <div
            style={{
              opacity: stat26Spring,
              transform: `scale(${interpolate(stat26Spring, [0, 1], [0.8, 1])})`,
              padding: "16px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(52, 211, 153, 0.15)",
              border: "2px solid #34D399",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 48,
                fontWeight: 800,
                color: "#34D399",
                lineHeight: 1,
              }}
            >
              26x
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 18,
                fontWeight: 700,
                color: theme.colors.text,
                marginTop: 4,
              }}
            >
              গুণ দ্রুত চলে!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
