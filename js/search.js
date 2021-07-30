// Funcionalidad buscador de constantes

class Constante {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

function elevarString(exp) {
    return (exp.sup());
}

const constantes = [];

const c1 = new Constante('Unidad de masa atómica', '1.66053873 x 10'+elevarString('-27')+' kg');
constantes.push(c1);
const c2 = new Constante('Número de Avogadro', '6.02214199 x 10'+elevarString('23')+' mol'+elevarString('-1'));
constantes.push(c2);
const c3 = new Constante('Radio de Bohr','0.5291772083 x 10'+elevarString('-10')+' m');
constantes.push(c3);
const c4 = new Constante('Permitividad del vacío','8.854187817 x 10'+elevarString('-12')+' F m'+elevarString('-1'));
constantes.push(c4);
const c5 = new Constante('Masa del Electrón','9.10938188 x 10'+elevarString('-31')+' kg');
constantes.push(c5);
const c6 = new Constante('Electron-Volt','1.602176462 x 10'+elevarString('-19')+' J');
constantes.push(c6);
const c7 = new Constante('Constante de Faraday','9.64853415 x 10'+elevarString('4')+' C mol'+elevarString('-1'));
constantes.push(c7);
const c8 = new Constante('Constante Molar de los Gases','8.314472 J K'+elevarString('-1')+' mol'+elevarString('-1'));
constantes.push(c8);
const c9 = new Constante('Masa del Neutrón','1.67492716 x 10'+elevarString('-27')+' kg');
constantes.push(c9);
const c10 = new Constante('Longitud de Planck','1.6160 x 10'+elevarString('-35')+' m');
constantes.push(c10);
const c11 = new Constante('Masa del Protón','1.67262158 x 10'+elevarString('-27')+' kg');
constantes.push(c11);
const c12 = new Constante('Velocidad de la Luz en el Vacío','2.99792458 x 10'+elevarString('8')+' m s'+elevarString('-1'));
constantes.push(c12);

// Declaro el div contenedor de las constantes
let divContainerConstantes = document.getElementById("contenedorConstantesEncontradas");

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
    let query = document.getElementById("inputBusqueda").value;

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