const { registrar, leer } = require('./operaciones.js');

const argumentos = process.argv.slice(2);

const nombreAnimal = argumentos[1];
const edadAnimal = argumentos[2];
const tipoAnimal = argumentos[3];
const colorAnimal = argumentos[4];
const enfermedadAnimal = argumentos[5];

if (argumentos[0] !== 'registrar' && argumentos[0] !== 'leer') {
    console.log("ingresar registrar y leer.")
    return
}
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {
    if (nombreAnimal === undefined) {
        console.log('ingresar el nombre de animal.')
    } else {
        registrar(nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal);
        console.log('Cita ingresada.')
    }
}
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {
    if (isNaN(edadAnimal)) {
        console.log('ingresar edad del animal.')
    } else {
        registrar(nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal);
        console.log('Cita ingresada.')
    }
}
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {
    if (tipoAnimal === undefined) {
        console.log('ingresar el tipo de animal.')
    } else {
        registrar(nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal);
        console.log('Cita ingresada.')
    }
}
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {
    if (colorAnimal === undefined) {
        console.log('ingresar el color de animal.')
    } else {
        registrar(nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal);
        console.log('Cita ingresada.')
    }
}
else if (argumentos[0] === 'registrar' && argumentos.length === 6) {
    if (enfermedadAnimal === undefined) {
        console.log('ingresar el enfermedad de animal.')
    } else {
        registrar(nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal);
        console.log('Cita ingresada.')
    }
}
else if (argumentos[0].toLocaleLowerCase() === "registrar") {
    registrar(nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal);
    console.log('Cita ingresada.')
}
else if (argumentos[0].toLocaleLowerCase() === "leer") {
    leer();
}
else {
    console.log('error, intente nuevamente.')
}