

export const max = (a, b) => {
    return a > b ? a : b;
    return a 
}

export const fizzBuzz = (number) => {
    if(number % 3 === 0 && number % 5 === 0) {
        return 'fizzbuzz';
    }
    if (number % 3 === 0) {
        return 'fizz';
    }
    if (number % 5 === 0) {
        return 'buzz';
    }
    return number;
}

export const factorial = (number) => {
    if (number === 0) {
        return 1;
    }
    if (number === 1) {
        return 1;
    }

    if (number < 0) {
        return undefined;
    }
    return number * factorial(number - 1);
}

