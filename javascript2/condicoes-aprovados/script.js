


function media() {

    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let resultado = (nota1 + nota2) / 2;

    if (resultado == 10) {
        alert("aprovado com êxito");

    } else if (resultado >= 7) {
        alert("aprovado");
    }

    else {

        alert("reprovado");
    }
    

}




