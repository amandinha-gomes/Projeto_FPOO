
//na função setup definimos as configurações de largura e altura
function setup() {
    createCanvas(700, 400)
}

//na função de desenho definimos o que será exibido
function draw() {

    background(imagemDaEstrada);
    //o image permite manipular o objeto no eixo X e Y como tambem W e H
    incluirPontos();
    mostrarMascote();
    mostrarCarros();
    movimentoCarros();
    movimentoMascote();
    verificaColisao();
}

