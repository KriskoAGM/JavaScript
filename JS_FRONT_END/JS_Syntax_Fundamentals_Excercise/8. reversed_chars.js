function charToString(firstChar, secondChar, thirdChar) {
    let result = Array(thirdChar, secondChar, firstChar);

    console.log(result.join(" "));
}

charToString(
    'A',
    'B',
    'C'
)
