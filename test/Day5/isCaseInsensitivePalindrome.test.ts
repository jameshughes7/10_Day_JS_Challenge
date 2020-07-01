import { isCaseInsensitivePalindrome } from '../../src/Day5/isCaseInsensitivePalindrome';
import { expect } from 'chai';

describe('isCaseInsensitivePalindrome Test', () => {
    it('returns true for a case insensitive palindrome', () => {
        // arrange
        const str = 'AaBaa';
        
        // act
        const result = isCaseInsensitivePalindrome(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).to.eq(true);
    });
    
    it('returns false when not a case insensitive palindrome', () => {
        // arrange
        const str = 'abac';
        
        // act
        const result = isCaseInsensitivePalindrome(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).to.eq(false);
    }); 
    
    
    it('returns false when not a case insensitive palindrome', () => {
        // arrange
        const str = 'abbAAzzbZzAabBa'
        
        // act
        const result = isCaseInsensitivePalindrome(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).to.eq(true);
    });
});

// const beforeMiddle = inputStringArray.slice(0, middleIndex);
// const afterMiddle = inputStringArray.slice(middleIndex +1, inputStringArray.length).reverse();

// const lowerCaseBeforeMiddle = beforeMiddle.map(el => el.toLowerCase());
// const lowerCaseAfterMiddle = afterMiddle.map(el => el.toLowerCase());

// const everyBeforeMiddleEqual = lowerCaseBeforeMiddle.every(el => el === beforeMiddle[0]);
// const everyAfterMiddleEqual = lowerCaseAfterMiddle.every(el => el === afterMiddle[0]);

// return everyBeforeMiddleEqual && everyAfterMiddleEqual ? true : false;