class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.length !== newStudents.filter((x) => typeof x === 'string').length) {
      throw new TypeError('Students must be array of string');
    }

    this._students = [...newStudents];
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('Name must be a string');
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw new TypeError('Length must be a number');
    this._length = newLength;
  }

  get length() {
    return this._length;
  }
}

export default HolbertonCourse;
