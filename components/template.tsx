import { cn } from "@/lib/utils";

interface TemplateProps {
  // ! There must be a better way to do this, should I extend the props of an HTMLDiv element?
  children: React.ReactNode;
  className?: string;
}
// ? Maybe change the name to PageTemplate instead of just template
export default function Template({ children, className }: TemplateProps) {
  return (
    <main className={cn("container px-4 pt-16 md:px-8", className)}>
      {children}
    </main>
  );
}
