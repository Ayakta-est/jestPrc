/* const { sum } = require('./app.js');
 
test('adds 14 + 9 to equal 23',() => {

let total = sum(14,9);

expect(total).toBe(23);

});                     */

test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1490.3);
});

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBe(7.2);
});