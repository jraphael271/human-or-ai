interface TopBarProps {
  phaseLabel: string;
  round: number;
  totalRounds: number;
  score: number;
}

export function TopBar({ phaseLabel, round, totalRounds, score }: TopBarProps) {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      <span className="text-sm text-muted-foreground">
        {phaseLabel} · Round {round}/{totalRounds}
      </span>
      <span className="text-sm text-muted-foreground">{score} pts</span>
    </div>
  );
}
