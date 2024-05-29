let listaDeNumerosSOrteados =[];
let numeroLimite =10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;




function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto ');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10:');
    
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input ').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? ' tentativas ' : ' tentativa ';
        let mensagemTentativas ='Você descobriu o número secreto com ' + tentativas + palavraTentativas;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(chute > numeroSecreto){
                exibirTextoNaTela('p', 'O número secreto é menor')
            }else{
                exibirTextoNaTela('p','O número secreto é maior')
            }
            tentativas++;
            limparcampo();
        }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSOrteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSOrteados =[];
    }

    if(listaDeNumerosSOrteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSOrteados.push(numeroEscolhido);
        console.log(listaDeNumerosSOrteados);
        return numeroEscolhido;
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}