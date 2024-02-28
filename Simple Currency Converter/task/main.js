// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
// Write your code here

console.log("Welcome to Currency Converter!\n" +
    "1 USD equals 1 USD\n" +
    "1 USD equals 113.5 JPY\n" +
    "1 USD equals 0.89 EUR\n" +
    "1 USD equals 74.36 RUB\n" +
    "1 USD equals 0.75 GBP");

// Conversion rates with USD as base currency
const rates = {
    "USD": 1,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75
}

while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    const choice = Number(input());
    if (choice === 1 || choice === 2) {
        if (choice === 2) {
            console.log("Have a nice day!");
            break;
        }
        console.log("What do you want to convert?");
        let fromCurrency = input("From: ").toUpperCase();

        if (!rates[fromCurrency]) {
            console.log("Unknown currency");
        } else {
            let toCurrency = input("To: ").toUpperCase();
            if (!rates[toCurrency]) {
                console.log("Unknown currency");
            } else {
                let amountStr = input("Amount: ");
                if (isNaN(Number(amountStr)) || amountStr.trim() === "") {
                    console.log("The amount has to be a number");
                } else {
                    let amount = Number(amountStr);
                    if (amount < 1) {
                        console.log("The amount cannot be less than 1")
                    } else {
                        let amountInUSD = amount / rates[fromCurrency];     // Original currency to USD
                        let result = amountInUSD * rates[toCurrency];
                        console.log(`Result: ${amount} ${fromCurrency} equals ${result.toFixed(4)} ${toCurrency}`);
                    }
                }
            }
        }
    } else {
        console.log("Unknown input")
    }
}

