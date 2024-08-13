export default function hasValuesFromArray(set, array) {
  return array.reduce((a, b) => a && set.has(b), true);
}
