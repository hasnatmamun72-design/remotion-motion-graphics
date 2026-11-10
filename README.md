# Claude Fable 5.2 — Adaptive Remotion Motion Graphics Project

একটি প্রফেশনাল, থিম্যাটিক ও অ্যাডাপ্টিভ মোশন গ্রাফিক্স ভিডিও প্রজেক্ট যা Anthropic-এর নতুন ফ্ল্যাগশিপ AI মডেল **Claude Fable 5.2** এবং **Claude Mythos 5.2**-এর লঞ্চ, মাল্টি-এজেন্ট টিমওয়ার্ক আর্কিটেকচার এবং যুগান্তকারী বেঞ্চমার্ক নিয়ে তৈরি।

---

## 📋 প্রজেক্ট স্পেসিফিকেশন (Project Specifications)

- **Composition ID:** `Main`
- **Resolution:** 1080 × 1920 (9:16 Vertical — Shorts / Reels / Mobile Fullscreen)
- **Frame Rate:** 30.00 FPS
- **Total Duration:** 221.00 সেকেন্ড (6,630 frames)
- **Voiceover Cues:** 43টি কিউ (00:00:00,140 থেকে 00:03:40,880)
- **Node.js Version:** v20+ / v22+
- **Visual Direction:** `Claude Warm Keynote`
  - Base: `#181714` (Deep Warm Graphite)
  - Surface: `#24221E` (Warm Charcoal Glass)
  - Primary Hero: `#D97757` (Anthropic Claude Terracotta / Coral)
  - Accent: `#E28D73` (Light Coral) & `#34D399` (Metric Green)
  - Typography: Space Grotesk (Display / Data) + Hind Siliguri (Bengali Content & Captions)
- **Subtitle Preset:** `News Caption`
  - Fixed-size lower-third broadcast bar (940px × 160px)
  - Zero layout shift, zero jitter, whole-pixel rendering (64px line height)
  - Dynamic pagination: প্রতিটি কিউ সর্বোচ্চ ২ লাইনে বিভক্ত (≤ 54 characters per page)

---

## 🚀 কমান্ডসমূহ (Execution Commands)

### ১. ডিপেন্ডেন্সি ইনস্টল (Install Dependencies)
```bash
npm install
```

### ২. রিমোশন স্টুডিও লাইভ প্রিভিউ (Launch Remotion Studio)
```bash
npx remotion studio
```
> স্টুডিও ওপেন হলে ব্রাউজারে সম্পূর্ণ ভিডিওর প্রতিটি ফ্রেম, সাবটাইটেল এবং অডিও স্ক্র্যাবার লাইভ দেখতে পাবেন।

### ৩. ফুল MP4 রেন্ডার (Render Video)
```bash
npx remotion render src/index.ts Main out/video.mp4
```

---

## 📁 প্রজেক্ট আর্কিটেকচার (Project Structure)

