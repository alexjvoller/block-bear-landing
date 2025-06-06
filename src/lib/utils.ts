import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Rounds a number to two decimal places.
 * @param value - The number to round
 * @returns The number rounded to two decimal places
 * @example
 * roundToTwoDecimals(123.4567) // returns 123.46
 * roundToTwoDecimals(123.4)    // returns 123.4
 */
export function roundToTwoDecimals(value: number): number {
  const firstRound = Math.round(value * 100) / 100;
  return Math.round(firstRound * 100) / 100;
}
