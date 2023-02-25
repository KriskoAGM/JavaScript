function printAndSum(firstNum, secondNum) {
    let arr = [];
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        arr.push(i);
        sum += i;
    }

    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
