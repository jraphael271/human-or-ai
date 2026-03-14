interface TimerBarProps {
  progress: number;
  timeLeft: number;
}

export function TimerBar({ progress, timeLeft }: TimerBarProps) {
  const isLow = timeLeft < 5;
  const isCritical = timeLeft < 3;

  return (
    <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-100 ease-linear ${
          isCritical ? "bg-destructive" : isLow ? "bg-warning" : "bg-primary"
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
