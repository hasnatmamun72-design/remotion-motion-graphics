// src/components/SfxTrack.tsx — Precise SFX Placement on Content Events
import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

export interface SfxEvent {
  frame: number;
  name: "pop" | "click" | "tick" | "ding" | "alert";
  vol?: number;
}

export const sfxEvents: SfxEvent[] = [
  // Scene 1: Empty folder -> OS (0 - 390)
  { frame: 10, name: "pop", vol: 0.3 },
  { frame: 50, name: "click", vol: 0.25 },
  { frame: 100, name: "tick", vol: 0.2 },
  { frame: 170, name: "ding", vol: 0.35 },
  { frame: 280, name: "click", vol: 0.25 },
  { frame: 340, name: "pop", vol: 0.3 },

  // Scene 2: Claude Fable 5.2 Reveal (390 - 630)
  { frame: 420, name: "pop", vol: 0.3 },
  { frame: 500, name: "ding", vol: 0.4 },
  { frame: 560, name: "click", vol: 0.25 },

  // Scene 3: Dual Models (630 - 1434)
  { frame: 660, name: "pop", vol: 0.3 },
  { frame: 760, name: "click", vol: 0.25 },
  { frame: 870, name: "ding", vol: 0.3 },
  { frame: 1060, name: "alert", vol: 0.3 },
  { frame: 1260, name: "click", vol: 0.25 },

  // Scene 4: Teamwork & 1000 Subagents (1434 - 1995)
  { frame: 1460, name: "ding", vol: 0.4 },
  { frame: 1560, name: "pop", vol: 0.3 },
  { frame: 1680, name: "click", vol: 0.25 },
  { frame: 1800, name: "tick", vol: 0.2 },
  { frame: 1910, name: "ding", vol: 0.35 },

  // Scene 5: Fermat's Last Theorem (1995 - 2535)
  { frame: 2020, name: "pop", vol: 0.3 },
  { frame: 2150, name: "click", vol: 0.25 },
  { frame: 2300, name: "tick", vol: 0.2 },
  { frame: 2450, name: "ding", vol: 0.4 },

  // Scene 6: Coding Rust 26x (2535 - 2955)
  { frame: 2560, name: "pop", vol: 0.3 },
  { frame: 2680, name: "tick", vol: 0.2 },
  { frame: 2800, name: "ding", vol: 0.4 },

  // Scene 7: Hardware 3 Devices (2955 - 3480)
  { frame: 2980, name: "pop", vol: 0.3 },
  { frame: 3100, name: "click", vol: 0.25 },
  { frame: 3220, name: "pop", vol: 0.3 },
  { frame: 3380, name: "ding", vol: 0.35 },

  // Scene 8: Robotics 64.9% (3480 - 3870)
  { frame: 3510, name: "click", vol: 0.25 },
  { frame: 3660, name: "tick", vol: 0.2 },
  { frame: 3780, name: "ding", vol: 0.4 },

  // Scene 9: Science & Cyber (3870 - 4470)
  { frame: 3900, name: "pop", vol: 0.3 },
  { frame: 4050, name: "ding", vol: 0.35 },
  { frame: 4220, name: "click", vol: 0.25 },
  { frame: 4380, name: "alert", vol: 0.3 },

  // Scene 10: Availability (4470 - 4890)
  { frame: 4500, name: "pop", vol: 0.3 },
  { frame: 4620, name: "ding", vol: 0.35 },
  { frame: 4760, name: "click", vol: 0.25 },

  // Scene 11: Pricing & Model Selector (4890 - 5445)
  { frame: 4920, name: "pop", vol: 0.3 },
  { frame: 5040, name: "tick", vol: 0.2 },
  { frame: 5180, name: "click", vol: 0.25 },
  { frame: 5320, name: "ding", vol: 0.35 },

  // Scene 12: Caveats & Guardrails (5445 - 6120)
  { frame: 5480, name: "alert", vol: 0.3 },
  { frame: 5640, name: "click", vol: 0.25 },
  { frame: 5850, name: "alert", vol: 0.35 },
  { frame: 6020, name: "pop", vol: 0.3 },

  // Scene 13: Summary & CTA (6120 - 6630)
  { frame: 6150, name: "ding", vol: 0.35 },
  { frame: 6300, name: "pop", vol: 0.3 },
  { frame: 6480, name: "click", vol: 0.3 },
  { frame: 6570, name: "ding", vol: 0.4 },
];

export const SfxTrack: React.FC = () => {
  return (
    <>
      {sfxEvents.map((e, i) => {
        // Play SFX starting 2-3 frames early for crisp sync
        const start = Math.max(0, e.frame - 2);
        return (
          <Sequence key={i} from={start} durationInFrames={30}>
            <Audio src={staticFile(`sfx/${e.name}.wav`)} volume={e.vol ?? 0.3} />
          </Sequence>
        );
      })}
    </>
  );
};
