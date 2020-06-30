// Array replace challenge
// Given an array of integers, replace all the the occurrences of elemToReplace with substitutionElem
export const arrayReplace = ((inputArray: Array<number>, elemToReplace: number, substitutionElem: number) => {
    for (let i = 0; i <= inputArray.length-1; i ++) {
        inputArray[i] === elemToReplace ? inputArray[i] = substitutionElem : inputArray[i];
    }
    return inputArray;
})