/* eslint-disable linebreak-style */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
    this.verifyTypeSafety();
  }

verifyTypeSafety() {
  if (typeof this._name !== 'string') {
    throw new TypeError('Name must be a string');
  } 
  if (typeof this._length !== 'number') {
    throw new TypeError('Length must be a number');
  } 
  const isArray = Array.isArray(this._students);
  if (isArray !== true) {
    throw new TypeError('Students must be an array');
  }
}

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    const isArray = Array.isArray(val);
    if (isArray !== true) {
      throw new TypeError('Students must be an array');
    }
    this._students = val;
  }
}
