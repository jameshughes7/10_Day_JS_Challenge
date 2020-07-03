export const factorialNumber = ((num) => {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
})

// e.g factorialNumber(5) = 1 * 2 * 3 * 4 * 5 = 120