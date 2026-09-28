//Ejercicio 1
/*let nota = 11;
if (nota >= 0 && nota <= 3){
    console.log("muy deficiente");
}
else if (nota >= 5 && nota <= 6){
    console.log("Bien");
}
else if (nota >= 6 && nota < 9){
    console.log("Notable");
}
else if (nota >= 9 && nota <= 10){
    console.log("Sobresaliente");
}
else if (nota < 0 || nota > 10){
    console.log("Nota no valida");
}*/




//Ejercicio 2
/*let hora = 21;
let minutos = 45;
let segundos = 52;

if (hora >= 0 && hora <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59){
    console.log(hora, ":", minutos, ":", segundos);
}

segundos = segundos + 1;

if (segundos === 60){
    segundos = 0;
    minutos = minutos + 1;
}

if (minutos === 60){
    minutos = 0;
    hora = hora + 1;
}

if (hora === 24){
    hora = 0;
}

console.log(hora, ":", minutos, ":", segundos);*/




//Ejercicio 3
/*console.log("Vamos a jugar piedra, papel o tijera. Este juego es para dos jugadores. Cada jugador debe elegir una opción: piedra, papel o tijera. El ganador se sabe caundo los jugadores han elegido su opción. Piedra gana a tijera, tijera gana a papel y papel gana a piedra. Si ambos jugadores eligen la misma opción, es un empate.");
const opciones = ["Piedra", "Papel", "Tijera"];
const PA = "Piedra";
const PI = "Papel";
const T = "Tijera";

function obtenerJugadaMaquina() {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

// Llamamos a la función
let jugadaMaquina = obtenerJugadaMaquina();

// Obtener jugada del usuario
let jugadaUsuario = prompt("Elige tu jugada: Piedra, Papel o Tijera");

console.log("La máquina eligió: " + jugadaMaquina);
console.log("Tú elegiste: " + jugadaUsuario);

// Lógica del juego
if (jugadaUsuario === jugadaMaquina) {
    console.log("Empate");
} 
    else if (jugadaUsuario === PA && jugadaMaquina === T) {

        console.log("Ganaste");
} 
    else if (jugadaUsuario === PA && jugadaMaquina === PI) {

        console.log("Perdiste");
} 
    else if (jugadaUsuario === T && jugadaMaquina === PA) {

        console.log("Perdiste");
} 
    else if (jugadaUsuario === T && jugadaMaquina === PI) {

        console.log("Ganaste");
} 
    else if (jugadaUsuario === PI && jugadaMaquina === PA) {

        console.log("Ganaste");
} 
    else if (jugadaUsuario === PI && jugadaMaquina === T) {

        console.log("Perdiste");
}
    else {
        console.log("Opción no válida");
}*/






//Ejercicio 4
/*const numeros = [];

for( let i =0; i< 100; i++)
{
    numeros.push(Math.random().toFixed(2)); 
}
console.log(numeros);*/






//Ejercicio 5
const numeros = [];

for( let i =0; i< 100; i++)
{
    numeros.push(Math.random().toFixed(10)); 
}
console.log(numeros);

