"use strict";
function clock() {
    let date = new Date(); 
    let hour = date.getHours(); 
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let displayTime = ""; 
    if (hour < 9) {
        hour = "0" + hour; 
    }
    
    if (minutes < 9) {
        minutes = "0" + minutes; 
    }
    
    if (seconds < 9) {
        seconds = "0" + seconds; 
    }
    
    displayTime = hour + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = displayTime;
    document.body.style.backgroundColor = "#" + hour + minutes + seconds;
}

setInterval(clock, 1000);
