function listOfNames(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    let result = sortedArr.map((name, index) => `${index + 1}.${name}`);
    console.log(result.join("\n"));
}

listOfNames(
    ["John", "Bob", "Christina", "Ema"]
)