import { allLongestStrings } from '../src/index';
import { expect } from 'chai';

describe('allLongestStrings test', () => {
    it('should return the longest strings in the array', () => {
        // Arrange
        const array: Array<String> = ["ABC", "ab", "JH", "JAH"];
        const array2: Array<String> = ["ab", "JH", "JAH"];

        // Act
        const result: Array<String> = allLongestStrings(array);
        const result2: Array<String> = allLongestStrings(array2);

        // Log
        console.log(`result: ${result}`);
        console.log(`result2: ${result2}`);

        // Assert
        expect(result).to.eql(["ABC", "JAH"]);
        expect(array).to.eql(["ABC", "ab", "JH", "JAH"]);
        expect(result2).to.eql(["JAH"]);
        expect(array2).to.eql(["ab", "JH", "JAH"]);
    });
});