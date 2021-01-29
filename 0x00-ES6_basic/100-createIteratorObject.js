export default function createIteratorObject(report) {
  const arr = Object.values(report.allEmployees);
  const finalArr = arr.flat();
    
  return finalArr;
}
