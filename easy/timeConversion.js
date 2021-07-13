const s = '12:05:45 AM'

function timeConversion(s) {
  let arr = s.substring(0, 8).split(':').map((e) => +e);
  if(s.endsWith('PM') && s.startsWith('12')) return s.substring(0, 8);
  if(s.endsWith('AM') && s.startsWith('12')) return s.substring(0, 8).replace('12', '00');
  if(s.endsWith('AM')) return s.substring(0, 8);
  if(s.endsWith('PM')) {
    arr.splice(0, 1, arr[0] + 12);
    let time = arr.map(e => e < 10 ? `0${e}` : e.toString()).join(':');
    return time;
  }
}

console.log(timeConversion(s));