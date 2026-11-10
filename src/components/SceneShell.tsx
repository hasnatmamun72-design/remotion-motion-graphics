// src/components/SceneShell.tsx — Scene Container with Parallax & Slow Push
import React from "react";
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const SceneContext = React.createContext<{
  relativeFrame: number;
  durationInFrames: number;
}>({
  relativeFrame: 0,
  durationInFrames: 0,
});

export const useScene = () => React.useContext(SceneContext);

export const SceneShell: React.FC<{
  from: number;
  durationInFrames: number;
  children: React.ReactNode;
  name?: string;
}> = ({ from, durationInFrames, children }) => {
  return (
    <Sequence from={from} durationInFrames={durationInFrames}>
      <SceneInner durationInFrames={durationInFrames}>{children}</SceneInner>
    </Sequence>
  );
};

const SceneInner: React.FC<{
  durationInFrames: number;
  children: React.ReactNode;
}> = ({ durationInFrames, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow subtle camera push (1.00 -> 1.04) across scene duration
  const camScale = interpolate(frame, [0, durationInFrames], [1.0, 1.04], {
    easing: theme.ease.inOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneContext.Provider value={{ relativeFrame: frame, durationInFrames }}>
      <AbsoluteFill
        style={{
          transform: `scale(${camScale})`,
          transformOrigin: "50% 45%",
          paddingTop: 180, // Safe zone top margin
          paddingBottom: 280, // Safe zone bottom margin (keeps clear of lower-third subtitles)
          paddingLeft: 60,
          paddingRight: 60,
          boxSizing: "border-box",
        }}
      >
        {children}
      </AbsoluteFill>
    </SceneContext.Provider>
  );
};
