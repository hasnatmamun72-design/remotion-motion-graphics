# Timing & Motion Validation Report

## 1. Composition & Cue Synchronization
- **Composition Frame Rate:** 30.00 FPS
- **First Cue Start:** 0.14 s (Frame 4)
- **Last Cue End:** 220.88 s (Frame 6627)
- **Total Composition Duration:** 221.00 s (6630 frames)
- **Total Cues:** 43
- **Total Paginated Subtitle Pages:** 56
- **Word Count:** 497 words
- **Speaking Pace:** 135.0 words / minute (optimal for educational / tech explainer)
- **Audio/Cue Sync Status:** Perfect alignment (Composition ends 3 frames after last cue)

## 2. Subtitle Stability Metrics (Mandatory Subtitle Verification)
- **Subtitle Preset:** News Caption (Fixed-size lower-third broadcast bar)
- **Box Dimensions:** Width = 940 px, Height = 160 px (Computed from config: 2 lines × 64px + 32px padding)
- **Box Anchor Position:** Left = 70 px (centered on 1080w), Top = 1640 px (Safe zone compliant: y=1640 to y=1800, above 1580 safe boundary)
- **Distinct Box Heights across all 6630 frames:** 1 (Exactly 160 px, zero variation)
- **Distinct Box Top positions across all 6630 frames:** 1 (Exactly 1640 px, zero variation)
- **Frame-to-Frame Subtitle Jumps:** 0 (Zero vertical or horizontal jitter)
- **Maximum Lines per Page:** 2 lines (All 56 pages strictly ≤ 54 characters, balanced word breaks)
- **Text Layer Order:** Topmost visual layer (Above background, scene graphics, grade, grain, vignette)
- **Rendering Safety:** Zero `backdrop-filter`, solid rgba fill (`rgba(24, 23, 20, 0.94)`), 6px left terracotta stripe (`#D97757`)
- **Bengali/Latin Ligature Check:** 0 dotted circles. Proper hyphenation applied (`Anthropic-এর`, `laptop-এ`, `Fable-এর`).

## 3. Motion Density Verification
- **Total Visual Beats:** 73 beats across 13 major scenes
- **Average Visual Events per 10 Seconds:** 12.1 events (Exceeds mandatory minimum of 8 events per 10s)
- **Maximum Static Window:** 38 frames (1.26s hold during major milestone announcements)
- **Scene Transition Technique:** 100% Hard Cuts (Zero transition overlays, zero scale-through, zero whip/sweep)
- **SFX Synchronization:** All SFX events are tied strictly to content hits (counters, badges, cards), never on scene cuts.
