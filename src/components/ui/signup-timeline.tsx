import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Steps;
  label: Steps;
}
const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, steps, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "w-[2px] h-full flex flex-col mr-4 ml-6 md:mr-8 md:ml-12 lg:mr-12 lg:ml-24",
          className
        )}
      >
        {/* timeline dot */}
        <div
          className={cn(
            "w-[20px] h-[20px] rounded-full m-[1px] border-[4px] border-label   hover:cursor-pointer",
            label === steps
              ? "border-[4px] border-bg10 hover:cursor-pointer leading-[24px]"
              : "",
            label !== steps
              ? "border-[4px] border-label/50 hover:cursor-not-allowed"
              : ""
          )}
        />
        {/* timeline */}
        <div
          className={cn(
            "w-full h-[calc(100%-3px)] bg-label hover:cursor-pointer",
            label === steps
              ? "border-[2px] border-bg10 hover:cursor-pointer"
              : "",
            label !== steps
              ? "border-[2px] border-label/50 hover:cursor-not-allowed"
              : ""
          )}
        />
      </div>
    );
  }
);

Timeline.displayName = "Timeline";
export { Timeline };
