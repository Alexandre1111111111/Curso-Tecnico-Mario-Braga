const ftsd = document.querySelectorAll(".fts div");
const verct = document.querySelector(".verct");
const pimg = document.querySelector("#pimg");
const fch = document.querySelector("#fch");
const volt = document.querySelector("#volt");
const prox = document.querySelector("#prox");
const zoom = document.querySelector(".zoom");

for (let i = 0; i < ftsd.length; i++) {
    ftsd[i].addEventListener("click", () =>{
        verct.style.display = "flex";
        setTimeout(() => {
        verct.style.opacity = "1";
        }, 10)
        pimg.src = `i${i + 1}.jpg`;
        pimg.addEventListener("mouseover", () => {
            zoom.style.display = "block";
            zoom.style.background = `url(i${i + 1}.jpg)`;
        });
    })
}
fch.addEventListener("click", () =>{
    verct.style.opacity = "0";
    setTimeout(() => {
    verct.style.display = "none";
    }, 300)
})

prox.addEventListener("click", () =>{
    let i = parseInt(pimg.src.match(/\d+/)) % ftsd.length + 1;
    if (i > ftsd.length) {
    i = 1;
    }
    pimg.src = `i${i}.jpg`;
})

volt.addEventListener("click", () =>{
    let i = parseInt(pimg.src.match(/\d+/)) % ftsd.length - 1;
    if (i < 1) {
    i += ftsd.length;
    }
    pimg.src = `i${i}.jpg`;
})

pimg.addEventListener("mousemove", flw);

pimg.addEventListener("mouseout", () => {
    zoom.style.display = "none";
});

function flw(e) {
    zoom.style.background = `url(${pimg.src})`;
    let x = e.offsetX;
    let y = e.offsetY;
    zoom.style.left = `${x + 150}px`;
    zoom.style.top = `${y}px`;
    zoome(e);
}

function zoome(e){
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
    x = offsetX/pimg.offsetWidth*100;
    y = offsetY/pimg.offsetHeight*100;
    zoom.style.backgroundPosition = x + '% ' + y + '%';
  }