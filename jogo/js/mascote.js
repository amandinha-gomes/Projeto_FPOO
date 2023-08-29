let yMascote = 360;
let xMascote = 70;
let meusPontos = 0;

let colisao = false;

function verificaColisao() {
    
    for (let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xMascote, yMascote, 100);

    if (colisao) {
       yMascote = 360

        if (meusPontos > 0) {
            meusPontos -= 1;
        }
    }
}

print('Colisao acontecendo', colisao);
}
 
function incluirPontos() {
    
    text(meusPontos,20,25 )
    fill(color(255, 0, 0))
    textSize(21)

    if (yMascote < 0) {
        yMascote = 360
        meusPontos ++ 
    }
}

function movimentoMascote() {

    if (keyIsDown(UP_ARROW)) {
        
        yMascote -=5;
    }

    if (keyIsDown(DOWN_ARROW)){
        
        yMascote +=5;
    }

    if (keyIsDown(LEFT_ARROW)) {
        
        xMascote -=5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        
        xMascote +=5;
    }
}

function mostrarMascote() {

    image(imagemDoMascote, xMascote, yMascote, 60, 60);
    
}