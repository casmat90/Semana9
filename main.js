//ejercicio1
function suma (a, b){
    return a+b
}

console.log(suma (2, 5))


//ejercicio2
function promedio (a, b, c, d){
    return (a+b+c+d)/4
}

console.log(promedio (10, 16, 13, 15))

//ejercicio3
function area_rectangulo (a, b){
    return a*b
}

console.log(area_rectangulo (10, 16))


//ejercicio4
function area_triangulo (b, h){
    return (b*h)/2
}

console.log(area_triangulo (5, 9))

//ejercicio5
function area_circulo (r){
    return r*r*3.1416
}

//ejercicio6
function salario (horas, precio){
    return horas*precio
}

console.log(salario (48, 9))

//ejercicio7
function conv_pulgadas (m){
    return m/0.0254
}

console.log(conv_pulgadas (48))

//ejercicio8
function conv_soles(soles, tipoCambio) {
    return soles/tipoCambio
}

function main() {
    let pen = prompt('Ingese la cantidad de soles');
    let inputConv = prompt('Ingrese tipo de cambio');
    console.log(conv_soles(pen, inputConv))
}

main();

//ejercicio9
function edadPostulante(nac) {
    var today = new Date();
    var year = today.getFullYear();
    return year - nac
}
function main() {
    let edad = prompt('Ingese año de nacimiento');
    console.log(edadPostulante(edad))
}

main();

//ejercicio10
function menor(nom1, nom2, nom3, a, b, c) {
    if (a < b && a < c)
        return nom1
    if (b < a && b < c)
        return nom2
    if (c < a && c < b)
        return nom3
}

function main() {
    let personas = [
        {
            nombre: prompt('Ingrese nombre 1'),
            edad: prompt('Ingrese edad 1')
        },
        {
            nombre: prompt('Ingrese nombre 2'),
            edad: prompt('Ingrese edad 2')
        },
        {
            nombre: prompt('Ingrese nombre 3'),
            edad: prompt('Ingrese edad 3')
        }
    ]

    console.log(menor(personas[0].nombre, personas[1].nombre, personas[2].nombre, personas[0].edad, personas[1].edad, personas[2].edad))
}

main();

//ejercicio11


