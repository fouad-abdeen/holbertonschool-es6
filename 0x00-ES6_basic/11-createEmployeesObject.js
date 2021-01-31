/* eslint-disable linebreak-style */

export default function createEmployeesObject(departmentName, employees) {
  const obj = { [`${departmentName}`]: employees };
  return obj;
}

// Another Solution
/*
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: [...employees] };
}
*/