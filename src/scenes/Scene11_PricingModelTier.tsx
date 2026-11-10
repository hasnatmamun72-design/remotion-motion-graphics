// src/scenes/Scene11_PricingModelTier.tsx — Cues 32-34 (4890 - 5445 frames | 163.0s - 181.5s)
// Developer Pricing ($8 In / $40 Out), Fast Mode (2.5x), & Model Selector (Opus 5.5 vs Fable 5.2)
import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene11_PricingModelTier: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const pricingSpring = spring({ frame: frame - 20, fps, config: theme.spring.smooth });
  const fastSpring = spring({ frame: frame - 140, fps, config: theme.spring.bouncy });
  const modelTierSpring = spring({ frame: frame - 240, fps, config: theme.spring.smooth });

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
        DEVELOPER PRICING &amp; MODEL TIER
      </div>

      <h1
        style={{
          opacity: titleSpring,
          fontFamily: theme.fonts.bengali,
          fontSize: 48,
          fontWeight: 700,
          color: theme.colors.text,
          margin: "0 0 28px 0",
          textAlign: "center",
        }}
      >
        Developer API প্রাইসিং ও মডেল নির্বাচন
      </h1>

      {/* Pricing Card with Fast Mode */}
      <div
        style={{
          opacity: pricingSpring,
          transform: `translateY(${interpolate(pricingSpring, [0, 1], [30, 0])}px)`,
          width: 880,
          backgroundColor: theme.colors.surface,
          borderRadius: 22,
          border: `1px solid ${theme.colors.surfaceBorder}`,
          padding: "26px 36px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
          marginBottom: 24,
        }}
      >
        {/* Token Pricing */}
        <div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 18,
              fontWeight: 700,
              color: theme.colors.textDim,
              marginBottom: 8,
            }}
          >
            STANDARD TOKEN PRICING (PER 1M TOKENS)
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <div>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 38, fontWeight: 800, color: theme.colors.primary }}>
                $8
              </span>
              <span style={{ fontFamily: theme.fonts.bengali, fontSize: 18, color: theme.colors.textDim, marginLeft: 8 }}>
                Input
              </span>
            </div>
            <div style={{ width: 1, height: 32, backgroundColor: theme.colors.surfaceBorder }} />
            <div>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 38, fontWeight: 800, color: theme.colors.accentWarm }}>
                $40
              </span>
              <span style={{ fontFamily: theme.fonts.bengali, fontSize: 18, color: theme.colors.textDim, marginLeft: 8 }}>
                Output
              </span>
            </div>
          </div>
        </div>

        {/* Fast Mode Toggle Tag */}
        <div
          style={{
            opacity: fastSpring,
            transform: `scale(${interpolate(fastSpring, [0, 1], [0.85, 1])})`,
            padding: "12px 20px",
            borderRadius: 14,
            backgroundColor: "rgba(217, 119, 87, 0.15)",
            border: `1px solid ${theme.colors.primary}`,
            textAlign: "right",
          }}
        >
          <div style={{ fontFamily: theme.fonts.display, fontSize: 18, fontWeight: 700, color: theme.colors.primary }}>
            ⚡ Fast Mode: 2.5x Speed
          </div>
          <div style={{ fontFamily: theme.fonts.bengali, fontSize: 15, color: theme.colors.textDim, marginTop: 2 }}>
            (দাম দ্বিগুণ: 2x Cost)
          </div>
        </div>
      </div>

      {/* Model Selection Recommendation with Mobile Screenshot */}
      <div
        style={{
          opacity: modelTierSpring,
          transform: `translateY(${interpolate(modelTierSpring, [0, 1], [30, 0])}px)`,
          width: 880,
          backgroundColor: theme.colors.surface,
          borderRadius: 22,
          border: `2px solid ${theme.colors.primary}`,
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          gap: 28,
          boxShadow: `0 16px 50px rgba(0, 0, 0, 0.5), 0 0 30px ${theme.colors.glow}`,
        }}
      >
        {/* Model Selector Screenshot Clip (User Asset) */}
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 16,
            border: "1px solid #3A362F",
            overflow: "hidden",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Img
            src={staticFile("assets/claude_model_select.jpeg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 42%",
            }}
          />
        </div>

        <div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 18,
              fontWeight: 700,
              color: theme.colors.accent,
              marginBottom: 6,
            }}
          >
            ANTHROPIC OFFICIAL GUIDANCE
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 22,
              fontWeight: 700,
              color: theme.colors.text,
              lineHeight: 1.4,
              marginBottom: 8,
            }}
          >
            "বেশিরভাগ কাজে শুরু করো <span style={{ color: "#38BDF8" }}>Opus 5.5</span> দিয়ে, আর অতি কঠিন সমস্যায় <span style={{ color: theme.colors.primary }}>Fable 5.2</span>-এ ওঠো।"
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 18,
              color: theme.colors.textDim,
            }}
          >
            Opus সাধারণ জটিল কাজের জন্য দ্রুত ও সাশ্রয়ী, Fable দীর্ঘস্থায়ী স্বায়ত্তশাসিত প্রজেক্টের জন্য।
          </div>
        </div>
      </div>
    </div>
  );
};
