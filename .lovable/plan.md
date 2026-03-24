

# Make the Game Minimalistic

## Overview
Strip the UI down to essentials: remove icons, decorative elements, colored accents, fancy animations, and reduce visual weight across all screens. Pure black and white, clean typography, no visual noise.

## Changes

### 1. `src/index.css` — Simplify colors and remove animations
- Make `--success`, `--destructive`, `--warning` all grayscale
- Remove `pulse-glow` animation entirely
- Keep only `fade-in` animation (remove scale, slide-up, stagger classes)
- Remove `font-mono-code` utility (use regular font everywhere)

### 2. `src/pages/Game.tsx` — Strip landing, rules, transition screens
- **Landing**: Remove Bot icon badge, remove "Ethics Lab Simulation" chip, simplify to just title + one subtitle + one button. Remove second CTA.
- **Rules**: Remove icons from steps, simplify to plain numbered text list. Remove warning-colored Phase 2 box, make it plain text. Remove stagger animations.
- **Transition**: Remove Scale icon box, simplify to plain text + button.
- **Phase 2 header**: Remove uppercase tracking-widest styling, use plain text.
- Remove all animation classes (`animate-fade-in`, `animate-slide-up`, `animate-pulse-glow`, `stagger-*`).

### 3. `src/components/game/TopBar.tsx` — Remove Trophy icon
- Plain text: "Round 1/5" on left, score number on right. No icon.

### 4. `src/components/game/EmailCard.tsx` — Simplify
- Remove Mail icon. Just show context as plain text label. Remove `animate-fade-in-scale`.

### 5. `src/components/game/ChoiceButtons.tsx` — Remove icons
- Remove User/Bot/PenLine icons. Plain text buttons with simple border highlight on selection. Remove shadow/ring effects.

### 6. `src/components/game/ConfidenceSelector.tsx` — Remove shield icons
- Plain text buttons: "Low (10pts)", "Med (25pts)", "High (50pts)". Simple border highlight.

### 7. `src/components/game/ResultReveal.tsx` — Remove icons, simplify
- Remove CheckCircle2/XCircle icons. Use plain text "Correct" / "Incorrect". Remove colored text for success/destructive, use plain foreground. Remove `animate-fade-in-scale`.

### 8. `src/components/game/ScenarioCard.tsx` — Remove FileText icon
- Remove icon from excerpt box. Plain bordered box. Remove `animate-fade-in`.

### 9. `src/components/game/ScenarioOutcomeReveal.tsx` — Remove AlertTriangle icon
- Remove icon. Plain text heading. Simplify colored boxes to plain bordered sections.

### 10. `src/components/game/StatsSummary.tsx` — Remove all icons
- Remove all lucide icons from stat cards and sections. Plain text labels. Remove animation delays on reflection prompts. Remove `font-mono-code`.

