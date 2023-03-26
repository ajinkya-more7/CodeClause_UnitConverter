const convert = document.querySelector('form');
const result = document.querySelector('#result');

convert.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = parseFloat(document.querySelector('#value').value);
    const category = document.querySelector('#category').value;
    const from = document.querySelector('#from').value;
    const to = document.querySelector('#to').value;
    let convertedValue = 0;

    if (category === 'length') {
        convertedValue = lengthConverter(value, from, to);
    } else if (category === 'weight') {
        convertedValue = weightConverter(value, from, to);
    } else if (category === 'volume') {
        convertedValue = volumeConverter(value, from, to);
    }

    result.textContent = `${value} ${from} = ${convertedValue} ${to}`;
});

function lengthConverter(value, from, to) {
    const lengths = {
        meters: 1,
        feet: 3.28084,
        inches: 39.3701,
        centimeters: 100,
        kilometers: 0.001,
        miles: 0.000621371
    };

    const fromValueInMeters = value / lengths[from];
    const convertedValue = fromValueInMeters * lengths[to];

    return convertedValue.toFixed(4);
}

function weightConverter(value, from, to) {
    const weights = {
        kilograms: 1,
        pounds: 2.20462,
        ounces: 35.274,
        grams: 1000,
        stones: 0.157473
    };

    const fromValueInKilograms = value / weights[from];
    const convertedValue = fromValueInKilograms * weights[to];

    return convertedValue.toFixed(4);
}

function volumeConverter(value, from, to) {
    const volumes = {
        liters: 1,
        gallons: 0.264172,
        fluidounces: 33.814,
        milliliters: 1000,
        cubicmeters: 0.001
    };

    const fromValueInLiters = value / volumes[from];
    const convertedValue = fromValueInLiters * volumes[to];

    return convertedValue.toFixed(4);
}
