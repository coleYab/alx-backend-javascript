export default function createIteratorObject(report) {
  let arr = [];

  for (const obj in report.allEmployees) {
    if (report.allEmployees[obj].length !== 0) arr = [...arr, ...report.allEmployees[obj]];
  }

  return arr;
}
