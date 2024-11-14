var peso;
var altura;
var imc;
var resultado;


//recebendo o event
function calular(event) {
    //refresh dos inputs

    event.preventDeFault();
    //alert('teste');

    //recebendo os dados digitados pelo usuario
    peso= document.getElementById('peso').value;
    altura= document.getElementById('altura').value;

    //calculo do IMC 
    imc = peso/(altura*altura);

    //testando a recepção dos valores de peso e altura
    //e testando o calculo do imc

    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    if(imc<17){
        resultado.innerHTML = '</br> Seu resultado foi: '+imc.toFixed+ '</br> Cuidado está muito abaixo do peso'
    }
}
