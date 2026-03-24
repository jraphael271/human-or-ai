interface EmailCardProps {
  context: string;
  text: string;
}

export function EmailCard({ context, text }: EmailCardProps) {
  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <div className="px-5 py-3 border-b">
        <span className="text-sm text-muted-foreground">{context}</span>
      </div>
      <div className="p-6 max-h-[40vh] overflow-y-auto">
        <pre className="text-sm leading-relaxed whitespace-pre-wrap text-card-foreground">
          {text}
        </pre>
      </div>
    </div>
  );
}
