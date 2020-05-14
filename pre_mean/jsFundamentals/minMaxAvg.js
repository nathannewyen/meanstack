// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function maxMinAvg(array) {
    max = array[0]
    min = array[0]
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        } {
            sum = sum + array[i]
        }
        var avg = 0
        avg = sum / array.length;
    }
    return `The minimum is ${min}, the maximum is ${max}, and the average is ${avg}.`
}

console.log(maxMinAvg([1, -2, 9, 4]))