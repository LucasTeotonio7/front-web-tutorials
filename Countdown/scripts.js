const year = new Date().getFullYear();
const nextYear = year + 1;

const countDate = new Date('dec 30, 2023 08:50:00').getTime();
const $title = document.getElementById('title');
const $countdownArea = document.getElementById('countdown-area');
const $imageBox = document.getElementById('image-box');
const $mainContainer = document.getElementById('main-container');

function setNewYear() {
    $countdownArea.style.display = 'none';
    $mainContainer.style.backgroundImage = 'url("images/fireworks.gif")';
    $imageBox.style.background = '#373a40';
    $title.classList.remove('red');
    $title.innerHTML =
    "Feliz ano novo<br><span>20<i>24</i></span>";
    $title.classList.add('new-year');

    $title.addEventListener('click', function() {
        var audio = document.getElementById('audio');
        if (audio.paused || audio.ended) {
          audio.play();
        } else {
          audio.pause();
        }
    });
}

function newYear(){
    const now = new Date().getTime();
    gap = countDate - now;

    if(gap < 0) {
        setNewYear();
        clearInterval(intervalID);
        return true;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const d = Math.floor(gap / (day));
    const h = Math.floor((gap % (day)) / hour);
    const m = Math.floor((gap % (hour)) / minute);
    const s = Math.floor((gap % (minute)) / second);


    $day = document.getElementById('day');
    $hour = document.getElementById('hour');
    $minute = document.getElementById('minute');
    $second = document.getElementById('second');

    if(d==0 && h==0 && m==0 && s < 60) {
        $largerCounters = document.getElementsByClassName('core');
        for (var i = 0; i < $largerCounters.length; i++) {
            $largerCounters[i].style.display = 'none';
        }

        $second.classList.add("last-seconds");
        $title.classList.add("red");
        $countdownArea.classList.add('last-time');
    }

    $day.innerText = d;
    $hour.innerText = h;
    $minute.innerText = m;
    $second.innerText = s;
}

var intervalID = setInterval(function(){
    newYear();
},1000)

nextYearStr = year.toString();
document.getElementById('title').innerHTML = "Contagem Regressiva para o ano novo<br><span>20<i>24</i></span>";
