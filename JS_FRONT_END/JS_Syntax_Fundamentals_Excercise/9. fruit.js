function fruitPriceCalc(fruit, grams, pricePerKilogram) {
    let kg = grams / 1000;
    let totalPrice = pricePerKilogram * kg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

fruitPriceCalc("apple", 1563, 2.35);