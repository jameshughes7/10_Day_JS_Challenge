import { arrayReplace } from '../../src/Playground/arrayReplace';
import { expect } from 'chai';

describe('Array replace test', () => {
    it('adds a border around entire application', () => {
        // arrange
        const array = [1, 2, 1];
        const elemToReplace = 1;
        const substitutionElem = 3;
        
        // act
        const result = arrayReplace(array, elemToReplace, substitutionElem);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).to.eql([3, 2, 3]);
    });
});