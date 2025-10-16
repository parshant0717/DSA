// write a function that finds the element in the array and return the index of it. If the element is not present in the array then simply return -1.

const arr = [1, 2, 3, 5, 7, 0, -1, -8, 10];

function findElementsByIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      return i;
    }
  }
  return -1;
}

let result = findElementsByIndex(arr, 3);
console.log(result);
