function resposta() {
    let numero = parseInt(document.getElementById("numero").value);

    if (numero -1) {
        antecessor = numero - 1;
        document.getElementById("antecessor").innerHTML = "O antecessor desse número é:" + antecessor;
    } if (numero *2) {
        dobro = numero * 2;
        document.getElementById("dobro").innerHTML = "O dobro desse número é:" + dobro;
    } if (numero >0) {
        positivoNegativo = numero > 0;
        document.getElementById("positivoNegativo").innerHTML = "O número digitado é positivo" + positivoNegativo;
    } else if(numero <0){
        positivoNegativo = numero < 0;
        document.getElementById("positivoNegativo").innerHTML = "O número digitado é negativo" + positivoNegativo;
    } else if(numero == 0){
        nulo = numero == 0;
        document.getElementById("nulo").innerHTML = "O número digitado é nulo" + nulo;
    }
}