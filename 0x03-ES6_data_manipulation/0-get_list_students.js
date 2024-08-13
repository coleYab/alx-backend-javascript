export default function getListStudents() {
  const createObj = (id, firstName, location) => ({
    id, firstName, location,
  });
  return [createObj(1, 'Guillaume', 'San Francisco'), createObj(2, 'James', 'Columbia'), createObj(5, 'Serena', 'San Francisco')];
}
