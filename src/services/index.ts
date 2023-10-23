export const getRndInteger = (max: number, min = 0): number =>
  Math.round(Math.random() * (max - min) + min);
