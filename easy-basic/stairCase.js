const n = 6

function staircase(n) {
  const str = ' ';
  const str2 = '#'
  for(let i = 1; i <= n; i++){
    console.log(str.repeat(n - i).concat(str2.repeat(i)));
  }   
}

staircase(n);
