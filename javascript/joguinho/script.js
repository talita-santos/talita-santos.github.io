window.addEventListener('DOMContentLoaded', function (event) {

    let clicar = document.getElementById('button')
    let usuario = document.getElementById('user')
    let resultado = document.getElementById('mensagem')

    let opcoes = ['pedra', 'papel', 'tesoura', 'largato', 'spock']

    clicar.addEventListener('click', function () {

        let computador = opcoes[Math.floor(Math.random() * opcoes.length)]

        switch (usuario.value) {
            case "pedra":

                if (computador == usuario.value) {
                    resultado.innerHTML = `Empate!😏 Jogue novamente`;
                    break;
                }

                else if (computador == "papel") {

                    resultado.innerHTML = `Você ganhou!😃 (pedra esmaga papel)`;

                }

                else if (computador == "tesoura") {

                    resultado.innerHTML = `Você perdeu!😭 (pedra esmaga tesoura)`;


                }

                else if (computador == "largato") {

                    resultado.innerHTML = `Você perdeu!😃 (pedra esmaga largato)`;
                }

                else if (computador == "spock") {


                    resultado.innerHTML = `Você ganhou!😃 (pedra esmaga largato)`;

                }

            case "papel":

                if (computador == usuario.value) {
                    resultado.innerHTML = `Empate!😏 Jogue novamente`;
                    break;
                }

                else if (computador == "pedra") {

                    resultado.innerHTML = `Você ganhou!😃 (papel cobre pedra)`;

                }

                else if (computador == "tesoura") {

                    resultado.innerHTML = `Você perdeu!😭 (tesoura corta papel)`;


                }

                else if (computador == "largato") {

                    resultado.innerHTML = `Você perdeu!😭 (largato come papel)`;
                }

                else if (computador == "spock") {


                    resultado.innerHTML = `Você ganhou (pedra esmaga largato)`;


                }
                break;



            case "tesoura":
                // se a condição anterior não for verdadeira, o código aqui dentro será executado
                break;

            case "largato":
                // se a condição anterior não for verdadeira, o código aqui dentro será executado
                break;

            case "spock":
                // se a condição anterior não for verdadeira, o código aqui dentro será executado
                break;

            default:
                alert('Ops, texto inválido');
        }
    })




})