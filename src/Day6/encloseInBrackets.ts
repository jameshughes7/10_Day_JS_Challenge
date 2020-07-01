export const encloseInBrackets = ((str: string) => {
    // Option 1 using String concat() method
    // const openingBracket = "(";
    // const closingBracket = ")";
    // let result = openingBracket.concat(str).concat(closingBracket);
    // return result;

    // Option 2 using spread, unshift(), push() and join() methods
    // const stringArray = [...str]
    // stringArray.unshift("(");
    // stringArray.push(")")
    // return stringArray.join('');

    // Option 3 using ES5 + for concat
    // return "(" + str + ")"

    //Option 4 using ES6 for concat
    return `(${str})`
}) 