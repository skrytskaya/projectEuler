// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    const numbers = Array.from(Array(number).keys());
    const sum = numbers.filter(number => number % 3 === 0 || number % 5 === 0).reduce((acc, number) => {
        return acc + number;
    });
    return sum;
}

multiplesOf3and5(1000);
