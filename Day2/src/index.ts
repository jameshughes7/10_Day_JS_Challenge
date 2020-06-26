// Given an array of strings return another array containing all of its longest strings
// e.g. for input ["ABC", "ab", "JH", "JAH"], it should return ["ABC", "JAH"]

export const allLongestStrings = (array: Array<String>) => {
    const arrayAsInt: Array<number> = array.map(el => el.length);
    const longest = arrayAsInt.reduce((prev,curr) => Math.max(prev,curr), 0);
    console.log(Math.max(...arrayAsInt));
    return array.filter(el => el.length === longest);
}