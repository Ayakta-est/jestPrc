/*const sum = (a,b) => {
   return a + b;
}
console.log(sum(7,3));

module.exports = { sum }; */

let oneEurols = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }