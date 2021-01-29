export default function appendToEachArrayValue(array, appendString) {
  let finalArray = [];
  for (const val of array) {
    finalArray.push(appendString + val)
  }
  
  return finalArray;
}
