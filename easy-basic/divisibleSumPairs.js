const ar = [1, 3, 2, 6, 1, 2];
const k = 3;
const n = ar.length;

const divisibleSumPairs = (n, k, ar) => {
  let count = 0;
  ar.forEach((element, i) => {
    ar.forEach((el, j) => {
      if((i < j) && (((element + el) % k) === 0)){
        count++;
      }
    })
  });

  return count;
}

console.log(divisibleSumPairs(n, k, ar));


