import { firstDigit } from '../../src/Day8/firstDigit'
import { expect } from 'chai';

describe('firstDigit()', () => {
    it('return the first digit in a string', () => {
        // arrange
        const str = "var_1__Int2";
        
        // act
        const result = firstDigit(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).to.eq('1');
    });
});