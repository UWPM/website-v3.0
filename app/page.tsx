import { Loader } from "lucide-react";
/**
 * @returns A loader animation before redirecting to /home
 */
export default function Home() {
  return (
    <div className="absolute left-0 top-0 z-[100] grid min-h-dvh w-full place-items-center bg-background">
      <Loader className="animate-spin" />
    </div>
  );
}
