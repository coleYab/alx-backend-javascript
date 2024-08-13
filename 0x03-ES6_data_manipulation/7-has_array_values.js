export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array) === false) return set.has(array);
  return array.reduce((a, b) => a && set.has(b), false);
}
