export default function setFromArray(array) {
  if (Array.isArray(array)) return Set([]);
  return Set(array);
}
