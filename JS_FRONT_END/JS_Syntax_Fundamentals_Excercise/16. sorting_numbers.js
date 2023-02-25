function sortNumbers(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    let step = 0;
    let result = [];

    while (sortedArr.length > 0) {
        if (step % 2 === 0) {
            let firstEl = sortedArr.shift();
            result.push(firstEl);
        } else {
            let lastEl = sortedArr.pop();
            result.push(lastEl);
        }
        step++;
    }

    return result;
}


console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));