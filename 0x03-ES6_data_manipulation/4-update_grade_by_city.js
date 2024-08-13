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
