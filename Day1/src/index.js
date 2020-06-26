export const add = (...nums) => {
    // Using reduce
    // return nums.reduce((prev,curr) => prev + curr);
    
    // Using forEach
    let total = 0
    nums.forEach(num => total += num);
    return total;
}

