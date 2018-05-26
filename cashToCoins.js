const piggyBank = {
    quartersAmount: 2.75,
    dimesAmount: 6.90,
    nickelsAmount: 5.10 ,
    penniesAmount: 5.21
}

const quarters = "quarters";
const dimes = "dimes";
const nickels = "nickels";
const pennies = "pennies";
let dollarAmount = 0;

const convertQuarters = () => {
    let totalAmount = piggyBank.quartersAmount;
    dollarAmount = totalAmount * 4;
    console.log(`You have $${totalAmount.toFixed(2)}, which converts to ${dollarAmount} ${quarters}`);
}

const convertDimes = () => {
    let totalAmount = piggyBank.dimesAmount;
    dollarAmount = totalAmount * 10;
    console.log(`You have $${totalAmount.toFixed(2)}, which converts to ${dollarAmount} ${dimes}`);
}

const convertNickels = () => {
    let totalAmount = piggyBank.nickelsAmount;
    dollarAmount = totalAmount * 20;
    console.log(`You have $${totalAmount.toFixed(2)}, which converts to ${dollarAmount} ${nickels}`);
}

const convertPennies = () => {
    let totalAmount = piggyBank.penniesAmount;
    dollarAmount = totalAmount * 100;
    console.log(`You have $${totalAmount.toFixed(2)}, which converts to ${dollarAmount} ${pennies}`);
}

convertQuarters();
convertDimes();
convertNickels();
convertPennies();