```text
remotion-motion-graphics/
├── package.json
├── tsconfig.json
├── remotion.config.ts
├── README.md
├── BEAT_SHEET.md            # ৭৩টি সুনির্দিষ্ট বিট ও মোশন ডেনসিটি প্ল্যান
├── TIMING_REPORT.md         # সাবটাইটেল স্ট্যাবিলিটি ও টাইমিং ভ্যালিডেশন
├── ASSET_MANIFEST.md        # ব্যবহৃত সকল ইমেজ, এসএফএক্স ও ফন্টের ট্র্যাক রেকর্ড
├── public/
│   ├── assets/
│   │   ├── claude_app_home.jpeg      # ইউজারের আপলোড করা Claude হোম স্ক্রিন
│   │   └── claude_model_select.jpeg  # ইউজারের আপলোড করা মডেল সিলেক্টর স্ক্রিন
│   └── sfx/                          # সিন্থেসাইজড ১৬-বিট পিবিএম অডিও
│       ├── pop.wav
│       ├── click.wav
│       ├── tick.wav
│       ├── ding.wav
│       └── alert.wav
└── src/
    ├── index.ts             # Remotion registerRoot
    ├── Root.tsx             # Composition definition & bundled webfonts
    ├── Main.tsx             # 5-Layer Stack architecture
    ├── theme.ts             # সিঙ্গেল সোর্স অফ ট্রুথ (কালার, স্প্রিং, ইজিং)
    ├── visualDirection.ts   # থিম ও মেটাডাটা কনফিগারেশন
    ├── subtitleConfig.ts    # ফিক্সড-বক্স নিউজ সাবটাইটেল কনফিগ
    ├── cues.ts              # ৪৩টি নরমালাইজড ও প্যাজিনেটেড বাংলা সাবটাইটেল
    ├── sceneRegistry.ts     # ১৩টি স্বতন্ত্র সিনের রেজিস্ট্রেশন ও ফ্রেম ম্যাপিং
    ├── components/
    │   ├── BackgroundMotif.tsx
    │   ├── ClaudeAsterisk.tsx
    │   ├── Grade.tsx
    │   ├── Grain.tsx
    │   ├── Vignette.tsx
    │   ├── SceneShell.tsx
    │   ├── Subtitles.tsx
    │   └── SfxTrack.tsx
    └── scenes/
        ├── Scene01_EmptyFolder.tsx        # খালি ফোল্ডার থেকে সম্পূর্ণ OS
        ├── Scene02_ClaudeFableReveal.tsx  # Anthropic Claude Fable 5.2 উন্মোচন
        ├── Scene03_DualModels.tsx         # Fable 5.2 বনাম Mythos 5.2 তুলনা
        ├── Scene04_SubagentTeamwork.tsx   # ১,০০০+ সাব-এজেন্টের যৌথ টিমওয়ার্ক
        ├── Scene05_FermatTheorem.tsx      # ফার্মার থিওরেম: ১১ দিন বনাম ৩০ ঘণ্টা
        ├── Scene06_CodingRust.tsx         # পাইথন থেকে রাস্ট ২৬ গুণ দ্রুত
        ├── Scene07_HardwareDesign.tsx     # ১ অনুচ্ছেদ থেকে ৩টি ফিজিক্যাল ডিভাইস
        ├── Scene08_Robotics.tsx           # রোবোটিক আর্ম ৬৪.৯% স্কোর (২ গুণ বেশি)
        ├── Scene09_ScienceCyber.tsx       # ব্ল্যাক হোল, জিন থেরাপি ও সাইবার ডিফেন্স
        ├── Scene10_Availability.tsx       # ক্লাউড প্ল্যাটফর্ম ও প্রো প্ল্যান অফার
        ├── Scene11_PricingModelTier.tsx   # টোকেন প্রাইসিং ও Opus vs Fable সিলেক্টর
        ├── Scene12_CaveatsGuardrails.tsx  # সীমাবদ্ধতা, Gemini 4 তুলনা ও গার্ডরেল
        └── Scene13_SummaryCTA.tsx         # নতুন AI যুগ, কমেন্ট ও সাবস্ক্রাইব CTA
```

---

## 🎨 থিম ও সাবটাইটেল কাস্টমাইজেশন

1. **Visual Direction পরিবর্তন:** `src/theme.ts` এবং `src/visualDirection.ts`-এ কালার প্যালেট পরিবর্তন করুন।
2. **সাবটাইটেল স্টাইল পরিবর্তন:** `src/subtitleConfig.ts`-এ `preset` পরিবর্তন করে `minimal`, `news`, `karaoke`, বা `social`-এ রূপান্তর করতে পারেন।
3. **ভয়েসওভার অডিও যোগ করা:** আপনার নিজস্ব রেকর্ড করা অডিও `public/voiceover.mp3` নামে রাখলে তা স্বয়ংক্রিয়ভাবে ভিডিওর সাথে সিঙ্ক হয়ে বাজবে।
