function desliga() {

    var meuBody = document.getElementById("fundo");

    if (meuBody.style.background == "white") {
        meuBody.style.background = "black";
        img.src = "https://media.giphy.com/media/Cw7zcoURGz4xa/giphy.gif";
    } else {
        meuBody.style.background = "white";
        img.src = "./assets/botao.png";
    }
}