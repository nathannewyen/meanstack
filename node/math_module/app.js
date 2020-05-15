var mathlib = require('./mathlib')(); //notice the extra invocation parentheses!
console.log(mathlib.add(1, 2));
console.log(mathlib.subtract(4, 2))
console.log(mathlib.multiply(3, 3))
console.log(mathlib.random(10, 20))