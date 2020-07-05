// export const largestNumber = ((num) => {
//     const numArray = [];
//     for (let i = 1; i <= num; i ++) {
//         numArray.push(i);
//     }
//     const largestNumberArray = [];
//     for (let i = 0; i < num; i++) {
//         largestNumberArray.push((numArray[i]/numArray[i] * 9).toString());
//     }
//     return parseInt(largestNumberArray.join(''));
// })

// Using string concat and parseInt
// export const largestNumber = ((num) => {
//     let placeholder = '';
//     for (let i = 0; i < num; i++) {
//         placeholder = placeholder.concat('9');
//     }
//     return parseInt(placeholder);
// })

// Using String repeat method

export const largestNumber = ((num: number): number => {
    const stringRepeat = '9'.repeat(num);
    return parseInt(stringRepeat);
})

// Returns largest positive integer possible for digit count
// e.g's: 
// - largestNumber(2) = 99
// - largestNumber(3) = 999