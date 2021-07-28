/*
maior record começa em scores[0];
menor record também começa em scores[0]
*/
const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

scores.forEach
const breakingRecords = (scores) =>{
  
  let higestScore = scores[0];
  let lowestScore = scores[0];
  let numberHigestRocords = 0;
  let numberLowestRecords = 0;
  scores.forEach(score => {
    if(score > higestScore){
      numberHigestRocords++;
      higestScore = score;
    }
    if(score < lowestScore){
      numberLowestRecords++;
      lowestScore = score;
    }
  });
  
  return [numberHigestRocords, numberLowestRecords];
}

console.log(breakingRecords(scores));