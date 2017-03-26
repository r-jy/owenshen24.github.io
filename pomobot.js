var button = document.querySelector('.button');
var clockdiv = document.querySelector('.clockdiv');
var Minutes = document.querySelector('.Minutes');
var Seconds = document.querySelector('.Seconds');
var Resetbutt = document.getElementById('reset');
var pause = false;

function clock (val) {
    var endtime = val;
    var timeinterval = setInterval(function() {
    var t = getTimeRemaining(endtime);
    if (! pause) {
    Minutes.innerHTML = 'Minutes: '+t.minutes;
    Seconds.innerHTML = 'Seconds: '+t.seconds;
    }
    if(t.total<=0){
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
    var end = Date.now() + (25*60*1000);
    clock(end);
}

button.addEventListener("click", startClock);

function reset() {
    pause = true;
}

Resetbutt.addEventListener("click", reset);