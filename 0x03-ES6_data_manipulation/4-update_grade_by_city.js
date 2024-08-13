// Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

// It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.

// newGrades is an array of objects with this format:

//   {
//     studentId: 31,
//     grade: 78,
//   }
// If a student doesn’t have grade in newGrades, the final grade should be N/A.
// gullame, john
// You must use filter and map combined.
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location == city).map((student) => {
    let score = 'N/A';

    for (const stuScore of newGrades) {
      if (student.id === stuScore.studentId) {
        score = stuScore.grade;
      }
    }

    return { ...student, grade: score };
  });
}
