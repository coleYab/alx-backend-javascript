export default function returnHowManyArguments(...args) {
    let len = 0;

    for (const _ of args) {
        len += 1;
    }

    return len;
}
