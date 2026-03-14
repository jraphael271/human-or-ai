import { ConfidenceLevel } from "@/lib/gameState";
import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";

interface ConfidenceSelectorProps {
  selected: ConfidenceLevel | null;
  onSelect: (level: ConfidenceLevel) => void;
  disabled?: boolean;
}

const levels: { level: ConfidenceLevel; points: number; icon: React.ReactNode; label: string }[] = [
  { level: "low", points: 10, icon: <Shield className="w-4 h-4" />, label: "Low Risk" },
  { level: "medium", points: 25, icon: <ShieldAlert className="w-4 h-4" />, label: "Medium Risk" },
  { level: "high", points: 50, icon: <ShieldCheck className="w-4 h-4" />, label: "High Risk" },
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
            className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 transition-all duration-200 ${
              selected === l.level
                ? "border-primary bg-primary/10 text-primary ring-1 ring-primary/30"
                : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {l.icon}
            <div className="text-left">
              <span className="text-sm font-medium block">{l.label}</span>
              <span className="text-xs opacity-70">{l.points} pts</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
