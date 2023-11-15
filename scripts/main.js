// lista de cartas

let cartas = ["Lagarto con espada", "Dragon Alado de Ra", "El Discipulo de Ra"]

// cambiar por una lista de objetos

// Objetos de las cartas


function carta(nombre,ataque, defensa, atributo){

    this.nombre = nombre
    this.ataque = ataque
    this.defensa = defensa
    this.atributo = atributo




}

// agregando metodo a mi objeto carta

carta.prototype.exito = function(){

    console.log("La carta "+this.nombre+" se ha creado con exito")

}


// funcion para agregar una carta

function agregar_carta(){

    // pedir los datos de la carta para crear el objeto

    let nombre = prompt("ingresa el nombre de la carta:")
    let ataque = prompt("ingresa el ataque de la carta:")
    let defensa = prompt("ingresa la defensa de la carta")
    let atributo = prompt("ingresa el atributo de la carta")


    // Lista con los datos de la carta

    let carta_datos = [nombre, ataque, defensa, atributo]
    
    return carta_datos




}






// funcion para mostrar el menu

function menu(){

    opcion = prompt("1- Agregar una carta | 2- Restar una carta | 3- Mostrar todas las cartas | 4- Buscar una carta")

    if (opcion == "1") {
        
        // ejecutar funcion para agregar
        let datos_carta = agregar_carta()


        // verificando en la consola si se guardan los datos de la carta
        
        for (var x = 0; x < datos_carta.length; x++ ){

            console.log(datos_carta[x])

        }

        // creando nueva carta

        let nueva_carta = new carta (datos_carta[0], datos_carta[1], datos_carta[2], datos_carta[3])

        // avisando que la carta se creo correctamente

        nueva_carta.exito()



        // agregando la carta a la lista
        cartas.push(datos_carta[0])

        

        // mostrando la lista de cartas

        for (var x = 0; x < cartas.length; x++){

            console.log(cartas[x])

        }
 
    }





    

}
// funcion para ingresar el nombre

function ingresar_nombre(){


    let nombre = prompt("Ingresa tu nombre por favor")

    alert("Hola ${nombre}, bienvendio al sistema de control de stock de la tienda de cartas de Yu-gi-oh!")
    alert("Ahora te daremos algunas operaciones que puedes realizar para el control")
    


}




ingresar_nombre()
menu()


