//1. Convertir la siguiente función nombrada en una función flecha:

const mensaje = "Hola"

function imprimirMensaje(mensaje) {
    console.log(mensaje)
}

const imprimirMensajeFlecha = mensaje => console.log(mensaje)
imprimirMensajeFlecha(mensaje)

//2. Convertir la siguiente función nombrada en una función flecha:

function crearMultiplicacion(numero1, numero2) {
    let resultado = numero1 * numero2
    return resultado
}

const crearMultiplicacionFlecha = (num1, num2) => num1 * num2
console.log(crearMultiplicacionFlecha(6, 3))

//3. Partiendo de un array const array=[1,2,3,4,5,6,7,8,9], aplicarle un map a ese array y pasarle como argumento la función nombrada mostrada en el ejemplo del punto 2. Mostrar por consola el nuevo array obtenido.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArray = array.map((num1, num2) => crearMultiplicacionFlecha(num1, num2))
console.log(newArray)

//4. Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas.

console.log(beers)

function topAlcohol(array) {
    return array.toSorted((a, b) => b.abv - a.abv).slice(0, 10)
}

console.log("mas alcohol:")
console.log(topAlcohol(beers))

//5. Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas.

function menosAmargas(array) {
    return array.toSorted((a, b) => a.ibu - b.ibu).slice(0, 10)
}

// function topAmargo(array) {
//     return array.filter((beer) => beer.ibu < 42)
// }
console.log("menos amargas:")

console.log(menosAmargas(beers))
//6. Generar una función que reciba como parámetro un array de cervezas y un nombre de una cerveza. La función deberá devolver el objeto completo que coincida con el nombre ingresado.

function buscarPorNombre(array, nombre) {
    return array.find((beer) => beer.name == nombre)
}

console.log(buscarPorNombre(beers, "Bad Pixie"))

//7. Generar una función que reciba como parámetro un array de cervezas, un valor y que devuelva el primer objeto que su propiedad ibu sea igual al valor ingresado, en caso de que no exista ninguna cerveza con ese ibu que muestre por consola un mensaje que diga "No existe ninguna cerveza con un ibu de (Valor Ingresado)".

function buscarPorAmargor(array, ibu) {
    const cerveza = array.find((beer) => beer.ibu == ibu)
    if (cerveza != undefined) {
        return cerveza
    }
    console.log(`No existe ningna cerveza con un ibu de ${ibu}`)
    return undefined

    // return cerveza!=undefined?cerveza:`No existe ningna cerveza con un ibu de ${ibu}`
}

for (const beer of beers) {
    console.log(beer.ibu)
}

console.log(buscarPorAmargor(beers, 45))

//8. Generar una función que reciba como parámetro un nombre de una cerveza y devuelva la posición en el array de esa cerveza. En caso de no encontrar dicha cerveza se debe imprimir por consola un mensaje diciendo "(Nombre de la cerveza ingresada no existe)".

function buscarPosicionPorNombre(array, nombre) {
    const cerveza = buscarPorNombre(array, nombre)
    return (cerveza != undefined) ? array.indexOf(cerveza) : console.log(`${nombre} no existe`)
}

console.log(buscarPosicionPorNombre(beers, "Electric India"))

//9. Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)

function filtrarPorAlcohol(array, alcohol) {
    const filtro = array.filter(beer => beer.abv <= alcohol)
    return filtro.map(beer => beer = { name: beer.name, abv: beer.abv, ibu: beer.ibu })
}
console.log(filtrarPorAlcohol(beers, 5))

//10. Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false.

function ordenarPor(array, propiedad, ascendente) {
    return ascendente ? array.map(beer => beer = { [propiedad]: beer[propiedad] }).toSorted((beer1, beer2) => beer1[propiedad] - beer2[propiedad]) : array.map(beer => beer = { [propiedad]: beer[propiedad] }).toSorted((beer1, beer2) => beer1[propiedad] - beer2[propiedad]).reverse()
}

console.log(ordenarPor(beers, "abv", false))

//11. Generar una función que reciba como parámetro un array de cervezas y un id de un elemento HTML donde se imprimirá la tabla. La función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden de cada una de las cervezas.
