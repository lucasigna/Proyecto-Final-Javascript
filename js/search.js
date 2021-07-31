// Funcionalidad buscador de constantes

// Declaro el div contenedor de las constantes
let divContainerConstantes = document.getElementById("contenedorConstantesEncontradas");

// Declaro el input de búsqueda
let inputBusqueda = document.getElementById("inputBusqueda");
// Asigno el evento
inputBusqueda.addEventListener("input", buscarConstante);

// Relleno el contenedor con constantes para que no parezca vacío
agregarCincoConstantes();

function crearDivConstante(nombre,valor) {

    let div = document.createElement("div");
    div.classList.add("divConstante");
    let parrafoNombreConstante = document.createElement("p");
    parrafoNombreConstante.innerHTML = nombre;
    let parrafoValorConstante = document.createElement("p");
    parrafoValorConstante.innerHTML = valor;
    let hr = document.createElement("hr");
    div.appendChild(parrafoNombreConstante);
    div.appendChild(parrafoValorConstante);
    divContainerConstantes.appendChild(div);
    divContainerConstantes.appendChild(hr);

}

function buscarConstante() {

    // Elimino todos sus nodos hijos
    while (divContainerConstantes.firstChild) {
        divContainerConstantes.removeChild(divContainerConstantes.firstChild);
    }

    // Recibo la búsqueda
    let query = inputBusqueda.value;

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