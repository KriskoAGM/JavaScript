function findHashTagWord(text) {
    let textArr = text.split(" ");
    let result = []; 

    for (const el of textArr) {
        if (el[0] === '#' && el.length > 1) {
            let word = el.slice(1);
            let allLetters = checkAllLetters(word);
            if (allLetters) {
                result.push(word);
            }
        }
    }

    function checkAllLetters(word) {
            return word.toLowerCase().split("").every(char => {
            const code = char.charCodeAt(0);
            return (code >= 97 && code <= 122);
        })
    }

    console.log(result.join('\n'));
}

findHashTagWord(
    'The symbol # is known #variously in English-speaking #regions as the #number sign'
)