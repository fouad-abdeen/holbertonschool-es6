export default function createIteratorObject(report) {
  const arr = Object.values(report.allEmployees);
  const merged = [].concat.apply([], arr);
    
  return merged;
}
