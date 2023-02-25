function solve(text, word) {
    let txtArr = text.split(" ");
    let count = 0;

    txtArr.forEach(element => {
        if (element === word) {
            count++;
        }
    });
    
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');