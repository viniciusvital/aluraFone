const botoes = document.getElementsByClassName('botaoNum');

let resultado = document.getElementById('resultado');

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", apertarBotao);
}

function apertarBotao(event) {
    
    document.getElementById("resultado").value += (event.target.defaultValue);
}