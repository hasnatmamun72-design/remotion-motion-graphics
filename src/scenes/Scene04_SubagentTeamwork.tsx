// src/scenes/Scene04_SubagentTeamwork.tsx — Cues 11-13 (1434 - 1995 frames | 47.8s - 66.5s)
// The Secret: Teamwork & 1000+ Autonomous AI Subagents
import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Scene04_SubagentTeamwork: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance springs
  const qSpring = spring({ frame, fps, config: theme.spring.smooth });
  const managerSpring = spring({ frame: frame - 40, fps, config: theme.spring.smooth });
  const networkSpring = spring({ frame: frame - 80, fps, config: theme.spring.snappy });

  // 3 Subagent roles
  const card1 = spring({ frame: frame - 150, fps, config: theme.spring.smooth });
  const card2 = spring({ frame: frame - 175, fps, config: theme.spring.smooth });
  const card3 = spring({ frame: frame - 200, fps, config: theme.spring.smooth });

  // 1000 counter
  const counterVal = Math.min(
    1000,
    Math.floor(
      interpolate(frame, [240, 360], [0, 1000], {
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
      {/* Question / Concept Header */}
      <div
        style={{
          opacity: qSpring,
          transform: `translateY(${interpolate(qSpring, [0, 1], [-20, 0])}px)`,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            fontFamily: theme.fonts.bengali,
            fontSize: 26,
            color: theme.colors.textDim,
            marginBottom: 6,
          }}
        >
          এত বড় কাজ সামলায় কীভাবে?
        </div>
        <h1
          style={{
            fontFamily: theme.fonts.display,
            fontSize: 58,
            fontWeight: 800,
            color: theme.colors.primary,
            margin: 0,
            letterSpacing: "0.04em",
            textShadow: `0 0 40px ${theme.colors.glow}`,
          }}
        >
          THE ANSWER: TEAMWORK
        </h1>
      </div>

      {/* Manager Node (Fable Orchestrator) */}
      <div
        style={{
          opacity: managerSpring,
          transform: `scale(${interpolate(managerSpring, [0, 1], [0.85, 1])})`,
          padding: "16px 36px",
          borderRadius: 20,
          backgroundColor: theme.colors.surface,
          border: `2px solid ${theme.colors.primary}`,
          display: "flex",
          alignItems: "center",
          gap: 16,
          boxShadow: `0 10px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${theme.colors.glow}`,
          marginBottom: 20,
        }}
      >
        <div style={{ fontSize: 28 }}>👑</div>
        <div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 22,
              fontWeight: 800,
              color: theme.colors.text,
            }}
          >
            Fable Manager AI
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 18,
              color: theme.colors.accent,
            }}
          >
            কাজের তদারকি ও সাব-এজেন্ট পরিচালনা
          </div>
        </div>
      </div>

      {/* Downward connecting branch arrows */}
      <div
        style={{
          opacity: networkSpring,
          width: 2,
          height: 30,
          backgroundColor: theme.colors.primary,
          marginBottom: 10,
        }}
      />

      {/* 3 Specialized Subagent Roles */}
      <div
        style={{
          display: "flex",
          gap: 18,
          width: 900,
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        {/* Role 1: Code Writer */}
        <div
          style={{
            flex: 1,
            opacity: card1,
            transform: `translateY(${interpolate(card1, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 18,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>💻</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 20,
              fontWeight: 700,
              color: theme.colors.text,
              marginBottom: 4,
            }}
          >
            Code Writer
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 18,
              color: theme.colors.textDim,
              textAlign: "center",
            }}
          >
            কেউ কোড লেখে
          </div>
        </div>

        {/* Role 2: Tester */}
        <div
          style={{
            flex: 1,
            opacity: card2,
            transform: `translateY(${interpolate(card2, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 18,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>🧪</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 20,
              fontWeight: 700,
              color: theme.colors.text,
              marginBottom: 4,
            }}
          >
            Test Runner
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 18,
              color: theme.colors.textDim,
              textAlign: "center",
            }}
          >
            কেউ টেস্ট করে
          </div>
        </div>

        {/* Role 3: Reviewer */}
        <div
          style={{
            flex: 1,
            opacity: card3,
            transform: `translateY(${interpolate(card3, [0, 1], [30, 0])}px)`,
            backgroundColor: theme.colors.surface,
            borderRadius: 18,
            border: `1px solid ${theme.colors.surfaceBorder}`,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 20,
              fontWeight: 700,
              color: theme.colors.text,
              marginBottom: 4,
            }}
          >
            Code Reviewer
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 18,
              color: theme.colors.textDim,
              textAlign: "center",
            }}
          >
            কেউ রিভিউ করে
          </div>
        </div>
      </div>

      {/* Massive Counter Banner: 1000+ AI Subagents × 8 Days */}
      <div
        style={{
          width: 880,
          backgroundColor: "rgba(217, 119, 87, 0.12)",
          borderRadius: 22,
          border: `2px solid ${theme.colors.primary}`,
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          boxShadow: `0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${theme.colors.glow}`,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 54,
              fontWeight: 800,
              color: theme.colors.primary,
            }}
          >
            {counterVal}+
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 20,
              color: theme.colors.text,
              fontWeight: 600,
            }}
          >
            AI সহকারী (Subagents)
          </div>
        </div>

        <div style={{ width: 2, height: 60, backgroundColor: theme.colors.surfaceBorder }} />

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: theme.fonts.display,
              fontSize: 54,
              fontWeight: 800,
              color: theme.colors.accentWarm,
            }}
          >
            টানা ৮ দিন
          </div>
          <div
            style={{
              fontFamily: theme.fonts.bengali,
              fontSize: 20,
              color: theme.colors.text,
              fontWeight: 600,
            }}
          >
            অবিরাম যৌথ কাজ
          </div>
        </div>
      </div>
    </div>
  );
};
