// src/scenes/Scene12_CaveatsGuardrails.tsx — Cues 35-39 (5445 - 6120 frames | 181.5s - 204.0s)
// Caveats, Gemini 4 Carbon Comparison, & Strict Safety Guardrails (Handoff to Opus)
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene12_CaveatsGuardrails: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const geminiSpring = spring({ frame: frame - 25, fps, config: theme.spring.smooth });
  const guardrailSpring = spring({ frame: frame - 220, fps, config: theme.spring.smooth });

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
          backgroundColor: "rgba(245, 158, 11, 0.15)",
          border: "1px solid #F59E0B",
          color: "#F59E0B",
          fontFamily: theme.fonts.display,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: 16,
        }}
      >
        TRANSPARENCY &amp; SAFETY GUARDRAILS
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
        একটি কথা মাথায় রেখো: কিছু সীমাবদ্ধতা
      </h1>

      {/* Grid of Two Sections */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 22,
          width: 880,
        }}
      >
        {/* Section 1: Gemini 4 Carbon Comparison */}
        <div
          style={{
            opacity: geminiSpring,
            transform: `translateY(${interpolate(geminiSpring, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 22,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "26px 34px",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 18,
                fontWeight: 700,
                color: theme.colors.textDim,
              }}
            >
              BUSINESS WORKFLOW BENCHMARK
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 16,
                color: theme.colors.accentWarm,
              }}
            >
              সব ক্ষেত্রে Fable সেরা নয়
            </div>
          </div>

          {/* Bar 1: Gemini 4 Carbon (53.9) */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 18, fontWeight: 700, color: "#38BDF8" }}>
                Gemini 4 Carbon (Google)
              </span>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 20, fontWeight: 800, color: "#38BDF8" }}>
                53.9%
              </span>
            </div>
            <div style={{ width: "100%", height: 16, backgroundColor: "#2E2B25", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ width: "53.9%", height: "100%", backgroundColor: "#38BDF8", borderRadius: 8 }} />
            </div>
          </div>

          {/* Bar 2: Claude Fable 5.2 (51.4) */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 18, fontWeight: 700, color: theme.colors.primary }}>
                Claude Fable 5.2 (Anthropic)
              </span>
              <span style={{ fontFamily: theme.fonts.display, fontSize: 20, fontWeight: 800, color: theme.colors.primary }}>
                51.4%
              </span>
            </div>
            <div style={{ width: "100%", height: 16, backgroundColor: "#2E2B25", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ width: "51.4%", height: "100%", backgroundColor: theme.colors.primary, borderRadius: 8 }} />
            </div>
          </div>
        </div>

        {/* Section 2: Safety Refusal & Automatic Handoff to Legacy Opus */}
        <div
          style={{
            opacity: guardrailSpring,
            transform: `translateY(${interpolate(guardrailSpring, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 22,
            border: `2px solid rgba(239, 68, 68, 0.4)`,
            padding: "26px 34px",
            display: "flex",
            alignItems: "center",
            gap: 24,
            boxShadow: `0 16px 50px rgba(0, 0, 0, 0.5)`,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: "50%",
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              flexShrink: 0,
            }}
          >
            🛡️
          </div>

          <div>
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 18,
                fontWeight: 700,
                color: "#EF4444",
                marginBottom: 4,
              }}
            >
              RISK GUARDRAILS &amp; SAFETY HANDOFF
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 22,
                fontWeight: 700,
                color: theme.colors.text,
                lineHeight: 1.4,
                marginBottom: 6,
              }}
            >
              হ্যাকিং বা ল্যাব বায়োলজি ঝুঁকিপূর্ণ প্রশ্নে Fable উত্তর দেবে না।
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 18,
                color: theme.colors.textDim,
              }}
            >
              প্রশ্নটি সরাসরি রিডাইরেক্ট হয়ে পুরোনো একটি নিরাপদ Opus মডেলের কাছে চলে যায়।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
