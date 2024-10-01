/*
   Given five positive integers, find the minimum and maximum values that can be calculated 
   by summing exactly four of the five integers. Then print the respective minimum and maximum
   values as a single line of two space-separated long integers.

*/

const arr = [1, 2, 3, 4, 5];

// define the maximun value
// define the minimum value
// sum all numbers - maximun = minimun
// sum all numbers - minimum = maximun

function minMaxSum(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const allSum = arr.reduce((total, current) => total + current, 0);
  const minSum = allSum - max;
  const maxSum = allSum - min;
  return `${minSum} ${maxSum}`;
}
console.log(minMaxSum(arr));
