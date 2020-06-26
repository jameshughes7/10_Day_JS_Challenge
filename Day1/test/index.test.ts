import { add } from '../src/index';
import { expect } from 'chai';

describe('Add nums test', () => {
    it('should add 2 numbers', () => {
        //arrange
        const num1: number = 10;
        const num2: number = 20;

        //act
        const result: number = add(num1,num2);

        //log
        console.log(`Result: ${result}`);

        //assert
        expect(result).to.eq(30);
    });

    it('should 2 or more numbers', () => {
        //arrange
        const num1: number = 10;
        const num2: number = 20;
        const num3: number = 30;
        const num4: number = 40;

        //act
        const result:number = add(num1,num2, num3, num4);

        //log
        console.log(`Result: ${result}`);

        //assert
        expect(result).to.eq(100);
    });
});

