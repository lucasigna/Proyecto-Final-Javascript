// Funcionalidad buscador de constantes

$(document).ready(function() {

    // Declaro el div contenedor de las constantes
    let divContainerConstantes = $("#contenedorConstantesEncontradas");

    // Declaro el input de búsqueda
    let inputBusqueda = $("#inputBusqueda");
    // Asigno el evento
    inputBusqueda.on( "input", buscarConstante );

    // Relleno el contenedor con constantes para que no parezca vacío
    agregarCincoConstantes();

    function crearDivConstante(nombre,valor) {

        divContainerConstantes.append(`
            <div class="divConstante">
                <p>${nombre}</p>
                <p>${valor}</p>
            </div>
            <hr>
        `);
        
    }

    function buscarConstante() {

        // Elimino todos sus nodos hijos
        divContainerConstantes.empty();

        // Recibo la búsqueda
        let query = inputBusqueda.val();

        // La pongo todo en mayúsculas para evitar errores en la búsqueda
        query = query.toUpperCase();

        if (query == '') {
            agregarCincoConstantes();
            return;
        }

        for (const constante of constantes) {
            if (constante.nombre.toUpperCase().includes(query)) {
                crearDivConstante(constante.nombre, constante.valor);
            }
        }
    }

    function agregarCincoConstantes() {
        for (const i in constantes) {
            if (i <= 5) {
                crearDivConstante(constantes[i].nombre, constantes[i].valor);   
            }
        }
    }

});