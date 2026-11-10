// src/scenes/Scene02_ClaudeFableReveal.tsx — Cues 4-5 (390 - 630 frames | 13.0s - 21.0s)
// Engineer Prompt -> Anthropic's new model: Claude Fable 5.2 Reveal with User's App Screenshot
import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { ClaudeAsterisk } from "../components/ClaudeAsterisk";
import { theme } from "../theme";

export const Scene02_ClaudeFableReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance springs
  const heroSpring = spring({ frame, fps, config: theme.spring.smooth });
  const phoneSpring = spring({ frame: frame - 25, fps, config: theme.spring.smooth });
  const badgeSpring = spring({ frame: frame - 45, fps, config: theme.spring.bouncy });

  // Floating breathing animation
  const breathe = Math.sin(frame / 20) * 6;

  // Asterisk rotation
  const asteriskRot = interpolate(frame, [0, 240], [0, 180], {
    easing: theme.ease.inOut,
  });

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
      {/* Top Engineer Prompt Bubble */}
      <div
        style={{
          opacity: heroSpring,
          transform: `translateY(${interpolate(heroSpring, [0, 1], [-30, 0])}px)`,
          maxWidth: 820,
          backgroundColor: "rgba(36, 34, 30, 0.9)",
          borderRadius: 20,
          border: `1px solid ${theme.colors.surfaceBorder}`,
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 36,
          boxShadow: "0 12px 35px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "rgba(217, 119, 87, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
          }}
        >
          👨‍💻
        </div>
        <div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 16,
              color: theme.colors.primary,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Human Engineer Direction
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 24,
              color: theme.colors.text,
              fontWeight: 600,
            }}
          >
            "শুধু নির্দেশনা ধরিয়ে দেওয়া হয়েছিল, বাকিটা করেছে AI"
          </div>
        </div>
      </div>

      {/* Main Card with App Preview and Asterisk */}
      <div
        style={{
          width: 880,
          backgroundColor: theme.colors.surface,
          borderRadius: 28,
          border: `2px solid ${theme.colors.surfaceBorder}`,
          boxShadow: `0 24px 70px rgba(0, 0, 0, 0.6), 0 0 60px ${theme.colors.glow}`,
          padding: "44px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Behind Asterisk */}
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.colors.primary}44 0%, transparent 70%)`,
            top: 20,
            filter: "blur(40px)",
          }}
        />

        {/* Claude Asterisk Animated Logo */}
        <div style={{ transform: `translateY(${breathe}px)`, marginBottom: 20 }}>
          <ClaudeAsterisk size={110} color={theme.colors.primary} rotation={asteriskRot} />
        </div>

        {/* Company & Model Title */}
        <div
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 24,
            fontWeight: 700,
            color: theme.colors.accent,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Anthropic Announces
        </div>

        <h1
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 68,
            fontWeight: 800,
            color: theme.colors.text,
            margin: "0 0 16px 0",
            textAlign: "center",
            textShadow: `0 0 30px ${theme.colors.primary}66`,
            letterSpacing: "-0.02em",
          }}
        >
          Claude Fable 5.2
        </h1>

        {/* Mobile App Screenshot Card (User Asset) */}
        <div
          style={{
            opacity: phoneSpring,
            transform: `scale(${interpolate(phoneSpring, [0, 1], [0.88, 1])})`,
            width: 380,
            height: 480,
            borderRadius: 22,
            border: "2px solid #3A362F",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.7)",
            marginBottom: 24,
            backgroundColor: "#0D0D0D",
          }}
        >
          <Img
            src={staticFile("assets/claude_app_home.jpeg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
          {/* Badge Label */}
          <div
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              padding: "4px 10px",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              borderRadius: 6,
              color: "#A1A1AA",
              fontSize: 11,
              fontFamily: theme.fonts.mono,
              letterSpacing: "0.05em",
            }}
          >
            OFFICIAL APP UI
          </div>
        </div>

        {/* Capability Pill */}
        <div
          style={{
            opacity: badgeSpring,
            transform: `scale(${interpolate(badgeSpring, [0, 1], [0.8, 1])})`,
            padding: "10px 28px",
            borderRadius: 30,
            backgroundColor: "rgba(217, 119, 87, 0.2)",
            border: `1px solid ${theme.colors.primary}`,
            color: theme.colors.text,
            fontFamily: theme.fonts.bengali,
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          ✨ সবচেয়ে কঠিন কাজের জন্য নতুন ফ্ল্যাগশিপ AI
        </div>
      </div>
    </div>
  );
};
