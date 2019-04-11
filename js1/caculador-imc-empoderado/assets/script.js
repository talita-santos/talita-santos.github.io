function calculoIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGIf = document.getElementById("lugarGIf")
    var gif;
    var resultado = (peso / (altura * altura));
    var text;
    var cssclass;


    if (resultado < 18) {
        text = "Uma deusa!🎵";
        gif = `<img src="https://media.giphy.com/media/n4WpP39mwWrmg/giphy.gif" alt="">`;
        cssclass = "linha1"
    }

    else if (resultado >= 18 && resultado < 25) {
        text = "Uma louca!🎵";
        gif = `<img src="https://media.giphy.com/media/3ohzdSVM9GUt3ICMQU/giphy.gif" alt="">`;
        cssclass = "linha2"
    }

    else if (resultado >= 25 && resultado < 30) {
        text = "Uma feiticeira!🎵";
        gif = `<img src="https://media.giphy.com/media/3ohzdSVM9GUt3ICMQU/giphy.gif" alt="">`;
        cssclass = "linha3"
    }

    else if (resultado >= 30 && resultado < 40) {
        text = "Ela é demais!🎵";
        gif = `<img src="https://media.giphy.com/media/U5ZlxkgtgEMpi/giphy.gif" alt="">`;
        cssclass = "linha4"
    }

    else {
        text = "Meu Deus, ela é demais🎵";
        gif = `<img src="https://media.giphy.com/media/OJh4c1MSqh0K4/giphy.gif" alt="">`;
        cssclass = "linha5"
    }


    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;

}