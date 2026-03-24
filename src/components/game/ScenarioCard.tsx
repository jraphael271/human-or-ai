import { Scenario } from "@/data/scenarios";

interface ScenarioCardProps {
  scenario: Scenario;
  onChoose: (optionId: string) => void;
}

export function ScenarioCard({ scenario, onChoose }: ScenarioCardProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">{scenario.title}</h2>

      <p className="text-muted-foreground leading-relaxed">{scenario.description}</p>

      <div className="rounded-lg border bg-card p-5">
        <pre className="text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
          {scenario.excerpt}
        </pre>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground font-medium">What would you do?</p>
        <div className="space-y-3">
          {scenario.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onChoose(opt.id)}
              className="w-full text-left rounded-lg border border-border bg-card p-4 hover:border-muted-foreground/50 transition-colors"
            >
              <span className="font-medium">{opt.label}</span>
              <span className="block text-sm text-muted-foreground mt-1">{opt.description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
