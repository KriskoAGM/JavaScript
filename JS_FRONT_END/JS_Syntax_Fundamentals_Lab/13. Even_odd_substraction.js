function solve(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        inputArr[i] = Number(inputArr[i]);
    }

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 2 === 0) {
            evenSum += inputArr[i];
        } else {
            oddSum += inputArr[i];
        }
    }

    let result = evenSum - oddSum;
    console.log(result);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);