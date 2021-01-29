// Updated Solution
export default function appendToEachArrayValue(array, appendString) {
  let finalArray = [];
  for (const val of array) {
    finalArray.push(appendString + val)
  }
  
  return finalArray;
}

// Old Solution
/*
export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, val] of array.entries()) {
    array[idx] = appendString + val;
  }

  return array;
}
*/
