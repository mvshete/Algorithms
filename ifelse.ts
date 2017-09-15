//Try to Code Without If-statements

//Challenge #1: Count the odd numbers in an array

var items = [1,4,5,9,0,-1,5];

//solution using if-else

var counter = 0;

items.forEach((num) =>{
  var reminder = Math.abs(num%2);
  if(reminder ===1){
    counter++;
  }
});

console.log(counter);

//solution without using if-else

//reset counter
counter=0;

items.forEach((num) =>{
  var reminder = Math.abs(num%2);
  counter+=reminder;
});

console.log(counter);

