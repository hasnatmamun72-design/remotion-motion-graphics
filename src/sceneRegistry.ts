// src/sceneRegistry.ts — Scene Registry & Timeline Configuration
import React from "react";
import { Scene01_EmptyFolder } from "./scenes/Scene01_EmptyFolder";
import { Scene02_ClaudeFableReveal } from "./scenes/Scene02_ClaudeFableReveal";
import { Scene03_DualModels } from "./scenes/Scene03_DualModels";
import { Scene04_SubagentTeamwork } from "./scenes/Scene04_SubagentTeamwork";
import { Scene05_FermatTheorem } from "./scenes/Scene05_FermatTheorem";
import { Scene06_CodingRust } from "./scenes/Scene06_CodingRust";
import { Scene07_HardwareDesign } from "./scenes/Scene07_HardwareDesign";
import { Scene08_Robotics } from "./scenes/Scene08_Robotics";
import { Scene09_ScienceCyber } from "./scenes/Scene09_ScienceCyber";
import { Scene10_Availability } from "./scenes/Scene10_Availability";
import { Scene11_PricingModelTier } from "./scenes/Scene11_PricingModelTier";
import { Scene12_CaveatsGuardrails } from "./scenes/Scene12_CaveatsGuardrails";
import { Scene13_SummaryCTA } from "./scenes/Scene13_SummaryCTA";

export interface SceneMeta {
  id: string;
  from: number;
  durationInFrames: number;
  Component: React.FC;
}

export const sceneRegistry: SceneMeta[] = [
  { id: "scene_01", from: 0, durationInFrames: 390, Component: Scene01_EmptyFolder },
  { id: "scene_02", from: 390, durationInFrames: 240, Component: Scene02_ClaudeFableReveal },
  { id: "scene_03", from: 630, durationInFrames: 804, Component: Scene03_DualModels },
  { id: "scene_04", from: 1434, durationInFrames: 561, Component: Scene04_SubagentTeamwork },
  { id: "scene_05", from: 1995, durationInFrames: 540, Component: Scene05_FermatTheorem },
  { id: "scene_06", from: 2535, durationInFrames: 420, Component: Scene06_CodingRust },
  { id: "scene_07", from: 2955, durationInFrames: 525, Component: Scene07_HardwareDesign },
  { id: "scene_08", from: 3480, durationInFrames: 390, Component: Scene08_Robotics },
  { id: "scene_09", from: 3870, durationInFrames: 600, Component: Scene09_ScienceCyber },
  { id: "scene_10", from: 4470, durationInFrames: 420, Component: Scene10_Availability },
  { id: "scene_11", from: 4890, durationInFrames: 555, Component: Scene11_PricingModelTier },
  { id: "scene_12", from: 5445, durationInFrames: 675, Component: Scene12_CaveatsGuardrails },
  { id: "scene_13", from: 6120, durationInFrames: 510, Component: Scene13_SummaryCTA },
];

export const TOTAL_DURATION_IN_FRAMES = 6630;
