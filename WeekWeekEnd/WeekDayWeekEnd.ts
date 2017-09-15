//Challenge #2: The weekendOrWeekday function

//soution using if-else
var WeekEndOrWeekDay = (inputDate) =>{
  var day:number = inputDate.getDay();

  if(day === 0 || day === 6) {
    return "Week End";
  }
  return 'Week Day';

  //Using ternary
  //return (day ===0 || day ===6)? 'Week End' :"Week Day";
}
console.log(WeekEndOrWeekDay(new Date('09/15/2017')));
console.log(WeekEndOrWeekDay(new Date('09/17/2017')));


