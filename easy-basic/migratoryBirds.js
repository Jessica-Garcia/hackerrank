const arr = [1, 3, 3, 3, 2, 2, 2, 1];

function migratoryBirds(arr) {
  let mapBirds = new Map();

  let type = 0;

  arr.sort();

  arr.forEach(e => {
    if(!mapBirds.has(e)){
      mapBirds.set(e, 1);
    }
    else{
      mapBirds.set(e, mapBirds.get(e) + 1);
    }
  });

  let largestNumberSightings = Math.max(...mapBirds.values());

  for(const [key, value] of mapBirds){
    if(value === largestNumberSightings){
      type = key;
      break;
    }
  }

  return type;
};

console.log(migratoryBirds(arr));

