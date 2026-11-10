// src/components/Subtitles.tsx — Production-Grade Stable Subtitle System
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { cues, CueItem, SubtitlePage } from "../cues";
import { subtitleConfig } from "../subtitleConfig";
import { theme } from "../theme";

export const Subtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  if (!subtitleConfig.enabled) {
    return null;
  }

  // Find active cue
  const activeCue = cues.find(
    (c) => frame >= c.startFrame && frame < c.endFrame
  );

  // Check if adjacent cue is within 0.3s (9 frames at 30fps) for persistent bar
  const nextCue = cues.find(
    (c) => c.startFrame > frame && c.startFrame - frame <= 9
  );
  const prevCue = [...cues]
    .reverse()
    .find((c) => c.endFrame <= frame && frame - c.endFrame <= 9);

  const isBarVisible = Boolean(activeCue || nextCue || prevCue);

  // Bar opacity fade (12 frames entrance/exit)
  let barOpacity = 0;
  if (activeCue) {
    const enter = interpolate(
      frame - activeCue.startFrame,
      [0, 8],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const exit = interpolate(
      activeCue.endFrame - frame,
      [0, 8],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    // If adjacent cue is close, don't fade out
    barOpacity = nextCue ? enter : Math.min(enter, exit);
  } else if (isBarVisible) {
    barOpacity = 0.85;
  }

  // Find active page within active cue
  let activePageText = "";
  if (activeCue) {
    const activePage = activeCue.pages.find(
      (p) => frame >= p.startFrame && frame < p.endFrame
    ) || activeCue.pages[activeCue.pages.length - 1];
    activePageText = activePage?.text || "";
  }

  if (barOpacity <= 0.01) {
    return null;
  }

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        zIndex: 100, // Topmost visual layer
      }}
    >
      {/* FIXED BOX: Exact computed dimensions & position, zero layout shift */}
      <div
        data-caption="true"
        style={{
          position: "absolute",
          left: subtitleConfig.boxLeft,
          top: subtitleConfig.boxTop,
          width: subtitleConfig.boxWidth,
          height: subtitleConfig.boxHeight,
          boxSizing: "border-box",
          backgroundColor: subtitleConfig.colors.bg,
          borderLeft: `${subtitleConfig.stripeWidth}px solid ${subtitleConfig.colors.stripe}`,
          borderRadius: 8,
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
          paddingLeft: subtitleConfig.paddingX,
          paddingRight: subtitleConfig.paddingX,
          paddingTop: subtitleConfig.paddingY,
          paddingBottom: subtitleConfig.paddingY,
          opacity: barOpacity,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontFamily: theme.fonts.bengali,
            fontSize: subtitleConfig.fontSizePx,
            lineHeight: `${subtitleConfig.lineHeightPx}px`,
            fontWeight: 600,
            color: subtitleConfig.colors.text,
            letterSpacing: 0, // Mandatory for Bengali
            width: "100%",
            textAlign: "left",
            wordBreak: "break-word",
          }}
        >
          {activePageText}
        </div>
      </div>
    </AbsoluteFill>
  );
};
