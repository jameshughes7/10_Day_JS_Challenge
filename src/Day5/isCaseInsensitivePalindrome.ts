export const isCaseInsensitivePalindrome = ((inputString: String): boolean => {

    //Simpler solution
    const lowerCasedInputString = inputString.toLowerCase();
    
    // Typical split, reverse, join to reverse a string 
    // const reversedLowerCasedInputString = lowerCasedInputString.split('').reverse().join('');
    
    // For loop in reverse
    let reversedLowerCasedInputString = "";
    for (let i = lowerCasedInputString.length -1; i >= 0; i--) {
        console.log(`i: ${i}`)
        reversedLowerCasedInputString += lowerCasedInputString[i];
    }

    return lowerCasedInputString === reversedLowerCasedInputString;

    // More complex solution
    // const inputStringArray: String[] = inputString.toLowerCase().split('');
    // if (inputString.length % 2 === 0) {
    //     return false;
    // }
    // const middleIndex = (inputStringArray.length -1) / 2
    // const beforeMiddle = inputStringArray.slice(0, middleIndex).join('');
    // const afterMiddle = inputStringArray.slice(middleIndex +1, inputStringArray.length).reverse().join('');

    // return beforeMiddle === afterMiddle;
})