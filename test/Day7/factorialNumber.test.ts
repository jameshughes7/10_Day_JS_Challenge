import { factorialNumber } from '../../src/Day7/factorialNumber'
import { expect } from 'chai';

describe('factorialNumber()', () => {
    it('returns factorial of number param', () => {
        // arrange
        const num = 5;
        
        // act
        const result = factorialNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).to.eq(120);
    });
});