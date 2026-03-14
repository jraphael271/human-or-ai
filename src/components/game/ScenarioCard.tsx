import { Scenario, ScenarioOption } from "@/data/scenarios";
import { FileText } from "lucide-react";

interface ScenarioCardProps {
  scenario: Scenario;
  onChoose: (optionId: string) => void;
}

export function ScenarioCard({ scenario, onChoose }: ScenarioCardProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-primary font-medium">Ethical Scenario</span>
        <h2 className="text-2xl font-bold">{scenario.title}</h2>
      </div>

      <p className="text-muted-foreground leading-relaxed">{scenario.description}</p>

      <div className="rounded-lg border bg-muted/30 p-5">
        <div className="flex items-start gap-3">
          <FileText className="w-4 h-4 text-primary mt-1 shrink-0" />
          <pre className="font-mono-code text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
            {scenario.excerpt}
          </pre>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground text-center font-medium">What would you do?</p>
        <div className="space-y-3">
          {scenario.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onChoose(opt.id)}
              className="w-full text-left rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
            >
              <span className="font-medium group-hover:text-primary transition-colors">{opt.label}</span>
              <span className="block text-sm text-muted-foreground mt-1">{opt.description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
