const year = 1918

const dayOfProgrammer = (year) => {
  let day = 13;
  const month = '09';

  if(year === 1918){
    day = 27;
  }
  else if(year >= 1700 && year <= 1917){
    if(year % 4 === 0){
      day = 12;
    }
  }
  else if(year > 1918){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
      day = 12;
    }
  }

  return `${day}.${month}.${year}`;
}

console.log(dayOfProgrammer(year));