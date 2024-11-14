var area = document.getElementById('area');

function entrar() {
    //alert("Clicou");
    var nome = prompt('Digite seu nome');
    //console.log(nome);
    area.innerHTML = 'Bem Vindo ' + nome;

    //criando um botão do HTML  a partir do JS
let botaoSair = document.createElement('button')
botaoSair.innerHTML = "Sair da conta";
botaoSair.onclick = sair;

area.appendChild(botaoSair);

}

function Sair(){
    alert('Até mais');
    area.innerHTML = 'Você saiu';
}