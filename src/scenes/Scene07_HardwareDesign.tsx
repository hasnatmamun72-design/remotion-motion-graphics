// src/scenes/Scene07_HardwareDesign.tsx — Cues 20-22 (2955 - 3480 frames | 98.5s - 116.0s)
// Breakthrough 02: Hardware — 1 Paragraph Prompt -> 3 Physical Devices with 0 Electrical Fixes
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene07_HardwareDesign: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const promptSpring = spring({ frame: frame - 25, fps, config: theme.spring.smooth });
  const dev1 = spring({ frame: frame - 90, fps, config: theme.spring.snappy });
  const dev2 = spring({ frame: frame - 130, fps, config: theme.spring.snappy });
  const dev3 = spring({ frame: frame - 170, fps, config: theme.spring.snappy });
  const stampSpring = spring({ frame: frame - 280, fps, config: theme.spring.bouncy });

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
        BREAKTHROUGH 02 • PHYSICAL HARDWARE
      </div>

      <h1
        style={{
          opacity: titleSpring,
          fontFamily: theme.fonts.bengali,
          fontSize: 48,
          fontWeight: 700,
          color: theme.colors.text,
          margin: "0 0 20px 0",
          textAlign: "center",
        }}
      >
        দুই, Hardware Design
      </h1>

      {/* Input Prompt Card */}
      <div
        style={{
          opacity: promptSpring,
          transform: `scale(${interpolate(promptSpring, [0, 1], [0.92, 1])})`,
          padding: "12px 32px",
          borderRadius: 14,
          backgroundColor: "#2E2B25",
          border: `1px solid ${theme.colors.surfaceBorder}`,
          marginBottom: 28,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 22 }}>📝</span>
        <span
          style={{
            fontFamily: theme.fonts.bengali,
            fontSize: 22,
            color: theme.colors.accent,
            fontWeight: 600,
          }}
        >
          মাত্র এক অনুচ্ছেদের নির্দেশনা থেকে ৩টি ডিভাইস:
        </span>
      </div>

      {/* 3 Physical Devices Cards */}
      <div
        style={{
          display: "flex",
          gap: 18,
          width: 900,
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        {/* Device 1 */}
        <div
          style={{
            flex: 1,
            opacity: dev1,
            transform: `translateY(${interpolate(dev1, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 20,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "24px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 12 }}>🎙️</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 18,
              fontWeight: 700,
              color: theme.colors.text,
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Voice Hub
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 16,
              color: theme.colors.textDim,
              textAlign: "center",
            }}
          >
            Assistant Hub
          </div>
        </div>

        {/* Device 2 */}
        <div
          style={{
            flex: 1,
            opacity: dev2,
            transform: `translateY(${interpolate(dev2, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 20,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "24px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔊</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 18,
              fontWeight: 700,
              color: theme.colors.text,
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Speakerphone
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 16,
              color: theme.colors.textDim,
              textAlign: "center",
            }}
          >
            USB কনফারেন্স স্পিকার
          </div>
        </div>

        {/* Device 3 */}
        <div
          style={{
            flex: 1,
            opacity: dev3,
            transform: `translateY(${interpolate(dev3, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 20,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "24px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 12 }}>👾</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 18,
              fontWeight: 700,
              color: theme.colors.text,
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Virtual Pet
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 16,
              color: theme.colors.textDim,
              textAlign: "center",
            }}
          >
            ইন্টারেক্টিভ ডিজিটাল পেট
          </div>
        </div>
      </div>

      {/* Engineering Quality Stamp */}
      <div
        style={{
          opacity: stampSpring,
          transform: `scale(${interpolate(stampSpring, [0, 1], [0.85, 1])})`,
          width: 880,
          backgroundColor: "rgba(52, 211, 153, 0.12)",
          borderRadius: 22,
          border: "2px solid #34D399",
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
        }}
      >
        <span style={{ fontSize: 32 }}>🏆</span>
        <div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 22,
              fontWeight: 800,
              color: "#34D399",
            }}
          >
            CIRCUIT BOARD + CASING + FIRMWARE
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 20,
              fontWeight: 600,
              color: theme.colors.text,
            }}
          >
            তিনটি ডিভাইসই কোনো Electrical মেরামত ছাড়াই ১ম চেষ্টায় চালু হয়েছে!
          </div>
        </div>
      </div>
    </div>
  );
};
