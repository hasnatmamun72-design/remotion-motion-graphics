// src/Main.tsx — Master Remotion Composition
// Layer stack (bottom to top):
// 1. BackgroundMotif
// 2. SceneShell (Scenes with slow camera push & hard cuts)
// 3. Grade
// 4. Grain
// 5. Vignette
// 6. Subtitles (ALWAYS topmost visual layer)
// 7. SfxTrack (SFX synchronized to content hits)
import React from "react";
import { AbsoluteFill } from "remotion";
import { BackgroundMotif } from "./components/BackgroundMotif";
import { Grade } from "./components/Grade";
import { Grain } from "./components/Grain";
import { SceneShell } from "./components/SceneShell";
import { SfxTrack } from "./components/SfxTrack";
import { Subtitles } from "./components/Subtitles";
import { Vignette } from "./components/Vignette";
import { sceneRegistry } from "./sceneRegistry";
import { theme } from "./theme";

export const Main: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.bg,
        fontFamily: theme.fonts.display,
        color: theme.colors.text,
        overflow: "hidden",
      }}
    >
      {/* Layer 1: Atmospheric Background Motif (never flat) */}
      <BackgroundMotif />

      {/* Layer 2: Scene Execution (Hard cuts between scenes, no transition overlays) */}
      {sceneRegistry.map((s) => (
        <SceneShell
          key={s.id}
          from={s.from}
          durationInFrames={s.durationInFrames}
          name={s.id}
        >
          <s.Component />
        </SceneShell>
      ))}

      {/* Layer 3: Color Grade Overlay */}
      <Grade />

      {/* Layer 4: Procedural SVG Grain */}
      <Grain />

      {/* Layer 5: Radial Vignette */}
      <Vignette />

      {/* Layer 6: Subtitles (Always Topmost Visual Layer) */}
      <Subtitles />

      {/* Layer 7: Audio & Sound Effects */}
      <SfxTrack />
    </AbsoluteFill>
  );
};
