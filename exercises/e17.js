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

  /*
  let minValue = array[0]
  for (let elm of array) {
    if (cb(elm) < cb(minValue)) {
      minValue = elm;
    }
  }
  return minElement;
  */
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

  /*
  let maxValue = array[0]
  for (let elm of array) {
    if (cb(elm) > cb(maxValue)) {
      maxValue = elm;
    }
  }
  return maxValue;
  */
}
