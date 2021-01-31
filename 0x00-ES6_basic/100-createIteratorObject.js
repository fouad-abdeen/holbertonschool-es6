/* eslint-disable linebreak-style */

export default function createIteratorObject(report) {
  const arr = Object.values(report.allEmployees);
  const finalArr = arr.flat();
    
  return finalArr;
}

// Another Solution
/*
export default function createIteratorObject(report) {
  const arr = Object.values(report.allEmployees);
  const merged = [].concat.apply([], arr);
    
  return merged;
}
*/
