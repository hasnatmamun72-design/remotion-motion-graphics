# Adaptive Motion Graphics Generator - Project Context (v2, corrected)
 
How to use this file:
- **Project Instructions:** paste the block in **Part A** at the END of your existing Project Instructions (do not only put it in Context; rules in Instructions are followed more reliably).
- **Context (Project Knowledge):** add **Part B1, B2, B3** as three separate "Add text content" files, using the titles shown. Delete the three old context files first.
- **Optional:** add **Part B4** (your brand data).
What changed from v1: subtitle boilerplate replaced (the old word-by-word one caused shaking), mandatory subtitle-stability / Bengali-text / validation rules added, broken nested code fences fixed, theme key names now match the real project (`text`, `textDim`, `captionBg`), real folder structure, Brand Galaxy Blue and two more directions added.
 
---
 
# PART A - Add to the END of Project Instructions
 
````markdown
## Subtitle stability rules (MANDATORY - these prevent shaking and flicker)
 
1. FIXED BOX: The subtitle box has a fixed width, height and position for the whole video.
   Never size it from its text, and never anchor a variable-height box to the bottom.
   Height = maxLines x lineHeightPx + 2 x paddingY (computed from config, never measured).
2. PAGINATION: Split every cue into pages that fit maxLines (default 2 lines, max about 54
   characters per page, break only at spaces, balanced pages). A page must never wrap to more
   lines than maxLines. Distribute page timing and active-word timing proportionally to characters.
3. WHOLE-PIXEL TEXT: lineHeight in whole px (e.g. 68px at 48px font, about 1.4 for Bengali),
   letterSpacing 0. No scale, spring, slide or fractional-px transform on subtitle text.
   Page changes are hard cuts. Only the bar may fade, and only with opacity.
5. LAYER ORDER (bottom to top): background, scenes, grade, grain, vignette, SUBTITLES.
   Subtitles are always the topmost layer so per-frame grain never touches the text.
4. RENDER-SAFE STYLING: No backdrop-filter, no large blurred box-shadow, no CSS filter on the
   subtitle bar, no mix-blend-mode on text. Use a solid or rgba fill and a border-left stripe.
   Avoid backdrop-filter on ANY element in the video (it flickers in headless Chrome renders).
6. Cues separated by less than 0.3 s share one persistent bar. Only the bar fades at group start/end.
 
## Bengali + Latin text normalization (MANDATORY)
Before building cues, scan every cue for a Bengali dependent vowel sign or virama
(U+09BE-U+09CC, U+09D7, U+09CD) placed directly after a Latin letter or digit
(example: "Facebookের" = k + U+09C7). It has no base glyph and renders as a dotted circle.
Fix in DISPLAY text only: "Facebook-এর" (Latin word + hyphen + independent vowel).
Never edit the user's SRT file. Mention the fix in the delivery note.
 
## Motion validation (still frames are NOT enough)
Stills cannot reveal shaking. Before delivery, measure the subtitle bar's top, height and
opacity at frame-1, frame and frame+1 around EVERY cue start and page change, plus mid-cue
frames. Required: ONE distinct height, ONE distinct top, ZERO frame-to-frame jumps, and no page
taller than maxLines. If a real render is possible, also render a 5-10 s clip containing a group
start, a page change and a scene cut and inspect consecutive frames. Record the result in
TIMING_REPORT.md.
 
## Environment honesty
- If network is disabled (cannot npm install or render), say so in ONE line at the start of the
  delivery, list exactly what was and was not verified (type-check, real render, Bengali font
  shaping), and tell the user they can enable network access so the full verified render can be done.
- Never write "verified" for something checked only with a stand-in module or a fallback font.
- Fallback fonts do not prove Bengali shaping. State that it must be checked in Remotion Studio.
 
