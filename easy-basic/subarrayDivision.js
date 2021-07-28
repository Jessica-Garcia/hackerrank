const s = [1, 2, 1, 3, 2];
const d = 3;
let m = 2;

const birthday = (s, d, m) => {
  let segment = 0;
  let start = 0;
  let end = m;
  s.forEach(e => {
    const array = s.slice(start, end);
    const sum = array.reduce((acc, v) => acc + v);
    if(sum === d){
      segment++;
    }
    start++;
    end++;
  });
  return segment;
}

console.log(birthday(s, d, m));