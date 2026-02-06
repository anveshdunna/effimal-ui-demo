"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type StepItem = {
  step: number;
  description: string;
  status: string;
  content?: React.ReactNode;
};

type StepsProps = {
  steps: StepItem[];
};

export default function Steps({ steps }: StepsProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    steps[activeStep].status = "finish";
    if (activeStep < steps.length - 1) {
      setActiveStep((prev: number) => prev + 1);
    }
  };

  useEffect(() => {
    const current = steps[activeStep];
    if (!current.content) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, steps]);

  return (
    <div className="flex flex-col gap-1.5">
      {steps.map((stepItem, index) => {
        if (index > activeStep) return null;

        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <div key={stepItem.step} className="text-body-md pb-4">
            <div className="flex items-center gap-2">
              {stepItem.status === "wait" && (
                <div className="bg-fill-primary size-4 rounded-full"></div>
              )}
              {stepItem.status === "finish" && (
                <div className="bg-fg-success size-4 rounded-full"></div>
              )}
              {stepItem.status === "progress" && (
                <div className="bg-fg-warning size-4 rounded-full"></div>
              )}

              <div className="">{stepItem.description}</div>
              {isCompleted && <span className="text-green-600">✔</span>}
            </div>

            {isActive && stepItem.content && (
              <div className="mt-2 ml-6 flex flex-col items-start gap-2">
                <div>{stepItem.content}</div>
                {stepItem.content && index < steps.length - 1 && (
                  <Button onClick={handleNext} size="sm">
                    Continue
                  </Button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
