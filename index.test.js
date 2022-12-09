const fizzbuzz = require('./index');

test('returns FizzBuzz when num is divisible by both 3 and 5', () => {
    expect(fizzbuzz(30)).toBe('FizzBuzz');
});

test('return Fizz when num is divisible by 3', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
});

test('return Buzz when num is dibisible by 5', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
});