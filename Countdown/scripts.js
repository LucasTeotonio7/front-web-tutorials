const nextYear = new Date().getFullYear() + 1
const countDate = new Date('jul 31, 2023 09:00:00').getTime();

function newYear(){
    const now = new Date().getTime();
    gap = countDate - now;

    if(countDate < now) {
        return
    }

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



document.getElementById('button-play').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
    this.style.display = 'none';
  
    var countdownBx = document.getElementsByClassName('countdownBx')[0];
    countdownBx.style.display = 'flex';
    countdownBx.classList.add('show-animation');
  
    var imgBx = document.getElementsByClassName('imgBx')[0];
    imgBx.style.display = 'block';
    imgBx.classList.add('show-animation');
  
    setTimeout(function() {
      countdownBx.classList.add('show');
      imgBx.classList.add('show');
    }, 100); // Aguarde 100 milissegundos antes de adicionar a classe "show"
  
    this.parentNode.remove();
  });
