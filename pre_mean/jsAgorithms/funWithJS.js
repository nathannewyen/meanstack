// Selection Sort
function selectionSort(array) {
	for (let i = array[0]; i < array.length - 1; i++) {
		min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		[ array[i], array[min] ] = [ array[min], array[i] ];
	}
	return array;
}

console.log(selectionSort([ 0, -50, 8, 20, 300, 11, 66, 54, 7 ]));

// Insertion Sort
function insertionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let j = i - 1;
		let temp = array[i];
		while (j >= 0 && array[j] > temp) {
			array[j + 1] = array[j];
			j = j - 1;
		}
		array[j + 1] = temp;
	}
	return array;
}

console.log(insertionSort([ 5, 3, 7, 8, 6 ]));

// Combination sort

// top-down implementation
function merge(left, right) {
	let arr = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}
	return arr.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

const array = [ 9, 2, 5, 6, 4, 3, 7, 10, 1, 8 ];
console.log(mergeSort(array.slice())); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
