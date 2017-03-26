var button = document.querySelector('.button');
var clockdiv = document.querySelector('.clockdiv');
var Minutes = document.querySelector('.Minutes');
var Seconds = document.querySelector('.Seconds');
var Resetbutt = document.getElementById('reset');
var startover = false;
var time = 25;

function clock(val) {
    var endtime = val;
    var timeinterval = setInterval(function() {
    var t = getTimeRemaining(endtime);
    Minutes.innerHTML = 'Minutes: '+t.minutes;
    Seconds.innerHTML = 'Seconds: '+t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
    if(startover === true){
      clearInterval(timeinterval);
    }
  },1000);
}

function getTimeRemaining(endtime) {
    var t = endtime - Date.now();
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function startClock() {
    startover = false;
    var end = Date.now() + (time*60*1000);
    clock(end);
}

button.addEventListener("click", startClock);

function reset() {
    startover = true;
    Minutes.innerHTML = 'Minutes: '+time;
    Seconds.innerHTML = 'Seconds: '+0;
}

Resetbutt.addEventListener("click", reset);








