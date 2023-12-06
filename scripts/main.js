// agregando todas las id del documento

// la parte de agregar
const nombreagregar = document.getElementById("nombre-agregar")
const ataqueagregar = document.getElementById("ataque-agregar")
const defensaagregar = document.getElementById("defensa-agregar")
const atributoagregar = document.getElementById("atributo-agregar")
const btnagergar = document.getElementById("btn-agregar")
const resultadoagregar = document.getElementById("resultado-agregar")


// elementos de buscar
const nombrebuscar = document.getElementById("nombre-buscar")
const btnbuscar = document.getElementById("btn-buscar")
const resultadobusqueda = document.getElementById("resultado-busqueda")


// elementos de eliminar
const btneliminar = document.getElementById("btn-eliminar")
const nombreeliminar = document.getElementById("nombre-eliminar")
const resultadoeliminar = document.getElementById("resultado-eliminar")

// haciendo los eventos
btnagergar.addEventListener('click', agregar_carta)
btnbuscar.addEventListener('click', function(){

    buscar_carta(nombrebuscar.value)


})

btneliminar.addEventListener('click', function(){

    borrar_carta(nombreeliminar.value)
})


function agregar_carta(){

    // creando el objeto de nuestra carta

    const nueva_carta = {

        nombre: nombreagregar.value,
        ataque: ataqueagregar.value,
        defensa: defensaagregar.value,
        atributo: atributoagregar.value

    }




    // guardando la carta en local storage
    let carta_str = JSON.stringify(nueva_carta)
    localStorage.setItem(nueva_carta.nombre, carta_str) 
 


    // imprimiendo la carta creada para el usuario
    resultadoagregar.innerHTML = `
                <h2>Se ha creado a:</h2>

            <ul>
                <li>Nombre: ${nueva_carta.nombre}</li>
                <li>Ataque: ${nueva_carta.ataque}</li>
                <li>Defensa: ${nueva_carta.defensa}</li>
                <li>Atributo: ${nueva_carta.atributo}</li>
            </ul>
    
    `


}






// funcion para filtrar una busqueda

function buscar_carta(nombre_carta){

    // se busca la carta en el local storage

    resultado = localStorage.getItem(nombre_carta)


    

    if (resultado){


        resultado_objeto = JSON.parse(resultado)
    

        resultadobusqueda.innerHTML = `
                        <ul>
                            <li>Nombre: ${resultado_objeto.nombre}</li>
                            <li>Ataque: ${resultado_objeto.ataque}</li>
                            <li>Defensa: ${resultado_objeto.defensa}</li>
                            <li>Atributo: ${resultado_objeto.atributo}</li>
                        </ul>
                `


    }else{

        resultadobusqueda.innerHTML = `
                No se encontro ningun resultado
        
        `

    }

    



}


// funcion para borrar los objetos por nombre

function borrar_carta(nombre){


    const traerdatos = localStorage.getItem(nombre)

    if (traerdatos) {

        

        const datos_obj = JSON.parse(traerdatos)

        resultadoeliminar.innerHTML = ` 

                        <h3>Se ha eliminado a:</h3>

                        <ul>
                            <li>Nombre: ${datos_obj.nombre}</li>
                            <li>Ataque: ${datos_obj.ataque}</li>
                            <li>Defensa: ${datos_obj.defensa}</li>
                            <li>Atributo: ${datos_obj.atributo}</li>
                        </ul>
    
    `



    


    // removiendo el item del local storage

    const eliminar = localStorage.removeItem(nombre)


    }else{


        resultadoeliminar.innerHTML = `
            <p>No se encontro ningun resultado</p>
        
        `

    }

    






}













