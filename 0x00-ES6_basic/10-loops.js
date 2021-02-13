/* eslint-disable linebreak-style */

export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, val] of array.entries()) {
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + val;
  }

  return array;
}
