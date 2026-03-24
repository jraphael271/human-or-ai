import { ScenarioOutcome } from "@/data/scenarios";

interface ScenarioOutcomeRevealProps {
  outcome: ScenarioOutcome;
  onNext: () => void;
  isLast: boolean;
}

export function ScenarioOutcomeReveal({ outcome, onNext, isLast }: ScenarioOutcomeRevealProps) {
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h2 className="text-xl font-bold text-center">{outcome.title}</h2>

      <div className="rounded-lg border bg-card p-6 space-y-4">
        <p className="text-sm leading-relaxed">{outcome.description}</p>

        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">Consequence</p>
          <p className="text-sm text-muted-foreground mt-1">{outcome.consequence}</p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">Ethical Reflection</p>
          <p className="text-sm text-muted-foreground mt-1">{outcome.ethicalReflection}</p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        {isLast ? "View Final Results" : "Next Scenario"}
      </button>
    </div>
  );
}
