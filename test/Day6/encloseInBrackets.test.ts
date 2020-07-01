import { encloseInBrackets } from '../../src/Day6/encloseInBrackets';
import { expect } from 'chai';

describe('encloseInBrackets Test', () => {
    it('should return string enclosed in brackets', () => {
        // Arrange
        const string = 'James';

        // Act
        const result = encloseInBrackets(string);

        // Log
        console.log(`result: ${result}`);

        // Assert
        expect(result).to.eq('(James)')
    });
});