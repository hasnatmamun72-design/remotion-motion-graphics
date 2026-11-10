// src/scenes/Scene13_SummaryCTA.tsx — Cues 40-43 (6120 - 6630 frames | 204.0s - 221.0s)
// Conclusion: A New AI Paradigm & Interactive Call to Action (Comment & Subscribe)
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ClaudeAsterisk } from "../components/ClaudeAsterisk";
import { theme } from "../theme";

export const Scene13_SummaryCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const cardSpring = spring({ frame: frame - 25, fps, config: theme.spring.smooth });
  const commentSpring = spring({ frame: frame - 220, fps, config: theme.spring.snappy });
  const subSpring = spring({ frame: frame - 340, fps, config: theme.spring.bouncy });

  // Floating breathing
  const breathe = Math.sin(frame / 20) * 4;

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
      {/* Small Logo Mark Top */}
      <div style={{ transform: `translateY(${breathe}px)`, marginBottom: 16 }}>
        <ClaudeAsterisk size={64} color={theme.colors.primary} />
      </div>

      <div
        style={{
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [-20, 0])}px)`,
          padding: "6px 22px",
          borderRadius: 30,
          backgroundColor: "rgba(217, 119, 87, 0.15)",
          border: `1px solid ${theme.colors.primary}`,
          color: theme.colors.primary,
          fontFamily: theme.fonts.display,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: 16,
        }}
      >
        THE NEW AI ERA
      </div>

      {/* Main Core Takeaway Card */}
      <div
        style={{
          opacity: cardSpring,
          transform: `scale(${interpolate(cardSpring, [0, 1], [0.92, 1])})`,
          width: 880,
          backgroundColor: theme.colors.surface,
          borderRadius: 24,
          border: `2px solid ${theme.colors.primary}`,
          padding: "32px 36px",
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.5), 0 0 45px ${theme.colors.glow}`,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <h2
          style={{
            fontFamily: theme.fonts.bengali,
            fontSize: 38,
            fontWeight: 800,
            color: theme.colors.text,
            margin: "0 0 12px 0",
            lineHeight: 1.35,
          }}
        >
          AI এখন আর শুধু প্রশ্নের উত্তর দেয় না।
        </h2>
        <p
          style={{
            fontFamily: theme.fonts.bengali,
            fontSize: 24,
            fontWeight: 600,
            color: theme.colors.accent,
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          একটি পুরো টিমের মতো দিনের পর দিন কাজ করে পূর্ণাঙ্গ প্রজেক্ট সফলভাবে শেষ করতে পারছে। Fable 5.2 সেই ঐতিহাসিক বদলের নতুন ধাপ।
        </p>
      </div>

      {/* Interactive Comment Call to Action */}
      <div
        style={{
          opacity: commentSpring,
          transform: `translateY(${interpolate(commentSpring, [0, 1], [25, 0])})`,
          width: 880,
          backgroundColor: "#2E2B25",
          borderRadius: 20,
          border: `1px solid ${theme.colors.surfaceBorder}`,
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          gap: 18,
          marginBottom: 20,
        }}
      >
        <span style={{ fontSize: 32 }}>💬</span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 24,
              fontWeight: 700,
              color: theme.colors.text,
            }}
          >
            তুমি কোন কাজে এটা পরীক্ষা করতে চাও?
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 18,
              color: theme.colors.textDim,
            }}
          >
            তোমার মতামত নিচে কমেন্টে জানাও!
          </div>
        </div>
      </div>

      {/* Subscribe Button with Bell */}
      <div
        style={{
          opacity: subSpring,
          transform: `scale(${interpolate(subSpring, [0, 1], [0.85, 1])})`,
          padding: "16px 44px",
          borderRadius: 40,
          backgroundColor: theme.colors.primary,
          boxShadow: `0 12px 35px ${theme.colors.glow}`,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 28 }}>🔔</span>
        <span
          style={{
            fontFamily: theme.fonts.bengali,
            fontSize: 26,
            fontWeight: 800,
            color: "#FAF7F2",
            letterSpacing: "0.02em",
          }}
        >
          Tech Update পেতে Subscribe করে রাখো
        </span>
      </div>
    </div>
  );
};
