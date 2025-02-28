import {describe, it, expect,test} from 'vitest';
import {max, fizzBuzz, factorial} from './intro';

describe('max', () => {
    it('should return the maximum of two numbers', () => {
        expect(max(1, 2)).toBe(2);
    });

    it('should return the maximum of two negative numbers', () => {
        expect(max(-1, -2)).toBe(-1);
    });

    it('should return the maximum of two negative numbers', () => {
        expect(max(-1, -2)).toBe(-1);
    });

    it('should return the first number if they are equal', () => {
        expect(max(1, 1)).toBe(1);
    });

});

describe('fizzBuzz', () => {
    it('should return fizz if the number is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    });

    it('should return buzz if the number is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    });

    it('should return fizzbuzz if the number is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
    });

    it('should return the number if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe(1);
    });
});

describe ('factorial', () => {
    it('should return the factorial of a number', () => {
        expect(factorial(5)).toBe(120);
    });

    it('should return 1 if the number is 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should return 1 if the number is 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('should return undefined if the number is negative', () => {
        expect(factorial(-1)).toBe(undefined);
    });
    
    
})
