export default function getListStudents() {
  const createObj = (id, firstName, location) => ({
    id, firstName, location,
  });
  return [createObj(1, 'Gullame', 'San Francisco'), createObj(2, 'James', 'Colombia'), createObj(5, 'Serena', 'San Francisco')];
}
