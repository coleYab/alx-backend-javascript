export default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].reduce((x, y) => `${x} | ${y}`);
}
