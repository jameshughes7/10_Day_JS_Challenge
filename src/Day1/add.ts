export const add = (...nums : Array<number>) => {
    // Using reduce
    // return nums.reduce((prev,curr) => prev + curr);
    
    // Using forEach
    let total: number = 0
    nums.forEach(num => total += num);
    return total;
}