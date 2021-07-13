const arr = [-4, 3, 9, 0, -4, 1];

function plusMinus(arr) {
  const arrQ  = arr.length;
  const posP = (arr.filter(v => v > 0).length / arrQ).toFixed(6);
  const negP = (arr.filter(v => v < 0).length / arrQ).toFixed(6);
  const zerP = (arr.filter(v => v === 0).length / arrQ).toFixed(6);
  
  return `${posP}\n${negP}\n${zerP}`;
}

console.log(plusMinus(arr));