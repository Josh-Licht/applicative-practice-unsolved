export function minBy(array, cb) {
  let minValue;
  let minElement;
  for (let i = 0; i < array.length; i++) {
    const value = cb(array[i]);
    if (minValue === undefined || value < minValue) {
      minValue = value;
      minElement = array[i];
    }
  }
  return minElement;
}

export function maxBy(array, cb) {
  let maxValue;
  let maxElement;
  for (let i = 0; i < array.length; i++) {
    const value = cb(array[i]);
    if (maxValue === undefined || value > maxValue) {
      maxValue = value;
      maxElement = array[i];
    }
  }
  return maxElement;
}
