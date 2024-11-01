/*
Today's Example:
if total price is below Ksh 1000
then Ksh 500 shipping cost

If total price is below Ksh 2000;
then Ksh 300 shipping cost 

If total price above Ksh 2000;
then free shipping cost.
*/

const standardShippingCost = 600;
const discountedShippingCost = 400;

let totalPrice;

function calculateShippngCost(totalPriceParam) {
    let shippingCost;

if (totalPriceParam <= 1000) {
    shippingCost = standardShippingCost
} else if (totalPriceParam <= 2000) {
    shippingCost = discountedShippingCost
} else shippingCost = 0

console.log('Your shipping cost is Ksh ' + shippingCost)
console.log('For total price of Ksh ' + totalPriceParam)
console.log("---------------------")

}

// user starts shopping
totalPrice = 1000
calculateShippngCost(totalPrice)

// more items added to shopping cart 
totalPrice = 1900
// ready to order
calculateShippngCost(totalPrice)

//add another thing to cart
totalPrice = 2400
calculateShippngCost(totalPrice)

// placed the order

console.log('Thanks For Shopping with Us! Cheers!')

