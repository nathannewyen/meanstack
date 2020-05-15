function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

console.log(bubbleSort([1, 10, 32, 1, 6, 90, 31]))


// O(n)
function printArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// O(1)
function findNth(arr, n) {
    console.log(arr[n]);
}

// O(n)
function halving(n) {
    var count = 0;
    while (n > 1) {
        n = n / 2;
        count++;
    }
    return count;
}

// O(n2)
function identityMatrix(n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        var row = [];
        for (var j = 0; j < n; j++) {
            if (j == i) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}