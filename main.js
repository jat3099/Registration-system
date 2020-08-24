let raceNumber = Math.floor(Math.random() * 1000);
let early= true;
let age=15;

if( early && age >18){
  raceNumber +=1000;
}

if(early && age> 18){
  console.log(`Early register runner ${raceNumber} will start the race at 9:30am`);
}
else if( !early && age >18){
  console.log(`Late register runner with number ${raceNumber} will start race at 11:00am`)
}

else if( age < 18){
  console.log(`People under 18 will start the race at 12:30pm with the number ${raceNumber}`);
}