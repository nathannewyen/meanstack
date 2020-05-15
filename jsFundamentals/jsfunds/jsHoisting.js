console.log(hello);
var hello = 'world';
// ==> undefined

// ----------------------------------------------------------------

var needle = 'haystack';
test();

function test() {
    var needle = 'magnet';
    console.log(needle);
}
// ==> magnet

// ----------------------------------------------------------------

var brendan = 'super cool';

function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// ==> super cool

// ----------------------------------------------------------------

var food = 'chicken';
console.log(food);
eat();

function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// ==> chicken, half-chicken

// ----------------------------------------------------------------

// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// ==> TypeError: mean is not a function

// ----------------------------------------------------------------

console.log(genre);
// undefined
var genre = "disco";
rewind();

function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// ==> rock, r&b, disco

// ----------------------------------------------------------------

dojo = "san jose";
console.log(dojo);
// ==> san jose
learn();

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// ==> seattle, burbank, san jose

// ----------------------------------------------------------------

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
        // TypeError: Assignment to constant variable.
    }
    return dojo;
}

// dojo = {
//     name: "Chicago",
//     students: 65,
//     hiring: true,
// }

// dojo = "close for now" => TypeError: Assignment to constant variable.