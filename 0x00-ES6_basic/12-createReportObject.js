export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {...employeesList},
    getNumberOfDepartments(employeesList) {
      const allKeys = Object.keys(employeesList);
      return allKeys.length;
    },
  };

  return obj;
}
