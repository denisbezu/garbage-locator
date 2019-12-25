'use strict';

export const WATER = 'WATER_POLLUTION';
export const DEFORESTATION = 'DEFORESTATION';
export const GARBAGE = 'GARBAGE';
export const OTHER = 'OTHER_POLLUTION';

export function getPollutionName(type) {
  if (type === WATER) {
    return 'Water pollution';
  }
  if (type === DEFORESTATION) {
    return 'Deforestation';
  }
  if (type === GARBAGE) {
    return 'Garbage';
  }
  if (type === OTHER) {
    return 'Other pollution';
  }
}