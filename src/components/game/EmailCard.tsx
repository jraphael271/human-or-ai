import { Mail } from "lucide-react";

interface EmailCardProps {
  context: string;
  text: string;
}

export function EmailCard({ context, text }: EmailCardProps) {
  return (
    <div className="animate-fade-in-scale">
      <div className="rounded-lg border bg-card overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b bg-muted/50">
          <Mail className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">{context}</span>
        </div>
        <div className="p-6 max-h-[40vh] overflow-y-auto">
          <pre className="font-mono-code text-sm leading-relaxed whitespace-pre-wrap text-card-foreground">
            {text}
          </pre>
        </div>
      </div>
    </div>
  );
}
