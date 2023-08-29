let xCarros = [700,700,700,700,700,700]
let yCarros = [33, 100, 150, 200, 250, 300]
let velocidadeCarros = [2,3.2,2.6,3.3,4.2,5]
let larguraCarros=50;
let alturaCarros=50;

function movimentoCarros() {

    for (let i = 0; i < imagensCarros.length; i++) {

        xCarros[i] -= velocidadeCarros[i];
    }
}

function mostrarCarros() {

    for (let i = 0; i < imagensCarros.length; i++) {

        image(imagensCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros)

        if (xCarros[i] < -50) {
            xCarros[i] = 700
        }
    }
}