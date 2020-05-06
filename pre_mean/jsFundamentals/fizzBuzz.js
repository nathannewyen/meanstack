// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number

// fizzbuzz(15) would log the following (each element on its own line):
// BONUS 1: Validate the user input. If the function is not passed a positive number, either throw an error or return null.


var log = console.log

function fizzbuzz(number) {
    if (isNaN(number)) {
        log("Parameter must be a positive number")
    }
    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            log("FizzBuzz")
        } else if (i % 3 === 0) {
            log("Fizz")
        } else if (i % 5 === 0) {
            log("Buzz")
        } else console.log(i)
    }
}

fizzbuzz("fifteen")
fizzbuzz(15)

// BONUS 2: Rather than have the function log each element, return a nicely formatted string with all the elements. Include commas where appropriate to make it easier to read.


var str = "";

function fizzbuzz(number) {
    if (isNaN(number)) {
        log("Parameter must be a positive number")
    }
    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            str += "FizzBuzz, ";
        } else if (i % 3 === 0) {
            str += "Fizz, ";
        } else if (i % 5 === 0) {
            str += "Buzz, ";
        } else str += i + ", ";
    }
    return str
}

log(fizzbuzz(15))