/* eslint-disable linebreak-style */

export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, val] of array.entries()) {
    array[idx] = appendString + val;
  }

  return array;
}

// Another Solution
/*
export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, val] of array.entries()) {
    array[idx] = appendString + val;
  }
  return array;
}
*/
