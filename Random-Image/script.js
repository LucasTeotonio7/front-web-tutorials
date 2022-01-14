function changeBg(){
    const images = [
        "url('img1.jpg')",
        "url('img2.jpg')",
        "url('img3.jpg')",
        "url('img4.jpg')",
        "url('img5.jpg')",
        "url('img6.jpg')"
    ];
    const section = document.querySelector('section');
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}

setInterval(changeBg, 300);
