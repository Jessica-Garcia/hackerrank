/* 
achar os números x, menor ou igual a 100, que são divisiveis por todos os elementos de as
todo os elementos de bs tem que ser divisiveis por x
*/
const as = [2, 4];
const bs = [16, 32, 96];

const getTotalx = (a, b) => {
  let count = 0;
  for(let x = 1; x <= 100; x++){
    if(a.every(a => x % a === 0)){
      if(b.every(b => b % x === 0)){
        count++;
      }
    }
  }
  return count;
}
console.log(getTotalx(as, bs));
