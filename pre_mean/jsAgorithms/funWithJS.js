// // Selection Sort
// function selectionSort(array) {
// 	for (let i = array[0]; i < array.length - 1; i++) {
// 		min = i;
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[j] < array[min]) {
// 				min = j;
// 			}
// 		}
// 		[array[i], array[min]] = [array[min], array[i]];
// 	}
// 	return array;
// }

// console.log(selectionSort([0, -50, 8, 20, 300, 11, 66, 54, 7]));

// // Insertion Sort
// function insertionSort(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		let j = i - 1;
// 		let temp = array[i];
// 		while (j >= 0 && array[j] > temp) {
// 			array[j + 1] = array[j];
// 			j = j - 1;
// 		}
// 		array[j + 1] = temp;
// 	}
// 	return array;
// }

// console.log(insertionSort([5, 3, 7, 8, 6]));

// // Combination sort

// // top-down implementation
// function merge(left, right) {
// 	let arr = [];

// 	while (left.length && right.length) {
// 		if (left[0] < right[0]) {
// 			arr.push(left.shift());
// 		} else {
// 			arr.push(right.shift());
// 		}
// 	}
// 	return arr.concat(left.slice().concat(right.slice()));
// }

// function mergeSort(arr) {
// 	if (arr.length < 2) {
// 		return arr;
// 	}

// 	const middle = Math.floor(arr.length / 2);
// 	const left = arr.slice(0, middle);
// 	const right = arr.slice(middle);

// 	return merge(mergeSort(left), mergeSort(right));
// }

// const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// console.log(mergeSort(array.slice())); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Array: Partition
// Partition unsorted array in-place. Use arr[0] as
// pivot val; return idx of pivot. Input [5,4,9,2,5,3]
// becomes [4,2,3,5,9,5], return 4.
// Second: for pivot, use median of first, last, mid.
// Third: partition a subset, given start and end.
// Exclude end; default values are 0 and arr.length.

function partition(arr) {
	for (var i = 0; i < arr.length; i++) {
		pivot = arr[arr.length - 1]
		if (arr[i] > pivot) {
			temp = arr[arr.length - i] // temp = -2
			arr[arr.length - i] = pivot // -> arr[arr.length - i] = 3
			arr[arr.length - 1] = temp // -> 2
			arr[i] = temp // -> arr[i] = 5 
		}
		console.log(arr)
	}
	// return arr
}

console.log(partition([1, 2, 5, 4, -1, -2, 3]))


// Array: Quick Sort
// Create a function that uses
// partitionArray() to sort an array in-place.
// With yesterday’s code plus a very few new lines,
// you will implement QuickSort!