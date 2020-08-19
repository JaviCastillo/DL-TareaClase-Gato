/*==================== PRUEBA ====================*/

var jugadores = [
    ['X','#233933'],
    ['O','#B7FAE8']
];

var grilla = [
    new Array(3), 
    new Array(3), 
    new Array(3)
];

var i = 0;
var casillas = document.getElementsByClassName('celda');

function gato(e) {

    let celda = e.target;

    if(celda.textContent == ""){
        console.log(i);
        celda.style.color = jugadores[i%2][1];
        celda.style.animation = "0.5s fadeIn";
        celda.style.animationFillMode = "forwards";
        celda.innerHTML = jugadores[i%2][0];
        grilla[celda.id[1]][celda.id[2]] = jugadores[i%2][0];
        console.log(grilla);
        ganador(jugadores[i%2][0], i);
        i++;
    }
}

function ganador(letra, turno){
    let winner = false;

    for (let j = 0; j < grilla.length; j++) {
        if(grilla[j][0]==grilla[j][1] && grilla[j][1]==grilla[j][2] && grilla[j][0]!=null){
            winner = true;
        }
        if(grilla[0][j]==grilla[1][j] && grilla[1][j]==grilla[2][j] && grilla[0][j]!=null){
            winner = true;
        }
    }

    if(grilla[0][0]==grilla[1][1] && grilla[1][1]==grilla[2][2] && grilla[0][0]!=null){
        winner = true;
    }

    if(grilla[2][0]==grilla[1][1] && grilla[1][1]==grilla[0][2] && grilla[2][0]!=null){
        winner = true;
    }

    if (winner) {
        document.getElementById('resultado').style.animation = "1.5s fadeIn";
        document.getElementById('resultado').style.animationFillMode = "forwards";
        document.getElementById('resultado').innerHTML = letra + ' es el Ganador !!';
        blockGato();
    }
    if (!winner && turno == 8) {
        document.getElementById('resultado').style.animation = "1.5s fadeIn";
        document.getElementById('resultado').style.animationFillMode = "forwards";
        document.getElementById('resultado').innerHTML = ' EMPATE !!';
        blockGato();
    }
}

function cargarDocumento() {
    for (let i = 0; casillas.length > i; i++) {
        casillas[i].addEventListener('click', gato); 
    }
}

function blockGato(){
    for (let i = 0; casillas.length > i; i++) {
        casillas[i].removeEventListener('click', gato);  
    }
}

window.addEventListener('load', cargarDocumento);