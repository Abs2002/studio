"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  skillName: string;
  proficiency: number; // 0-100
  className?: string;
}

export default function SkillBar({ skillName, proficiency, className }: SkillBarProps) {
  const [currentProficiency, setCurrentProficiency] = useState(0);

  useEffect(() => {
    // Animate the progress bar on mount
    const timer = setTimeout(() => setCurrentProficiency(proficiency), 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-primary">{skillName}</span>
        <span className="text-sm font-medium text-primary">{currentProficiency}%</span>
      </div>
      <Progress value={currentProficiency} aria-label={`${skillName} proficiency ${currentProficiency}%`} className="h-3 bg-accent" />
    </div>
  );
}
