

# Human or AI? — Ethics Lab Simulation

## Overview
A polished, frontend-only educational game about detecting AI-generated writing and exploring ethical consequences. Two-phase gameplay: Detection → Ethical Decisions.

---

## Screens & Flow

### 1. Landing Page
- Bold centered title "Human or AI?" with subtitle "Can you actually tell the difference?"
- Dark, clinical aesthetic with indigo accent
- Two CTAs: **Start Game** / **How It Works**

### 2. Rules Page
- 3-step explanation with icons (Read → Classify → Bet)
- Brief Phase 2 preview
- **Start Phase 1** button

### 3. Phase 1 — Detection Game (5 rounds)
- **Top bar**: Phase label, round counter (e.g., "3/5"), score, 15s countdown timer bar
- **Email card**: Terminal-style reader with context label and email text
- **Classification buttons**: Human / AI / Edited by AI — selection highlights with indigo glow
- **Confidence selector**: Low (10pts) / Med (25pts) / High (50pts)
- **Submit** button

### 4. Result Reveal (after each round)
- Animated reveal showing: correct answer, user's choice, confidence bet, points gained/lost
- Color-coded feedback (green/red)
- Short reflection line
- **Next Email** button

### 5. Phase Transition Screen
- Message about difficulty of detection + consequences teaser
- **Start Ethical Scenarios** button

### 6. Phase 2 — Ethical Scenarios (3 scenarios)
- Scenario title + description + text excerpt
- 3 decision buttons per scenario
- After selection: outcome reveal with ethical reflection text

### 7. Final Results Dashboard
- Stats: detection accuracy, false accusations, missed AI cases, confidence pattern
- Scenario decision summary
- Discussion prompts section for classroom use
- **Reset Simulation** button

---

## Mock Data
- **10 emails** with id, context, text, label (Human/AI/Edited), and explanation
- **5 ethical scenarios** with title, description, excerpt, options, and outcomes

## Key Components
`TopBar`, `TimerBar`, `EmailCard`, `ChoiceButtons`, `ConfidenceSelector`, `ResultReveal`, `ScenarioCard`, `DecisionButtons`, `StatsSummary`, `ReflectionPrompts`

## Design
- Dark palette per design brief (#020617 bg, indigo accent, green/red feedback)
- Inter + JetBrains Mono typography
- Subtle animations: card transitions, timer countdown, reveal effects, score updates
- Large text and buttons for group/classroom viewing
- No Framer Motion (keeping dependencies minimal) — CSS animations only

