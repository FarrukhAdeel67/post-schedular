"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  label?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  label = "Go Back",
}) => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <Heading title={title} subtitle={subtitle} />
      <Button label={label} onClick={() => router.push("/")} />
    </div>
  );
};

export default EmptyState;
