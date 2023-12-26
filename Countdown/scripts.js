const nextYear = new Date().getFullYear() + 1


const countDate = new Date('jan 1,'+nextYear+' 00:00:00').getTime();

function newYear(){
    const now = new Date().getTime();
    gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const d = Math.floor(gap / (day));
    const h = Math.floor((gap % (day)) / hour);
    const m = Math.floor((gap % (hour)) / minute);
    const s = Math.floor((gap % (minute)) / second);


    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    newYear();
},1000)

nextYearStr = nextYear+''
document.getElementById('title').innerHTML =
    "Contagem Regressiva para<br><span>20<i>"
    + nextYearStr.substr(2,3)+"</i></span>";


