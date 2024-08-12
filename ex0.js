/**
 * Ejercicio: Usa el contructor new Date adecuadamente para crear un objeto de tipo Date que se inicialice con tu fecha de nacimiento https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
 */
const fechaNacimiento = new Date('1992-07-09'); // <--- SOLAMENTE DEBES MODIFICAR ESTA LÍNEA

// NO MODIFICAR A PARTIR DE AQUÍ
const fechaActual = new Date();

// Obtienes la edad sin saber aún si este año ya has cumplido años o no
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
// Obtienes la diferencia de meses entre la fecha actual y la fecha de nacimiento
const m = fechaActual.getMonth() - fechaNacimiento.getMonth();
// CONDICIONES:
// Si el mes actual, es inferior a 0: aún no ha sido mi cumpleaños
// Si el mes actual es igual a 0, y el día actual inferior al día de nacimiento: aún no ha sido mi cumpleaños
// Por tanto en ambos casos, a la edad se le restaría 1
if (m < 0 || (m === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
    edad--;
}

console.log(`Tu edad es: ${edad} años.`);