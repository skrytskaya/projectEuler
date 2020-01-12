// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?
function largestPrimeFactor(number) {
    if (number % 2 === 0) {
      return 2;
    }
    let arrayOfPrimeFctors = [];
    let i = 3;
    while(number != 1) {
      if (number % i === 0) {
        number /= i;
        arrayOfPrimeFctors.push(i);
      } else {
        i += 2;
      }
    }
    return arrayOfPrimeFctors[arrayOfPrimeFctors.length - 1];
  }
  
  largestPrimeFactor(13195);
  