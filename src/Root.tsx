// src/Root.tsx — Remotion Root Configuration
import React from "react";
import { Composition } from "remotion";
import { Main } from "./Main";
import { TOTAL_DURATION_IN_FRAMES } from "./sceneRegistry";

// Import authentic Bengali & English Typography packages
import "@fontsource/hind-siliguri/400.css";
import "@fontsource/hind-siliguri/600.css";
import "@fontsource/hind-siliguri/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Main"
      component={Main}
      durationInFrames={TOTAL_DURATION_IN_FRAMES} // 6630 frames (221.0s)
      fps={30}
      width={1080}
      height={1920} // 9:16 Vertical Shorts/Reels
    />
  );
};
