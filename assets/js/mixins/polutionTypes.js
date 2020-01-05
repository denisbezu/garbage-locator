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
    return '/img/watter_pollution.svg';
  }
  if (type === DEFORESTATION) {
    return '/img/deforestation.png';
  }
  if (type === GARBAGE) {
    return '/img/garbage.png';
  }
  if (type === OTHER) {
    return '/img/other_pollution.png';
  }
}