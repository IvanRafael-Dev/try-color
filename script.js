/*
var pessoaEstudante = ''; // da algumas liberdades que nao precisa
let pessoaInstrutora = ''; // preferir o let
const PI = 3.1415; // constante, imutável
*/
const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const textResposta = document.getElementById('answer');
const botaoReiniciar = document.getElementById('reset-game');
const reiniciar = document.getElementById('reset-game');
const corp = document.getElementById('corpo');
const cores = [];

function numeroAleatorio(mul){
    const numero = Math.floor(Math.random() * mul);
    return numero;
}

function corAleatoria(){
    const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;
    return rgb;
}

console.log(corAleatoria());

function cliqueNaBola(event){
    const corSelecionada = event.target.style.backgroundColor;
    if(corSelecionada === textoCor.textContent){
        textResposta.textContent = 'Acertou'
    }else{
        textResposta.textContent = 'Tente Novamente'
    }
}

for (let bola = 0; bola < bolas.length; bola+=1) {
    const cor = corAleatoria();
    bolas[bola].style.backgroundColor = cor;   
    cores[bola] = cor;    
    reiniciar.style.backgroundColor = corAleatoria();
    bolas[bola].addEventListener('click', cliqueNaBola);
    
}

function adicionaCorAleatoria(){
    textoCor.textContent = cores[numeroAleatorio(6)];
}

adicionaCorAleatoria();

function reiniciaJogo(){
    window.location.reload();
}

botaoReiniciar.addEventListener('click', reiniciaJogo);