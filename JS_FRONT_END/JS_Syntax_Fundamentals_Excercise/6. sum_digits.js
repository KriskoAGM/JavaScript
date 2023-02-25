function sumDigits(digits) {
    let result = 0;

    for (const digit of digits.toString()) {
        result += Number(digit);
    }

    console.log(result)
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);