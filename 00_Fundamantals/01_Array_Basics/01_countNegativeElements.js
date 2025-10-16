// Write a function which returns the count of negative numbers in the array.

const arr = [1, 4, 3, -1, 3, -4, -5, 0, -1, -8];

function countNegativeNumbers(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}

const result = countNegativeNumbers(arr);
console.log(result);
