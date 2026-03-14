import { Trophy } from "lucide-react";

interface TopBarProps {
  phaseLabel: string;
  round: number;
  totalRounds: number;
  score: number;
  scoreAnimating?: boolean;
}

export function TopBar({ phaseLabel, round, totalRounds, score, scoreAnimating }: TopBarProps) {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">{phaseLabel}</span>
        <span className="text-sm text-muted-foreground">
          Round {round}/{totalRounds}
        </span>
      </div>
      <div className={`flex items-center gap-2 ${scoreAnimating ? "animate-score-pop" : ""}`}>
        <Trophy className="w-4 h-4 text-warning" />
        <span className="text-lg font-semibold font-mono-code">{score}</span>
      </div>
    </div>
  );
}
