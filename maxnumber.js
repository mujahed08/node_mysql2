//following are three method explain to find the max and min number in array//

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function findLargestNumber(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return "Array is empty.";
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
console.log("The largest number in the array is:", findLargestNumber(arr));

//other code method 2\
const arr1 = [1, 2, 5, 4, 3, 8, 9, 3, 12, 67, 23, -45, 23, 46];

// max element in above arrray.

let min = arr1[0];
for (let i = 1; i < arr.length; i++) {
  if (min > arr1[i]) {
    min = arr1[i];
  }
}
console.log(min);
//find max valu//
const arr2 = [1, 2, 5, 4, 3, 8, 9, 3, 12, 67, 23, -45, 23, 46];

// max element in above arrray.

let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (max < arr2[i]) {
    max = arr2[i];
  }
}
console.log(max);
