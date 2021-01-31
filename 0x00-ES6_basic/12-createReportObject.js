/* eslint-disable linebreak-style */

export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      const allKeys = Object.keys(employeesList);
      return allKeys.length;
    },
  };

  return obj;
}

// Another Solution
/*
export default function createReportObject(employeesList) {
  return {
    allEmployees: {...employeesList},
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
*/