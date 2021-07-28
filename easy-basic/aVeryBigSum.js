const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  try {
    const total = ar.reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
    return total;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(aVeryBigSum(ar));