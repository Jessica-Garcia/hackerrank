const clouds = [0, 0, 0, 0, 1, 0];

const jumpingOnTheClouds = (c) => {
  let numberOfJumps = 0;

  for (let i = 0; i < c.length; i) {
    if (c[i + 2] === 0) {
      i = i + 2;
    } else {
      i++;
    }
    numberOfJumps++;

    if (i + 1 >= c.length) {
      return numberOfJumps;
    }
  }
};

const minimumNumberOfJumps = jumpingOnTheClouds(clouds);

console.log(minimumNumberOfJumps);
