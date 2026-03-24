import { ConfidenceLevel } from "@/lib/gameState";

interface ConfidenceSelectorProps {
  selected: ConfidenceLevel | null;
  onSelect: (level: ConfidenceLevel) => void;
  disabled?: boolean;
}

const levels: { level: ConfidenceLevel; points: number; label: string }[] = [
  { level: "low", points: 10, label: "Low" },
  { level: "medium", points: 25, label: "Medium" },
  { level: "high", points: 50, label: "High" },
];

export function ConfidenceSelector({ selected, onSelect, disabled }: ConfidenceSelectorProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground text-center">How confident are you?</p>
      <div className="flex gap-3 justify-center">
        {levels.map((l) => (
          <button
            key={l.level}
            onClick={() => onSelect(l.level)}
            disabled={disabled}
            className={`rounded-lg border px-4 py-2.5 transition-colors ${
              selected === l.level
                ? "border-foreground bg-muted text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-muted-foreground/50"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <span className="text-sm font-medium">{l.label}</span>
            <span className="text-xs opacity-70 ml-1">({l.points}pts)</span>
          </button>
        ))}
      </div>
    </div>
  );
}
