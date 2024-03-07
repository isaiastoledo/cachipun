let jugador;
let pc;
let victorias = 0;
let empates = 0;
let derrotas = 0;

function aleatoria(){
    return Math.floor(Math.random()*3) + 1;
}

const veces = parseInt(prompt('¿Cuántas veces deseas jugar?'));

for (let i = 0; i < veces; i++) {
    jugador = parseInt(prompt('Elija: 1 - PIEDRA, 2 - PAPEL, 3 - TIJERA'));
    pc = aleatoria();
    alert('TU ELEGISTE: '+ eleccion(jugador));
    alert('PC ELIGIO: '+ eleccion(pc));

    if(jugador == pc){
        alert('HUBO UN EMPATE');
        empates++;
    }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        alert('FELICIDADES GANASTE');
        victorias++;
    }else{
        alert('LAMENTABLEMENTE PERDISTE');
        derrotas++;
    }
}

alert(`RESULTADO FINAL:
Victorias: ${victorias}
Empates: ${empates}
Derrotas: ${derrotas}`);

function eleccion(jugada){
    let resultado = '';
    if (jugada == 1){
        resultado = 'PIEDRA 🪨';
    }else if (jugada == 2){
        resultado = 'PAPEL 🧻';
    }else if (jugada == 3){
        resultado = 'TIJERA ✂️';
    }else{
        resultado = 'TU ELECCIÓN ES INCORRECTA';
    }
    return resultado;
}