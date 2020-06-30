export const alternatingSums = ((array) => {
    let team1 = [];
    let team2 = [];
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        i % 2 === 0 ? team1.push(array[i]) : team2.push(array[i]);
    }
    finalArray.push(team1.reduce((prev,curr) => prev + curr, 0));
    finalArray.push(team2.reduce((prev,curr) => prev + curr, 0));
    return finalArray;
})