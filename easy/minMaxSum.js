const arr = [1, 2, 3, 4, 5];

function minMaxSum(arr) {
  const totalSum = arr.reduce((ac, e) => {
    ac += e;
    return ac;
  }, 0);
  const minSum = totalSum - Math.max(...arr);
  const maxSum = totalSum - Math.min(...arr);
  console.log(`${minSum} ${maxSum}`);
}

minMaxSum(arr);