## Layout and build rules learned from production
- 9:16 safe zone: keep critical content between y=230 and y=1320; captions sit above y=1580.
- Do not rely on useVideoConfig().durationInFrames inside a <Sequence>. Pass the scene length
  yourself through a small React context (see SceneShell/Beat in the boilerplates).
- Mock UI (phone screens, dashboards) must be original and labelled "ILLUSTRATIVE DEMO".
  Never reuse a third party's screen recordings unless the user confirms the rights.
- Every scene must show a new visual element at least every 90 frames, and no two consecutive
  scenes may use the same layout.
- Scene content must match the subject. Programming visuals only for programming topics.
````
 
 
## 6. Layer stack (Main.tsx)
```tsx
<AbsoluteFill style={{ backgroundColor: theme.colors.bg, fontFamily: theme.fonts.display, color: theme.colors.text }}>
  <BackgroundMotif />                       {/* layer 1: gradient + orbs + stars + orbit rings, never flat */}
  {scenes.map((s) => <SceneShell key={s.id} from={s.from} to={s.to} name={s.id} shift={s.shift}><s.Component /></SceneShell>)}
  <Grade /><Grain /><Vignette />            {/* grade, grain, vignette */}
  <Subtitles />                             {/* ALWAYS topmost visual layer */}
  <PreviewAudio /><MusicBed /><SfxTrack events={allSfx} />
</AbsoluteFill>
```
 
## 7. SFX placement (3 frames before the hit)
```tsx
<Sequence from={Math.max(0, sec(e.t) - 3)} durationInFrames={sec(1)}>
  <Audio src={staticFile(`sfx/${e.name}.wav`)} volume={e.vol ?? 0.3} />
</Sequence>
```
 
## 8. SRT -> cues.ts with Bengali/Latin fix (scripts/srt-to-ts.py, excerpt)
```python
import re
def fix_bengali_latin_suffix(text):
    # Bengali dependent vowel sign glued to a Latin letter renders as a dotted circle.
    return re.sub(r'([A-Za-z0-9])\u09C7', '\\1-\u098F', text)   # "Facebookের" -> "Facebook-এর"
# text = fix_bengali_latin_suffix(' '.join(l.strip() for l in lines[2:]).strip())
```
 
## 9. Subtitle geometry check (run before delivery; Playwright against rendered frames)
```js
// For frames [cueStart-1, cueStart, cueStart+1] of EVERY cue, plus mid-cue frames:
const r = await page.evaluate(() => {
  const el = document.querySelector("[data-caption]");
  if (!el) return null;
  const b = el.getBoundingClientRect();
  return { top: b.top, h: b.height, textH: el.firstElementChild.getBoundingClientRect().height };
});
// PASS only if: exactly 1 distinct h, exactly 1 distinct top, 0 consecutive-frame jumps,
// and textH <= maxLines * lineHeightPx for every page.
```
 
# PART B4 (optional) - Context file: `My_Brand_Preferences.md`
 
````markdown
# My Brand Preferences
- Channel: Amin's World
- Default logo path: public/assets/brand_logo.png (circular logo, show undistorted)
- Presenter image path: public/assets/avatar.png (use only in a few scenes, cover-crop, never stretch)
- Default Bengali font: Hind Siliguri | Default English display font: Space Grotesk
- Default visual direction: Brand Galaxy Blue (#020B24 background, #1D9BFF primary, #00E5FF accent)
- Default subtitles: News Caption (fixed-size solid bar, 2 lines, lower third)
- Default format: 9:16 vertical, 1080x1920, 30 fps
- Social logos available: public/assets/facebook_logo.png, public/assets/youtube_logo.png
````
 
---
 
# How this improves results
1. **Project Instructions** (with Part A at the end) tell Claude WHAT is mandatory: stable subtitles, text normalization, motion validation, honest reporting.
2. **Context files** (Part B1-B3) give Claude the exact HEX codes, folder structure and tested code, so it no longer invents unstable subtitle code.
3. The old word-by-word subtitle example is gone, so Claude cannot copy the pattern that caused shaking.