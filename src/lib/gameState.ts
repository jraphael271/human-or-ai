import { EmailLabel } from "@/data/emails";

export type GamePhase = "landing" | "rules" | "phase1" | "result" | "transition" | "phase2" | "scenarioOutcome" | "results";

export type ConfidenceLevel = "low" | "medium" | "high";

export const confidencePoints: Record<ConfidenceLevel, number> = {
  low: 10,
  medium: 25,
  high: 50,
};

export interface Phase1Round {
  emailId: number;
  choice: EmailLabel | null;
  confidence: ConfidenceLevel | null;
  correct: boolean;
  pointsChange: number;
}

export interface Phase2Decision {
  scenarioId: number;
  chosenOptionId: string;
}

export interface GameState {
  phase: GamePhase;
  currentRound: number;
  score: number;
  phase1Rounds: Phase1Round[];
  phase2Decisions: Phase2Decision[];
  selectedEmailIds: number[];
  selectedScenarioIds: number[];
}

export function createInitialState(emailIds: number[], scenarioIds: number[]): GameState {
  return {
    phase: "landing",
    currentRound: 0,
    score: 0,
    phase1Rounds: [],
    phase2Decisions: [],
    selectedEmailIds: emailIds,
    selectedScenarioIds: scenarioIds,
  };
}

export function shuffleAndPick<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
