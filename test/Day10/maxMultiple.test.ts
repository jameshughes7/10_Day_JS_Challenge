import { maxMultiple } from '../../src/Day10/maxMultiple';
import { expect } from 'chai';

describe('maxMultiple()', () => {
    it('returns largest integer up to boundary', () => {
        // arrange
        const divisor = 3;
        const bound = 10;
        const bound2 = 20;
        
        // act
        const result = maxMultiple(divisor, bound);
        const result2 = maxMultiple(divisor, bound2);

        // log
        console.log("result: ", result);
        console.log("result2: ", result2);
        
        // assert
        expect(result).to.eq(9);
        expect(result2).to.eq(18);
    });
});