export const maxMultiple = ((divisor: number, bound: number): number => {
    const arrayFromBound = [];
    for (let i = 1; i <= bound; i++) {
        arrayFromBound.push(i);
    }
    for (let i = arrayFromBound.length; i > 0; i--) {
        if (arrayFromBound[i] % divisor === 0) {
            console.log(`maxMultiple result: ${arrayFromBound[i]}`);
            return arrayFromBound[i];
        }
    }
})

// Find largest integer that:
// is divisible by divisor
// is less than or equal to bound
// is greater than 0