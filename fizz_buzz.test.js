// const fizzBuzz = require('./fizzbuzz');


// describe(“fizzBuzz”, () => {
    
//     test(‘[3] should be fizz’, () => {
//         expect(fizzbuzz([3]).toBe(‘fizz’);
// });
// });

const fizzbuzz = require('./fizzbuzz');

describe("FizzBuzz", () => {
    test('[3] should be fizz', () => {
        expect (fizzbuzz([3])).toBe('fizz')
    });

    test('[5] should be buzz', () => {
        expect (fizzbuzz([5])).toBe('buzz')
    });

    test('[15] should be fizzbuzz', () => {
        expect (fizzbuzz([15])).toBe('fizzbuzz')
    });

    test('[2] should be 2', () => {
        expect (fizzbuzz([2])).toBe('2')
    });

    test('[0] should be fizzbuzz', () => {
        expect (fizzbuzz([0])).toBe('fizzbuzz')
    });

    test('[187] should be fizzbuzz', () => {
        expect (fizzbuzz([18887])).toBe('187')
    });
});
