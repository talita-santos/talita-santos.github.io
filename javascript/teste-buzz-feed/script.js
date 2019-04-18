window.addEventListener('DOMContentLoaded', function () {

    let botao = document.getElementById("resultado");
    let marcacao = document.querySelectorAll(".marcar")
    let opcoesMarcadas = 0;

    botao.addEventListener('click', function () {


        for (let cont = 0; cont < marcacao.length; cont++) {

            if (marcacao[cont].checked == true) {

                opcoesMarcadas++;
            }

        }

        let textoResultado = document.getElementById('textoResultado')

        if (opcoesMarcadas >= 0 && opcoesMarcadas <= 4) {

            textoResultado.innerHTML = `Você marcou ${opcoesMarcadas} de 17 nessa lista. Esquisitice não é com você. Você é normal e isso não é errado, apenas seja você ;)`

        }

        else if (opcoesMarcadas >= 5 && opcoesMarcadas <= 9) {

            textoResultado.innerHTML = `Você marcou ${opcoesMarcadas} de 17 nessa lista. Até que você é bem esquisito! Mas dá pra explorar mais coisas ainda, hein? Parabéns!`


        }


        else if (opcoesMarcadas >= 10 && opcoesMarcadas <= 14) {

            textoResultado.innerHTML = `Você marcou ${opcoesMarcadas} de 17 nessa lista. .Caramba, você chegou mais próximo de esquisito, parabéns! O pessoal esquisito pode te convidar pra jantar tranquilo: você nunca vai fazer desfeita e será muito feliz com eles <3`

        }


        else  {

            textoResultado.innerHTML = `Você marcou ${opcoesMarcadas} de 17 nessa lista. ESQUISITO MASTER! uhuuul`

        }

    });
});