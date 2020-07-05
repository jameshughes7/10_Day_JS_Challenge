import { largestNumber } from '../../src/Day9/largestNumber';
import { expect } from 'chai';

describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 2;
        const num2 = 3;
        // act
        const result = largestNumber(num);
        const result2 = largestNumber(num2);

        // log
        console.log("result: ", result);
        console.log("result: ", result2);
        
        // assert
        expect(result).to.eq(99);
        expect(result2).to.eq(999);
    });
});