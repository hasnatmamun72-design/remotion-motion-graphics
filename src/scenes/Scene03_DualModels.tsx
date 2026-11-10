// src/scenes/Scene03_DualModels.tsx — Cues 6-10 (630 - 1434 frames | 21.0s - 47.8s)
// Two Models, One Brain: Claude Fable 5.2 vs Claude Mythos 5.2
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene03_DualModels: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance animations
  const headerSpring = spring({ frame, fps, config: theme.spring.smooth });
  const fableSpring = spring({ frame: frame - 25, fps, config: theme.spring.smooth });
  const mythosSpring = spring({ frame: frame - 50, fps, config: theme.spring.smooth });
  const metaphorSpring = spring({ frame: frame - 180, fps, config: theme.spring.snappy });
  const detailsSpring = spring({ frame: frame - 380, fps, config: theme.spring.smooth });

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
      {/* Date & Announcement Badge */}
      <div
        style={{
          opacity: headerSpring,
          transform: `translateY(${interpolate(headerSpring, [0, 1], [-20, 0])}px)`,
          padding: "8px 24px",
          borderRadius: 30,
          backgroundColor: "rgba(217, 119, 87, 0.15)",
          border: `1px solid ${theme.colors.primary}`,
          color: theme.colors.primary,
          fontFamily: theme.fonts.display,
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: 20,
        }}
      >
        NOVEMBER 9 • DUAL MODEL RELEASE
      </div>

      <h1
        style={{
          opacity: headerSpring,
          fontFamily: theme.fonts.bengali,
          fontSize: 48,
          fontWeight: 700,
          color: theme.colors.text,
          margin: "0 0 24px 0",
          textAlign: "center",
        }}
      >
        নাম আলাদা, কিন্তু ভেতরের Brain একই
      </h1>

      {/* Metaphor pill: "One car, two keys" */}
      <div
        style={{
          opacity: metaphorSpring,
          transform: `scale(${interpolate(metaphorSpring, [0, 1], [0.85, 1])})`,
          padding: "10px 28px",
          borderRadius: 16,
          backgroundColor: "#2E2B25",
          border: `1px solid ${theme.colors.surfaceBorder}`,
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 30,
        }}
      >
        <span style={{ fontSize: 24 }}>🚗</span>
        <span
          style={{
            fontFamily: theme.fonts.bengali,
            fontSize: 22,
            fontWeight: 600,
            color: theme.colors.accent,
          }}
        >
          একটিই গাড়ি, কিন্তু দুটো আলাদা চাবি!
        </span>
      </div>

      {/* Dual Split Cards Container */}
      <div
        style={{
          display: "flex",
          gap: 24,
          width: 920,
          justifyContent: "center",
        }}
      >
        {/* Left Card: Claude Fable 5.2 */}
        <div
          style={{
            flex: 1,
            opacity: fableSpring,
            transform: `translateY(${interpolate(fableSpring, [0, 1], [40, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 24,
            border: `2px solid ${theme.colors.primary}`,
            boxShadow: `0 16px 50px rgba(0, 0, 0, 0.5), 0 0 40px ${theme.colors.glow}`,
            padding: "36px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Badge */}
          <div
            style={{
              padding: "6px 18px",
              borderRadius: 20,
              backgroundColor: "rgba(52, 211, 153, 0.15)",
              border: "1px solid #34D399",
              color: "#34D399",
              fontFamily: theme.fonts.display,
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            PUBLIC ACCESS
          </div>

          <h2
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 34,
              fontWeight: 800,
              color: theme.colors.primary,
              margin: "0 0 12px 0",
              textAlign: "center",
            }}
          >
            Claude Fable 5.2
          </h2>

          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              backgroundColor: "rgba(217, 119, 87, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              marginBottom: 20,
            }}
          >
            🛡️
          </div>

          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 22,
              fontWeight: 600,
              color: theme.colors.text,
              textAlign: "center",
              lineHeight: 1.4,
              marginBottom: 16,
            }}
          >
            হ্যাকিং ও বায়োলজি কাজে শক্ত সুরক্ষা (Safety Rails)
          </div>

          <div
            style={{
              marginTop: "auto",
              padding: "8px 18px",
              borderRadius: 12,
              backgroundColor: "rgba(52, 211, 153, 0.12)",
              color: "#34D399",
              fontFamily: theme.fonts.bengali,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            ✓ সবাই ব্যবহার করতে পারে
          </div>
        </div>

        {/* Right Card: Claude Mythos 5.2 */}
        <div
          style={{
            flex: 1,
            opacity: mythosSpring,
            transform: `translateY(${interpolate(mythosSpring, [0, 1], [40, 0])}px)`,
            backgroundColor: "#1D1B17",
            borderRadius: 24,
            border: `2px solid #524F47`,
            boxShadow: `0 16px 50px rgba(0, 0, 0, 0.5)`,
            padding: "36px 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Badge */}
          <div
            style={{
              padding: "6px 18px",
              borderRadius: 20,
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid #EF4444",
              color: "#EF4444",
              fontFamily: theme.fonts.display,
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            RESTRICTED ACCESS
          </div>

          <h2
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 34,
              fontWeight: 800,
              color: "#E2E8F0",
              margin: "0 0 12px 0",
              textAlign: "center",
            }}
          >
            Claude Mythos 5.2
          </h2>

          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              backgroundColor: "rgba(239, 68, 68, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              marginBottom: 20,
            }}
          >
            🔒
          </div>

          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 22,
              fontWeight: 600,
              color: theme.colors.textDim,
              textAlign: "center",
              lineHeight: 1.4,
              marginBottom: 16,
            }}
          >
            Cyber Security ও Life Science যাচাইকৃত রিসার্চ
          </div>

          <div
            style={{
              marginTop: "auto",
              padding: "8px 18px",
              borderRadius: 12,
              backgroundColor: "rgba(239, 68, 68, 0.12)",
              color: "#FCA5A5",
              fontFamily: theme.fonts.bengali,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            ⚠️ শুধু যাচাইকৃত প্রতিষ্ঠান
          </div>
        </div>
      </div>
    </div>
  );
};
