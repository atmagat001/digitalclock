const hourEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");



function updateClock () {
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();
    var ampm = "AM";

  
    ampm = hour > 12 ? "PM" : "AM";
    hour = hour > 12 ? hour-=12 : hour ;
    hour = hour < 10 ? "0"+ hour: hour ;
    minute = minute < 10 ? "0"+ minute: minute ;
    second = second < 10 ? "0" + second: second;
    
    
    
    hourEl.innerText = hour;
    minutesEl.innerHTML = minute;
    secondsEl.innerHTML = second;
    ampmEl.innerHTML = ampm;


    setTimeout(() => {
        updateClock();
       
    }, 1000);



}




updateClock();
