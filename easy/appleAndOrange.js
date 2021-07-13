const [ s,  t ] = [ 7 , 10 ];
const [ a, b] = [ 4, 12 ]
const [ m, n ] = [ 3, 3 ]
const [apples, oranges ]= [[2, 3, -4], [3, -2, -4]];

const applesAndOranges = (s, t, a, b, apples, oranges) => {
  const fallenApples = apples.
  map(d => a + d).
  filter(a => (a >= s && a <= t)).length;

  const fallenOranges = oranges.
  map(d => b + d).
  filter(a => (a >= s && a <= t)).length;

  console.log(fallenApples);
  console.log(fallenOranges);
}

applesAndOranges(s, t, a, b, m, n, apples, oranges);