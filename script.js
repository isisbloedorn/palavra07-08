const botaoMostraPalavras = Document.querySelector('#botao-palavraschave');

botaoMostraPalavras.addEventListner('click', mostraPalavraChave);

function mostraPalavraChave(){
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoReultado =document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);
 

    campoReultado.textContent= palavrasChave.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}