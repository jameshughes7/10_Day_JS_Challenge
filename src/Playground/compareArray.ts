// Write a method that compares 2 arrays;
const arr1 = [1,5,6,7,5,6,5,56,11,78,9789,8679,7,10];
const arr2 = [1,5,6,7,8,5,6,7,8,10,11,78];
const arr3 = [1,2,3,4,5]
const arr4 = [1,2,3,4,5]
// The result of compare(arr1, arr2) would be false and the result of compare(arr3, arr4) would be true;

// let compare = (arr1, arr2) =>[...new Set( arr1.filter(el => arr2.includes(el)))]

const compare = ((array1, array2) => {
    array1.filter((el) => {
        return el => array2.includes(el)
    })
    return false;
})

console.log(compare(arr1, arr2));
console.log(compare(arr3, arr4))