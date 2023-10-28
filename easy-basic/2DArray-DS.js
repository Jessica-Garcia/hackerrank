const matrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

/**
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0],

a[0,0], a[0,1], a[0,2] -> a[0,1], a[0,2], a[0,3] -> a[0,2], a[0,3] a[0,4] -> a[0,3] a[0,4] a[0,5] 
        a[1,1]                    a[1,2]                    a[1,3]                  a[1,4]
a[2,0], a[2,1], a[2,2]    a[2,1], a[2,2], a[2,3] -> a[2,2], a[2,3], a[2,4] ->a[2,3],a[2,4],a[2,5]

*/

function hourGlassSum(arr) {
  let sum = 0;
  let arrSum = [];

  for (let row = 0; row < 4; row++) {
    for (let column = 0; column < 4; column++) {
      sum =
        arr[row][column] +
        arr[row][column + 1] +
        arr[row][column + 2] +
        arr[row + 1][column + 1] +
        arr[row + 2][column] +
        arr[row + 2][column + 1] +
        arr[row + 2][column + 2];

      arrSum.push(sum);
    }
  }

  return Math.max(...arrSum);
}

const maximumSum = hourGlassSum(matrix);
console.log(maximumSum);
