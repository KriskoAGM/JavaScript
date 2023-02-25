function revealWords(words, text) {
    let searchWords = words.split(", ");
    let textArr = text.split(" ");

    searchWords.forEach(word => {
        textArr.forEach(textWord => {
            let charArr = textWord.split("");
            let allSame = charArr.every((char) => char === textWord[0]);

            if (word.length === textWord.length && allSame) {
                text = text.replace(textWord, word);
            }
        });       
    });

    console.log(text);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')