// Selection Sort
function selectionSort(array) {
    for (let i = array[0]; i < array.length - 1; i++) {
        min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        [array[i], array[min]] = [array[min], array[i]]
    }
    return array
}

console.log(selectionSort([0, -50, 8, 20, 300, 11, 66, 54, 7]))

// Insertion Sort
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let j = i - 1
        let temp = array[i]
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = temp
        console.log(array)
    }
    return array
}


console.log(insertionSort([5, 3, 7, 8, 6]))