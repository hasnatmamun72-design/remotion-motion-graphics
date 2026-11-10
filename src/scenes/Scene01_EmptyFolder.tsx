// src/scenes/Scene01_EmptyFolder.tsx — Cues 1-3 (0 - 390 frames | 0.0s - 13.0s)
// Hook: Empty folder -> 8 days -> Full Operating System running on laptop
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene01_EmptyFolder: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: Empty folder entrance (f0 - f80)
  const folderSpring = spring({ frame, fps, config: theme.spring.smooth });
  const folderPulse = Math.sin(frame / 18) * 4;

  // Beat 2: "8 Days" counter & timeline (f80 - f180)
  const daysSpring = spring({ frame: frame - 80, fps, config: theme.spring.snappy });
  const daysCounter = Math.min(
    8,
    Math.floor(
      interpolate(frame, [80, 140], [0, 8], {
        easing: theme.ease.out,
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  // Beat 3: Laptop & Operating System boot (f180 - f390)
  const laptopSpring = spring({ frame: frame - 180, fps, config: theme.spring.smooth });
  const bootProgress = interpolate(frame, [210, 290], [0, 100], {
    easing: theme.ease.out,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Feature pills stagger (f270+)
  const pill1 = spring({ frame: frame - 270, fps, config: theme.spring.snappy });
  const pill2 = spring({ frame: frame - 290, fps, config: theme.spring.snappy });
  const pill3 = spring({ frame: frame - 310, fps, config: theme.spring.snappy });

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
      {/* Category Tag */}
      <div
        style={{
          opacity: folderSpring,
          transform: `translateY(${interpolate(folderSpring, [0, 1], [-20, 0])}px)`,
          padding: "8px 24px",
          borderRadius: 30,
          backgroundColor: "rgba(217, 119, 87, 0.12)",
          border: `1px solid ${theme.colors.surfaceBorder}`,
          color: theme.colors.primary,
          fontFamily: theme.fonts.display,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 30,
        }}
      >
        Autonomous AI Milestone
      </div>

      {/* Main Container Card */}
      <div
        style={{
          width: 860,
          backgroundColor: theme.colors.surface,
          borderRadius: 24,
          border: `1px solid ${theme.colors.surfaceBorder}`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.5), 0 0 50px ${theme.colors.glow}`,
          padding: "48px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Phase 1: Empty Folder (f0 - f180) */}
        {frame < 200 && (
          <div
            style={{
              opacity: interpolate(frame, [170, 195], [1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `translateY(${folderPulse}px)`,
            }}
          >
            {/* Folder Icon SVG */}
            <svg width="180" height="150" viewBox="0 0 180 150" fill="none">
              <path
                d="M15 35C15 26.7157 21.7157 20 30 20H68.5858C72.5641 20 76.3793 21.5804 79.1924 24.3934L94.8076 40.0086C97.6207 42.8216 101.436 44.402 105.414 44.402H150C158.284 44.402 165 51.1177 165 59.402V125C165 133.284 158.284 140 150 140H30C21.7157 140 15 133.284 15 125V35Z"
                fill="#2E2B25"
                stroke={theme.colors.primary}
                strokeWidth="3"
                strokeDasharray="8 6"
              />
            </svg>

            <h1
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 54,
                fontWeight: 700,
                color: theme.colors.text,
                margin: "24px 0 10px",
                textAlign: "center",
              }}
            >
              একটি খালি ফোল্ডার
            </h1>
            <p
              style={{
                fontFamily: theme.fonts.bengali,
                fontSize: 32,
                color: theme.colors.textDim,
                margin: 0,
              }}
            >
              ভেতরে কিছুই নেই (0 KB / Empty)
            </p>

            {/* Days Counter Tag */}
            {frame >= 80 && (
              <div
                style={{
                  marginTop: 36,
                  opacity: daysSpring,
                  transform: `scale(${interpolate(daysSpring, [0, 1], [0.85, 1])})`,
                  padding: "12px 32px",
                  borderRadius: 16,
                  backgroundColor: "rgba(217, 119, 87, 0.2)",
                  border: `2px solid ${theme.colors.primary}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 48,
                    fontWeight: 800,
                    color: theme.colors.primary,
                  }}
                >
                  {daysCounter}
                </span>
                <span
                  style={{
                    fontFamily: theme.fonts.bengali,
                    fontSize: 34,
                    fontWeight: 600,
                    color: theme.colors.text,
                  }}
                >
                  দিন পর...
                </span>
              </div>
            )}
          </div>
        )}

        {/* Phase 2: Operating System & Laptop (f180+) */}
        {frame >= 180 && (
          <div
            style={{
              opacity: laptopSpring,
              transform: `scale(${interpolate(laptopSpring, [0, 1], [0.92, 1])})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Laptop Frame */}
            <div
              style={{
                width: 680,
                height: 380,
                backgroundColor: "#12110E",
                borderRadius: 18,
                border: "3px solid #3A362F",
                padding: 20,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Laptop Screen Top Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  paddingBottom: 10,
                  marginBottom: 16,
                }}
              >
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#EF4444" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#10B981" }} />
                </div>
                <div
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 14,
                    color: theme.colors.primary,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  CLAUDE-OS v1.0 [REAL HARDWARE]
                </div>
              </div>

              {/* Boot Progress or Desktop UI */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: theme.fonts.display,
                    fontSize: 32,
                    fontWeight: 700,
                    color: theme.colors.text,
                    marginBottom: 16,
                  }}
                >
                  FULL OPERATING SYSTEM
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    width: "80%",
                    height: 12,
                    backgroundColor: "#222",
                    borderRadius: 6,
                    overflow: "hidden",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: `${bootProgress}%`,
                      height: "100%",
                      backgroundColor: theme.colors.primary,
                      borderRadius: 6,
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 16,
                    color: theme.colors.accentGreen,
                  }}
                >
                  {bootProgress >= 100 ? "✓ Kernel Booted & Ready" : `Booting Core Drivers... ${Math.floor(bootProgress)}%`}
                </div>
              </div>
            </div>

            {/* Laptop Base Stand */}
            <div
              style={{
                width: 740,
                height: 16,
                backgroundColor: "#2E2B25",
                borderRadius: "0 0 16px 16px",
                border: "2px solid #3A362F",
                borderTop: "none",
                marginBottom: 28,
              }}
            />

            {/* Feature Pills (Login Screen, File Storage, Drivers) */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  opacity: pill1,
                  transform: `translateY(${interpolate(pill1, [0, 1], [20, 0])}px)`,
                  padding: "12px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(217, 119, 87, 0.12)",
                  border: `1px solid ${theme.colors.surfaceBorder}`,
                  color: theme.colors.text,
                  fontFamily: theme.fonts.bengali,
                  fontSize: 22,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: theme.colors.accentGreen }}>✓</span> Login Screen
              </div>

              <div
                style={{
                  opacity: pill2,
                  transform: `translateY(${interpolate(pill2, [0, 1], [20, 0])}px)`,
                  padding: "12px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(217, 119, 87, 0.12)",
                  border: `1px solid ${theme.colors.surfaceBorder}`,
                  color: theme.colors.text,
                  fontFamily: theme.fonts.bengali,
                  fontSize: 22,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: theme.colors.accentGreen }}>✓</span> File Storage
              </div>

              <div
                style={{
                  opacity: pill3,
                  transform: `translateY(${interpolate(pill3, [0, 1], [20, 0])}px)`,
                  padding: "12px 24px",
                  borderRadius: 14,
                  backgroundColor: "rgba(217, 119, 87, 0.12)",
                  border: `1px solid ${theme.colors.surfaceBorder}`,
                  color: theme.colors.text,
                  fontFamily: theme.fonts.bengali,
                  fontSize: 22,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: theme.colors.accentGreen }}>✓</span> নিজস্ব Driver
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
