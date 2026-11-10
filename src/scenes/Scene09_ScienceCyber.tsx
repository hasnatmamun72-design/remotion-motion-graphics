// src/scenes/Scene09_ScienceCyber.tsx — Cues 25-28 (3870 - 4470 frames | 129.0s - 149.0s)
// Breakthrough 04: Science & Cybersecurity (Black Holes, Gene Therapy 28/34, Cyber Mythos 90% of 1829 bugs)
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene09_ScienceCyber: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Springs
  const titleSpring = spring({ frame, fps, config: theme.spring.smooth });
  const scienceCardSpring = spring({ frame: frame - 20, fps, config: theme.spring.smooth });
  const cyberCardSpring = spring({ frame: frame - 220, fps, config: theme.spring.smooth });

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
        BREAKTHROUGH 04 • SCIENCE &amp; CYBERSECURITY
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
        চার, বিজ্ঞান ও সাইবার সিকিউরিটি
      </h1>

      {/* Grid of Two Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 22,
          width: 880,
        }}
      >
        {/* Science Breakthroughs (Black Holes + Gene Therapy Capsid) */}
        <div
          style={{
            opacity: scienceCardSpring,
            transform: `translateY(${interpolate(scienceCardSpring, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 22,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "26px 32px",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 18,
              fontWeight: 700,
              color: theme.colors.primary,
              letterSpacing: "0.08em",
              marginBottom: 14,
            }}
          >
            FRONTIER SCIENTIFIC RESEARCH
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            {/* Physics Black Hole */}
            <div
              style={{
                flex: 1,
                padding: "16px 20px",
                borderRadius: 16,
                backgroundColor: "#1D1B17",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>🌌</div>
              <div
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: 20,
                  fontWeight: 700,
                  color: theme.colors.text,
                  marginBottom: 4,
                }}
              >
                Black Hole Physics
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.bengali,
                  fontSize: 18,
                  color: theme.colors.textDim,
                }}
              >
                পদার্থবিজ্ঞানের ২টি অমীমাংসিত সমস্যার সমাধান
              </div>
            </div>

            {/* Gene Therapy Capsid */}
            <div
              style={{
                flex: 1,
                padding: "16px 20px",
                borderRadius: 16,
                backgroundColor: "#1D1B17",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>🧬</div>
              <div
                style={{
                  fontFamily: theme.fonts.display,
                  fontSize: 20,
                  fontWeight: 700,
                  color: theme.colors.text,
                  marginBottom: 4,
                }}
              >
                Gene Therapy Protein
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.bengali,
                  fontSize: 18,
                  color: theme.colors.textDim,
                }}
              >
                ভাইরাসের প্রোটিন খোলস: <strong style={{ color: "#34D399" }}>৩৪টির মধ্যে ২৮টিতে সফল</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Cyber Security Breakthrough (Mythos 90% of 1829 bugs) */}
        <div
          style={{
            opacity: cyberCardSpring,
            transform: `translateY(${interpolate(cyberCardSpring, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 22,
            border: `2px solid ${theme.colors.primary}`,
            padding: "26px 32px",
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
                fontSize: 18,
                fontWeight: 700,
                color: theme.colors.accent,
                marginBottom: 6,
              }}
            >
              CLAUDE MYTHOS • CYBER DEFENSE
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 22,
                fontWeight: 700,
                color: theme.colors.text,
                marginBottom: 4,
              }}
            >
              ১,৮২৯টি পরিচিত নিরাপত্তা ত্রুটি (Known Vulnerabilities)
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 20,
                color: theme.colors.textDim,
              }}
            >
              নিজে থেকেই খুঁজে বের করে নিরাপত্তা বিশ্লেষণ সম্পন্ন করেছে
            </div>
          </div>

          {/* 90% Found Badge */}
          <div
            style={{
              padding: "16px 28px",
              borderRadius: 18,
              backgroundColor: "rgba(52, 211, 153, 0.15)",
              border: "2px solid #34D399",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontFamily: theme.fonts.display,
                fontSize: 44,
                fontWeight: 800,
                color: "#34D399",
                lineHeight: 1,
              }}
            >
              ~90%
            </div>
            <div
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 16,
                fontWeight: 700,
                color: theme.colors.text,
                marginTop: 4,
              }}
            >
              সফলভাবে শনাক্ত
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
