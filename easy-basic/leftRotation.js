const array = [1, 2, 3, 4, 5];
const rotations = 4;
const rotLeft = (a, d) => {
  for (let index = 0; index < d; index++) {
    a.push(a[0]);
    a.shift();
  }

  return a;
};

const result = rotLeft(array, rotations);
console.log(result);
