export default function cleanSet(set, startString) {
  let cleanArr = [];

  if (startString !== '') {
    cleanArr = (Array.from(set.values())).filter(
      (str) => str.startsWith(startString),
    ).map((item) => item.replace(startString, ''));
  }

  const initVal = (cleanArr.length === 0) ? '' : cleanArr[0];

  if (cleanArr.length <= 1) return initVal;

  return cleanArr.slice(1).reduce((a, b) => `${a}-${b}`, initVal);
}
