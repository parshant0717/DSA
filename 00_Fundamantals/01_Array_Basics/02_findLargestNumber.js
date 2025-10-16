// write a function that returns the largest number in the array.

const arr = [1, 5, 2, 7, 0, 3, 0];
const arr1 = [-3, -8, -7, -2];

// method 1
function findLargestNumber(array) {
  let largest = -Infinity;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

const result = findLargestNumber([]);
console.log(result);

// Method -2

function findLargestElement(array) {
  if (array.length < 1) return `Array is empty`;
  return array.reduce((maxVal, currVal) => {
    return currVal > maxVal ? currVal : maxVal;
  }, array[0]);
}

const newResult = findLargestElement(arr);
console.log(newResult);
