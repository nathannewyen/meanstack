// Example: binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93) returns - 1 and should only take about 4 iterations.

// Example: binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15) returns 5.

function binarySearch(array, value) {
    var high = array.length - 1;
    var low = 0;
    var count = 0;
    var middle = 0;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);

        // middle == value being search => DONE 
        if (array[mid] == value) {
            // return value
            return array[mid];
            count++;
        }
        // Move Low Up 1
        else if (value > array[mid]) {
            low = mid + 1;
            count++;
            console.log("Low and Mid: " + low, mid);
        } else {
            // Move High Down 1
            high = mid - 1;
            count++;
        }
    }
    console.log("function take " + count + " iterations")
    return -1;
}


// console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))
// Should Return -1

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15))
// Should Return 15


// What is the Big O time complexity of binary search? ==> O(n)