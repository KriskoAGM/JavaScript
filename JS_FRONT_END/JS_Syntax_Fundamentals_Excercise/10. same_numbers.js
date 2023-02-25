function sameNumbersAndSum(number) {
    let numArr = number.toString().split("");
    let result = '';
    let sum = 0;

    if (numArr.every(el => el === numArr[0])) {
        result = 'true';
    } else {
        result = 'false';
    }

    for (const num of numArr) {
        sum += Number(num);
    }

    console.log(result);
    console.log(sum);


}

sameNumbersAndSum(2222222);
