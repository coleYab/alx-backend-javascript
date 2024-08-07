export default function appendToEachArrayValue(array, appendString) {
    let index = 0;
    for (let element of array) {
        array[index++] = appendString + element;
    }

    return array;
}
