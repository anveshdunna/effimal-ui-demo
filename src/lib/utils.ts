import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  override: {},
  extend: {
    classGroups: {
      "font-size": [
        "text-title-lg",
        "text-title-md",
        "text-title-sm",
        "text-title-xs",
        "text-body-xl",
        "text-body-xl-tall",
        "text-body-lg",
        "text-body-lg-tall",
        "text-body-md",
        "text-body-md-tall",
        "text-body-sm",
        "text-body-xs",
      ],
      "text-color": [],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
