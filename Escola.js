const morse = document.querySelector(".morse");
const sec = document.querySelector("#sec");

morse.addEventListener("click", () => {
    location.href = "https://static.vecteezy.com/system/resources/previews/017/615/834/non_2x/international-morse-code-illustration-vector.jpg";
})

sec.addEventListener("click", () => {
    morse.style.display = "block";
    window.addEventListener("keydown", tecla);
    sec.style.display = "none";
})

let txt = "";

function tecla(e) {
    const letra = e.key;
    switch (letra) {
        case "d":
            txt += "d";
        break;
        case "a":
            txt += "a";
        break;
        case "v":
            txt += "v";
        break;
        case "i":
            txt += "i";
        break;
        default:
            txt = "";
    }
    if (txt == "david") {
        txt = ""
        location.href = "memorias.html";
    }
}