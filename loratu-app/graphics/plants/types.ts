/** Colors used to draw a plant at a given stage */
export interface PlantStageColors {
  stem: string;
  leaf: string;
  flower?: string;
  accent?: string;
}

/** Visual definition for one growth stage of a plant */
export interface PlantStageGraphic {
  /** Scale factor relative to pot (0.3 = tiny seed, 1.0 = full bloom) */
  scale: number;
  colors: PlantStageColors;
}

/** Full visual definition for a plant species (4 stages) */
export interface PlantGraphics {
  speciesId: string;
  stages: [PlantStageGraphic, PlantStageGraphic, PlantStageGraphic, PlantStageGraphic];
}
