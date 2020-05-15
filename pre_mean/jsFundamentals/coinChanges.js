// Given a number of US cents,
//     return the optimal configuration(meaning the largest denominations possible) of coins in an object.Use dollars, quarters, dimes, nickels, and pennies.

// Example: coinChange(312) returns

// {
//     dollars: 3,
//     dimes: 1,
//     pennies: 2
// }
// Example: coinChange(78) returns

// {
//     quarters: 3,
//     pennies: 3
// }


var dollars = 0,
    quarters = 0,
    dimes = 0,
    nickels = 0,
    pennies = 0;

function coinChange(cents) {
    pennies = cents % 100;
    dollars = (cents - pennies) / 100;
    temp = pennies;
    pennies = pennies % 25;
    quarters = (temp - pennies) / 25;
    temp = pennies;
    pennies = pennies % 10;
    dimes = (temp - pennies) / 10;
    temp = pennies
    pennies = pennies % 5;
    nickels = (temp - pennies) / 5;
    console.log("dollars: " + dollars, "quarters: " + quarters, "dimes: " + dimes, "nickels: " + nickels, "pennies: " + pennies)
}

coinChange(78)


// BONUS: Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.

// Example: coinChange({
//     dollars: 2,
//     dimes: 15,
//     pennies: 5
// }) returns

// {
//     dollars: 3,
//     quarters: 2,
//     nickels: 1
// }

function moneyObjectToCents(moneyObject) {
    // default all of the possible money types you expect
    var dollars = moneyObject.dollars || 0
    var quarters = moneyObject.quarters || 0
    var dimes = moneyObject.dimes || 0
    var nickels = moneyObject.nickels || 0
    var pennies = moneyObject.pennies || 0
    // calculate the total cents
    return dollars * 100 + quarters * 25 + dimes * 10 + nickels * 5 + pennies * 1
}

function coinChanges(moneyObject) {
    var cents = moneyObjectToCents(moneyObject)
    pennies = cents % 100;
    dollars = (cents - pennies) / 100;
    temp = pennies;
    pennies = pennies % 25;
    quarters = (temp - pennies) / 25;
    temp = pennies;
    pennies = pennies % 10;
    dimes = (temp - pennies) / 10;
    temp = pennies
    pennies = pennies % 5;
    nickels = (temp - pennies) / 5;
    console.log("dollars: " + dollars, "quarters: " + quarters, "dimes: " + dimes, "nickels: " + nickels, "pennies: " + pennies)
}
coinChanges({
    dollars: 2,
    dimes: 15,
    pennies: 5
})