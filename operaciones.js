const fs = require('fs');
const registrar = (nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedadAnimal) => {
    try {
        let objecto = {
            nombre: nombreAnimal,
            edad: edadAnimal,
            tipo: tipoAnimal,
            color: colorAnimal,
            enfermedad: enfermedadAnimal
        }
        let file = JSON.parse(fs.readFileSync('citas.json'))
        file.push(objecto)
        fs.writeFileSync('citas.json', JSON.stringify(file, null, ' '))
        console.log('registro exitoso')
    } catch (err) {
        return err;
    }
}
const leer = () => {
    const content = fs.readFileSync('citas.json', 'utf-8')
    const leerCitas = JSON.parse(content)
    if (leerCitas === 0) {
        console.log('no se a registrado ninguna cita')
    } else {
        leerCitas.map((cita) => {
            for (let i = 0; i < Object.keys(leerCitas[0]).length; i++) {
                console.log(Object.keys(cita)[i] + ': ', Object.values(cita)[i])
            }
        })
        console.log(`Total de citas: ${leerCitas.length}`)
    }
}
module.exports = {
    registrar,
    leer
}