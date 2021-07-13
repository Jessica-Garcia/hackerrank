const grades = [73, 67, 38, 33];

function gradingStudents(grades){
  const newGrades = grades.map(e => {
    if(e < 38) return e;

    const string = e.toString();
    const firstEl = string.slice(0,1);
    const secondEl = string.slice(1,2);

    if((+secondEl < 5) && ((5 - +secondEl) < 3)){
      const round = firstEl + '5';
      return +round;
    }
    if((+secondEl > 5) && ((10 - +secondEl) < 3)){
      const newFirst = (+firstEl + 1).toString();
      const round = newFirst + '0';
      return +round;
    }
  
    return e;
  })
  return newGrades;
}

console.log(gradingStudents(grades));