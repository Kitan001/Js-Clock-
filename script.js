function displayTime(){
    var dateTime = new Date();
    var hrs= dateTime.getHours().toString().padStart(2,'0');
    var min=  dateTime.getMinutes().toString().padStart(2,'0');
    var sec = dateTime.getSeconds().toString().padStart(2,'0');
    var msec = dateTime.getMilliseconds();
    var session = document.getElementById('session');

    if(hrs>=12){
        session.innerHTML='PM';
    }else{
        session.innerHTML='AM';
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    // document.getElementById('milliseconds').innerHTML = msec;

}

setInterval(displayTime,10);
function updateTime(){
    var dateInfo = new Date();

var dow=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
],
month =[
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

 day = dateInfo.getDate();
 year = dateInfo.getFullYear();



// var currentDow= dow[dateInfo.getDay()];
// var currentMonth= month[dateInfo.getMonth()];
// var currentDay= day ;
// var currentYear= year ;
// document.getElementById('dayname').innerHTML = currentDow;
// document.getElementsByid('month').innerHTML = currentMonth;
// document.getElementsByid('daynum').innerHTML = currentDay;
// document.getElementsByid('year').innerHTML = currentYear;

var currentDate = dow[dateInfo.getDay()] + ', ' + month[dateInfo.getMonth()] + ' ' + day  + ' ' + year;
document.getElementsByClassName('dat')[0].innerHTML= currentDate;
}
setInterval(updateTime())