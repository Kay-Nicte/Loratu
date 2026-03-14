/** Spot positions as percentages of the patio area (0-100) */
export const SPOT_POSITIONS: Array<{ xPercent: number; yPercent: number }> = [
  // Inner ring (4 spots close to fountain)
  { xPercent: 35, yPercent: 30 },
  { xPercent: 62, yPercent: 30 },
  { xPercent: 35, yPercent: 62 },
  { xPercent: 62, yPercent: 62 },
  // Mid ring (4 spots)
  { xPercent: 18, yPercent: 22 },
  { xPercent: 78, yPercent: 22 },
  { xPercent: 18, yPercent: 72 },
  { xPercent: 78, yPercent: 72 },
  // Outer ring (4 spots)
  { xPercent: 10, yPercent: 46 },
  { xPercent: 88, yPercent: 46 },
  { xPercent: 48, yPercent: 12 },
  { xPercent: 48, yPercent: 82 },
];
