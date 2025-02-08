/*const sum = (a,b) => {
   return a + b;
}
console.log(sum(7,3));

module.exports = { sum }; */

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
};

function fromDollarToYen(dollars) {

    return (dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {

    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {

    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };