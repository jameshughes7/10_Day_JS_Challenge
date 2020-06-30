import { alternatingSums } from '../../src/Day3/alternatingSums';
import { expect } from 'chai';

describe('SumArray Tests', () => {
    it('the first test', () => {
        // Arrange
        const array: number[] = [50,60,60,45,70];
        
        // Act
        const result = alternatingSums(array);

        // Log
        console.log(`result: ${result}`);

        // Assert
        expect(result).to.eql([180,105]);
    });
});