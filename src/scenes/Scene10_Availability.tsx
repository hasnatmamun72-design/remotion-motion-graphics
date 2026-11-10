// src/scenes/Scene10_Availability.tsx — Cues 29-31 (4470 - 4890 frames | 149.0s - 163.0s)
// Availability & Cloud Platforms (Available Today on Amazon, Google Cloud, Microsoft Azure + Pro Plan Launch Offer)
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene10_Availability: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const cloud1 = spring({ frame: frame - 40, fps, config: theme.spring.snappy });
  const cloud2 = spring({ frame: frame - 70, fps, config: theme.spring.snappy });
  const cloud3 = spring({ frame: frame - 100, fps, config: theme.spring.snappy });
  const offerSpring = spring({ frame: frame - 180, fps, config: theme.spring.bouncy });

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
      {/* Question Header */}
      <div
        style={{
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [-20, 0])}px)`,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            fontFamily: theme.fonts.bengali,
            fontSize: 28,
            color: theme.colors.textDim,
            marginBottom: 6,
          }}
        >
          এখন প্রশ্ন, আমি কি ব্যবহার করতে পারব?
        </div>
        <h1
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 54,
            fontWeight: 800,
            color: theme.colors.primary,
            margin: 0,
            letterSpacing: "0.04em",
            textShadow: `0 0 35px ${theme.colors.glow}`,
          }}
        >
          AVAILABLE TODAY!
        </h1>
      </div>

      {/* Cloud Platforms Container */}
      <div
        style={{
          display: "flex",
          gap: 18,
          width: 880,
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        {/* Amazon AWS */}
        <div
          style={{
            flex: 1,
            opacity: cloud1,
            transform: `translateY(${interpolate(cloud1, [0, 1], [30, 0])}px)`,
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
          <div style={{ fontSize: 36, marginBottom: 8 }}>☁️</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 20,
              fontWeight: 700,
              color: theme.colors.text,
              textAlign: "center",
            }}
          >
            Amazon AWS
          </div>
          <div
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 14,
              color: theme.colors.textDim,
              marginTop: 4,
            }}
          >
            Bedrock API
          </div>
        </div>

        {/* Google Cloud */}
        <div
          style={{
            flex: 1,
            opacity: cloud2,
            transform: `translateY(${interpolate(cloud2, [0, 1], [30, 0])}px)`,
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
          <div style={{ fontSize: 36, marginBottom: 8 }}>🌐</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 20,
              fontWeight: 700,
              color: theme.colors.text,
              textAlign: "center",
            }}
          >
            Google Cloud
          </div>
          <div
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 14,
              color: theme.colors.textDim,
              marginTop: 4,
            }}
          >
            Vertex AI
          </div>
        </div>

        {/* Microsoft Azure */}
        <div
          style={{
            flex: 1,
            opacity: cloud3,
            transform: `translateY(${interpolate(cloud3, [0, 1], [30, 0])}px)`,
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
          <div style={{ fontSize: 36, marginBottom: 8 }}>⚡</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 20,
              fontWeight: 700,
              color: theme.colors.text,
              textAlign: "center",
            }}
          >
            Microsoft Azure
          </div>
          <div
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: 14,
              color: theme.colors.textDim,
              marginTop: 4,
            }}
          >
            AI Studio
          </div>
        </div>
      </div>

      {/* Launch Offer Card: Pro Plan */}
      <div
        style={{
          opacity: offerSpring,
          transform: `scale(${interpolate(offerSpring, [0, 1], [0.85, 1])})`,
          width: 880,
          backgroundColor: "rgba(217, 119, 87, 0.12)",
          borderRadius: 22,
          border: `2px solid ${theme.colors.primary}`,
          padding: "26px 36px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          boxShadow: `0 16px 50px rgba(0, 0, 0, 0.5), 0 0 35px ${theme.colors.glow}`,
        }}
      >
        <div style={{ fontSize: 44 }}>🎁</div>
        <div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 24,
              fontWeight: 800,
              color: theme.colors.primary,
              marginBottom: 4,
            }}
          >
            PRO PLAN LAUNCH OFFER
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 22,
              fontWeight: 600,
              color: theme.colors.text,
              lineHeight: 1.4,
            }}
          >
            Pro plan সাবস্ক্রাইবারদের সাপ্তাহিক লিমিটের অর্ধেক পর্যন্ত সরাসরি Fable ব্যবহারের সুযোগ!
          </div>
        </div>
      </div>
    </div>
  );
};
