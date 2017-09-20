//Challenge #2: The weekendOrWeekday function
//soution using if-else
var WeekEndOrWeekDay = function (inputDate) {
    var day = inputDate.getDay();
    if (day === 0 || day === 6) {
        return "Week End";
    }
    return "Week Day";
    //Using ternary
    //return (day ===0 || day ===6)? 'Week End' :"Week Day";
};
console.log(WeekEndOrWeekDay(new Date("09/15/2017")));
console.log(WeekEndOrWeekDay(new Date("09/17/2017")));
//soution without using if-else
var weekendOrWeekday1 = function (inputDate) {
    var day = inputDate.getDay();
    var labels = {
        0: "Week End",
        6: "Week End",
        default: "Week Day"
    };
    return labels[day] || labels["default"];
};
console.log(weekendOrWeekday1(new Date("09/15/2017")));
console.log(weekendOrWeekday1(new Date("09/17/2017")));
