// Selection Sort
function selectionSort(array) {
    for (var i = array[0]; i < array.length - 1; i++) {
        min = i
        console.log("loop1 + min")
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        console.log(min);
        [array[i], array[min]] = [array[min], array[i]]
        console.log(array)
    }
}

console.log(selectionSort([0, -50, 8, 20, 300, 11, 66, 54, 7]))