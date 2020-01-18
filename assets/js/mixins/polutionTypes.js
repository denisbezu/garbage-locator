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

export function getPollutionImageSrc(type) {
  if (type === WATER) {
    return '/img/water.png';
  }
  if (type === DEFORESTATION) {
    return '/img/wood.png';
  }
  if (type === GARBAGE) {
    return '/img/trash.png';
  }
  if (type === OTHER) {
    return '/img/question.png';
  }
}