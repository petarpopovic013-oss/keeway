export const MOTORCYCLE_CATEGORIES = [
  'Scooters', 'Scooters XDV', 'Street fighter', 'Street Retro', 'Custom V-Twin'
] as const;

export type MotorcycleCategory = typeof MOTORCYCLE_CATEGORIES[number];
