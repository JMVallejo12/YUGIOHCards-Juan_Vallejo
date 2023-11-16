

// lista de cartas


let lista_cartas_bd = [

    {nombre: 'Lagarto con espada', ataque: '1200', defensa: '900', atributo: 'tierra'},
    {nombre: 'Dragon Alado de Ra', ataque: '???', defensa: '???', atributo: 'bestia divina'},
    {nombre: 'El Discipulo de Ra', ataque: '1100', defensa: '500', atributo: 'luz'},


]


// funcion para filtrar una busqueda

function buscar_carta(nombre_carta){

    // se pasan todos los caracteres a lower para ue no haya problemas en la busqueda
    const carta_resultado = lista_cartas_bd.filter(carta => carta.nombre.toLocaleLowerCase() === nombre_carta.toLocaleLowerCase())

    // como nos devuelve un array se verifica el largo del array

    if (carta_resultado.length > 0){
        // si el resultado de la busqueda devuelve mas de un elemento quiere decir que se encontro al menos un resultado

        console.log("El resultado de la busqueda es: ", carta_resultado)



    }else{

        console.log("No hay ningun resultado que coincida con tu busqueda")


    }


}


// funcion para borrar los objetos por nombre

function borrar_carta(nombre){

    // encontrando la crta con findindex
    let index = lista_cartas_bd.findIndex(function(carta){

        // se usa lowercase por si el usuario no escribe el nombre de la carta apropiadamente
        return carta.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase()


    })

    // verificar si se encuentra y eliminarlo
    if (index !== -1){

        lista_cartas_bd.splice(index,1)
        console.log("La carta "+nombre+" ha sido eliminada")
        
        
    }else{

        console.log("La carta que buscas no ha sido encontrada")

    }

}



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


    switch (opcion){

        // programando la primer opcion

        case "1":
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
        lista_cartas_bd.push(nueva_carta)

        

        // mostrando la lista de cartas

        for (var x = 0; x < lista_cartas_bd.length; x++){

            console.log(lista_cartas_bd[x])

            

        }

        break;

        // segunda opcion en el menu para eliminar una carta

        case "2": 

            // recibiendo por input el nombre de la carta a eliminar
            let nombre_eliminar = prompt("Escribe el nombre de la carta que quieres borrar:")

            // llamando a la funcion para borrar la carta
            borrar_carta(nombre_eliminar)


            // imprimiendo la lista de cartas nuevamente en la consola

            for (var x = 0; x < lista_cartas_bd.length; x++){

                console.log(lista_cartas_bd[x])

                

            }


            break;

            // opcion para visualizar la lista de las cartas

            case "3":
                
            
            console.log("Lista de cartas en el sistema:")


            for (var x = 0; x < lista_cartas_bd.length; x++){

                
                console.log(lista_cartas_bd[x])

                

            }   

                break;


            // Haciendo la opcion para buscar una carta especifica 
            case "4":

                // pidiendo por prompt el nombre de la carta que se desea buscar

                let nombre_buscar = prompt("Ingrese el nombre de la carta que desea buscar:")

                // ejecutando la funcion de buscar la carta con el nombre solcitado al usuario

                buscar_carta(nombre_buscar)



                break;


            default:
                console.log("La opcion elegida no es correcta")




    }

    




    

}
// funcion para ingresar el nombre

function ingresar_nombre(){


    let nombre = prompt("Ingresa tu nombre por favor")

    console.log("Hola " + nombre+", bienvendio al sistema de control de stock de la tienda de cartas de Yu-gi-oh!")
    console.log("Ahora te daremos algunas operaciones que puedes realizar para el control")
    


}




ingresar_nombre()

// haciendo un bucle para usar el sistema hasta que me muera
// while (1 !== 0){

//     menu()
// }


menu()