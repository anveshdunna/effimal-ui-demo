import { ModeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center bg-background justify-items-center p-8 pb-20 gap-16 sm:p-20">
      Testing homepage
      <Button>New button</Button>
      <ModeToggle />
    </div>
  );
}
