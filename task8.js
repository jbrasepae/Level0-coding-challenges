function timeConversion(num){
    var hours = num / 60;
    var newHour = Math.floor(hours);
    var minutes = num % 60;
    var hoursStr = 'hour';
    if(newHour > 1){
        hoursStr = 'hours';
    }
    if(num < 60){
        return (`${minutes} minutes`)
    }
    return(`${newHour} ${hoursStr} and ${minutes} minutes`);
}
console.log(timeConversion(77));