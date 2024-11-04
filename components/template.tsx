import { cn } from "@/lib/utils";

export default function Template({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("container px-4 pt-16 md:px-8", className)}>
      {children}
    </main>
  );
}
