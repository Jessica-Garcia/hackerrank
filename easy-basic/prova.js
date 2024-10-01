/* const n = '15';
const a = (d) => {
  const arr = [];
  const aux = +d;
  for (let i = 0; i <= aux; i++) {
    arr.push(i);
  }
  const str = arr.join('');
  const newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      newStr.push(i);
    }
  }
  return newStr.length;
};
const result = a(n);
console.log(result); */

/* const n = '2';
const a = (d) => {
  const aux = +d;
  const arr = [];
  let sum = 0;
  let par = 0;
  for (let i = 0; i < aux; i++) {
    par = par + 2;
    arr.push(par);
  }

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
};
const result = a(n);
console.log(result); */

/* const n = '2,3,6,8,5,7';
const a = (d) => {
  const arr = d.split(',');
  const newArr = [];
  let compr = 0;
  let larg = 0;
  let p = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    newArr.push(+arr[i]);
  }

  for (let i = 0; i < newArr.length; i = i + 2) {
    compr = newArr[i];
    larg = newArr[i + 1];
    p = Math.round(2 * (compr + larg));
    sum = sum + p;
  }

  return sum;
};
const result = a(n);
console.log(result); */

/* const n = 233;
const a = (d) => {
  const aux = d.toString().trim();
  return (+aux >>> 0).toString(2);
};
const result = a(n);
console.log(result); */

/* const n = 'FFPFA';
const m = 'AAPAFFPF';

const a = (d) => {
  const arrTotal = [];
  const aux = d.toString().trim();
  const arrA = [];
  const arrF = [];
  for (let i = 0; i < aux.length; i++) {
    if (aux[i] === 'A' || aux[i] === 'F') {
      arrTotal.push(aux[i]);
    }
  }

  for (let i = 0; i < arrTotal.length; i++) {
    if (arrTotal[i] === 'A') {
      arrA.push(arrTotal[i]);
    } else {
      arrF.push(arrTotal[i]);
    }
  }

  if (arrA.length <= 4 && arrF.length < 3) {
    return 'parabens';
  }

  return 'atencao';
};
const result = a(n);
console.log(result); */

/* const n = 'jarra,arraj';

const a = (d) => {
  const newD = d.toString().trim();
  const arrAux = newD.split(',');
  const word = arrAux[0];
  const ana = arrAux[1];
  const tam = word.length === ana.length;
  const dif = word !== ana;
  const arr = [];

  if (!tam && !dif) {
    return false;
  }

  for (let i = 0; i < word.length; i++) {
    if (ana.includes(word[i])) arr.push(word[i]);
  }
  if (arr.length === word.length) {
    return true;
  }

  return false;
};
const result = a(n);
console.log(result); */

const n = 'Maria,Ana,Pedro,Carlos,Juliana,2';

const a = (d) => {
  const newD = d.toString().trim();
  const arrAux = newD.split(',');
  const numStr = arrAux.pop();
  return numStr;
};
const result = a(n);
console.log(result);
