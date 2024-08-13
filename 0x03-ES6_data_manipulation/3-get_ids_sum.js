// Create a function getStudentIdsSum that returns the sum of all the student ids.

// It should accept a list of students (from getListStudents) as a parameter.

// You must use the reduce function on the array.

// bob@dylan:~$ cat 3-main.js
// import getListStudents from "./0-get_list_students.js";
// import getStudentIdsSum from "./3-get_ids_sum.js";

// const students = getListStudents();
// const value = getStudentIdsSum(students);

// console.log(value);
export default function getStudentIdsSum(studentList) {
  return studentList.reduce((a, b) => a + b.id, 0);
}
