function cookingNumbers(num, ...operations) {
    let number = Number(num);
    
    operations.forEach(command => {
        if (command === 'chop') {
            number /= 2;
        } else if (command === 'dice') {
            number = Math.sqrt(number);
        } else if (command === 'spice') {
            number++;
        } else if (command === 'bake') {
            number *= 3;
        } else if (command === 'fillet') {
            number -= number * 0.20;
        }

        console.log(number)
    });
}

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');