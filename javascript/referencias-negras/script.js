window.addEventListener('DOMContentLoaded', function () {

    let botao = document.getElementById('botao');
    let resultado = document.getElementById('resultado');
    let imagens = ['<img src="./img/conceicao-evaristo.jpg">', '<img src="./img/dandara.jpg">', '<img src="./img/sueli-carneiro.png">'];
    let personalidades = ['Conceicao Evaristo (Escritora)', 
    'Dandara (Lutou contra o sistema escravocrata do século XVII)', 
    'Sueli Carneiro ( Filósofa, escritora e ativista antirracismo do movimento social negro brasileiro)'];



    botao.addEventListener('click', function () {

        resultado.innerHTML = imagens[0]

        setTimeout(function () {
            resultado.innerHTML = imagens[1]
        }, 3000)

        setTimeout(function () {
            resultado.innerHTML = imagens[2]
        }, 6000)

        setTimeout(function () {
            resultado.innerHTML = personalidades;
        }, 9000)


        setTimeout(function () {
            resultado.forEach(function (item) {
                return personalidades.innerHTML += `<li>${item}</li>`;
                })
            }, 11000)


        });

    });

    // botao.addEventListener('click', function () {


    //     autoras.innerText = "Conceição Evaristo"
    //     autoras.innerText = "Dandara"
    //     autoras.innerText = "Sueli Carneiro"


    //     }


