// Funcionalidad conversor de unidades

//! Clases

// Declaro una clase Conversion para guardar las conversiones en objetos
class Conversion {
    constructor(valorInput, unidadInput, valorOutput, unidadOutput){
        this.valorInput = valorInput;
        this.unidadInput = unidadInput;
        this.valorOutput = valorOutput;
        this.unidadOutput = unidadOutput;
    }
}

//! Variables

// Declaro arrays con los valores de unidad para lo que va a ver el usuario y para los value de los option
const unidadesLongitud = ['Km','Metros','cm','mm','µm','nm','Millas','Pulgadas'];
const unidadesLongitudValuesOption = ['km','mts','cm','mm','microm','nm','mile','inch'];
const unidadesMasa = ['Kg','Gramos','mg','Tn','Libras','Onzas'];
const unidadesMasaValuesOption = ['kg','g','mg','tn','libra','onza'];
const unidadesPresion = ['Pascal','Bar','Atmósferas'];
const unidadesPresionValuesOption = ['pascal','bar','atm'];
const unidadesTemperatura = ['°C','°F','Kelvin'];
const unidadesTemperaturaValuesOption = ['c','f','k'];
const unidadesEnergia = ['Joule','Kcal'];
const unidadesEnergiaValuesOption = ['joule','kcal'];
const unidadesVelocidad = ['m/s','Km/h','Millas/h'];
const unidadesVelocidadValuesOption = ['m/s','km/h','mile/h'];

// Declaro los select
let selectDeOrigen = document.getElementById("selectUnidadesOrigen");
let selectDeDestino = document.getElementById("selectUnidadesDestino");
let selectMagnitudElegida = document.getElementById("selectMagnitud");

// Declaro el input y output
let inputValorIngresado = document.getElementById("inputValorIngresado");
let outputValorResultado = document.getElementById("outputValorResultado");

// Declaro el botón de convertir
let btnConvertir = document.getElementById("btnConvertir");
// Declaro el botón de ver historial
let btnHistorial = document.getElementById("btnVerHistorial");
// Declaro la sección de historial
let sectionHistorial = document.getElementById("sectionHistorial");
let divsHistorial = document.getElementById("divsHistorial");

// Asigno los eventos
btnHistorial.addEventListener("click", mostrarHistorial);
btnConvertir.addEventListener("click", hacerConversion);
inputValorIngresado.addEventListener("keyup", hacerConversion);
selectDeOrigen.addEventListener("change", ponerOutputEnBlanco);
selectDeDestino.addEventListener("change", ponerOutputEnBlanco);
selectMagnitudElegida.addEventListener("change", selectMagnitudOnChange);

const valoresOptionSelectDeMagnitudes = ['longitud','masa','presion','temperatura','energia','velocidad'];

let historialOculto = true;

// Recorro el localStorage y relleno el historial
rellenarHistorial();

// Como la magnitud por defecto siempre va a ser longitud, creo los options en JS
// y los agrego a cada select con sus valores y textos
agregarOptionsALosSelectDeOrigenYDestino(unidadesLongitud, unidadesLongitudValuesOption);

//! Funciones

// Función para rellenar el historial
function rellenarHistorial() {
    
    // Elimino todos sus nodos hijos
    eliminarNodosHijos(divsHistorial);
    for (let i = localStorage.length-1; i >= 0 ; i--) {
        let conversion = JSON.parse( localStorage.getItem(`conversion${i}`) );
        crearDivHistorial(conversion);
    }

}

function crearDivHistorial(conversion) {
    
    let divHistorial = document.createElement('div');
    divHistorial.classList.add('divHistorial');
    let p1 = document.createElement('p');
    p1.innerHTML = `${conversion.valorInput} ${conversion.unidadInput}`;
    let p2 = document.createElement('p');
    p2.innerHTML = '=>';
    let p3 = document.createElement('p');
    p3.innerHTML = `${conversion.valorOutput} ${conversion.unidadOutput}`;
    divHistorial.appendChild(p1);
    divHistorial.appendChild(p2);
    divHistorial.appendChild(p3);
    divsHistorial.appendChild(divHistorial);
    let hr = document.createElement('hr');
    divsHistorial.appendChild(hr);

}

// Función para poner en blanco el output al cambiar los select
function ponerOutputEnBlanco(e) {
    outputValorResultado.innerHTML = '';
}

// Creo una función para agregar options a los select de unidades
function agregarOptionsALosSelectDeOrigenYDestino(unidades, valuesOption) {
    
    for (const i in unidades) {

        let optionOrigen = document.createElement("option");
        optionOrigen.value = valuesOption[i];
        optionOrigen.innerHTML = unidades[i];
        selectDeOrigen.appendChild(optionOrigen);
        let optionDestino = document.createElement("option");
        optionDestino.value = valuesOption[i];
        optionDestino.innerHTML = unidades[i];
        selectDeDestino.appendChild(optionDestino);

    }

}

// Hago una función para eliminar los nodos hijos
function eliminarNodosHijos(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    // Elimino el primer nodo hijo hasta que éste sea nulo y salga del bucle while
}

function selectMagnitudOnChange() {
    
    inputValorIngresado.value = '';
    outputValorResultado.innerHTML = '';
    
    let magnitudElegida = selectMagnitudElegida.value;
    // Elimino los nodos hijos options para posteriormente agregar los nuevos
    eliminarNodosHijos(selectDeDestino);
    eliminarNodosHijos(selectDeOrigen);
    switch (magnitudElegida) {
        case valoresOptionSelectDeMagnitudes[0]: // Longitud
            agregarOptionsALosSelectDeOrigenYDestino(unidadesLongitud, unidadesLongitudValuesOption);
            break;
        case valoresOptionSelectDeMagnitudes[1]: // Masa
            agregarOptionsALosSelectDeOrigenYDestino(unidadesMasa, unidadesMasaValuesOption);
            break;
        case valoresOptionSelectDeMagnitudes[2]: // Presión
            agregarOptionsALosSelectDeOrigenYDestino(unidadesPresion, unidadesPresionValuesOption);
            break;
        case valoresOptionSelectDeMagnitudes[3]: // Temperatura
            agregarOptionsALosSelectDeOrigenYDestino(unidadesTemperatura, unidadesTemperaturaValuesOption);
            break;
        case valoresOptionSelectDeMagnitudes[4]: // Energía
            agregarOptionsALosSelectDeOrigenYDestino(unidadesEnergia, unidadesEnergiaValuesOption);
            break;
        case valoresOptionSelectDeMagnitudes[5]: // Velocidad
            agregarOptionsALosSelectDeOrigenYDestino(unidadesVelocidad, unidadesVelocidadValuesOption);
            break;    
        default:
            break;
    }
}

function hacerConversion(event) {

    // Recibo el valor ingresado
    let valorIngresado = inputValorIngresado.value;
    // Cambio las comas por puntos por si acaso, y casteo la string a float
    let valorIngresadoFloat = parseFloat(valorIngresado.replace(',','.'));
    // Me aseguro que se presionó el enter (tecla 13) o se hizo click en el botón de convertir
    if (event.keyCode == 13 || event.type == 'click') {
        // Agrego un if para evitar un error si el usuario pone en blanco el input o ingresa un NaN
        if ( valorIngresadoFloat == '' || isNaN(valorIngresadoFloat) ) {
            outputValorResultado.innerHTML = '';
            return;
        }
        let resultado;
        // Pongo un condicional por si la unidad de origen es igual a la de destino, en ese caso no se convierte nada
        if (selectDeOrigen.value != selectDeDestino.value) {

            resultado = xToX(selectDeOrigen.value, selectDeDestino.value, valorIngresadoFloat);

        } else {
            resultado = valorIngresadoFloat;
        }
        outputValorResultado.innerHTML = resultado;
        // Guardo la conversión en el local storage
        let conversion = new Conversion(valorIngresadoFloat.toString(), corregirUnidad(selectDeOrigen.value), resultado.toString(), corregirUnidad(selectDeDestino.value));
        let conversionJson = JSON.stringify(conversion);
        localStorage.setItem("conversion"+localStorage.length, conversionJson);
        rellenarHistorial();
    }
}

// Esta función retorna la string de la unidad ingresada, ya que en los select se usan una distinta a la que ve el usuario
function corregirUnidad(unidad) {
    
    // Longitud
    for (const i in unidadesLongitudValuesOption) {
        if (unidad == unidadesLongitudValuesOption[i]) {
            return unidadesLongitud[i];
        }
    }
    // Masa
    for (const i in unidadesMasaValuesOption) {
        if (unidad == unidadesMasaValuesOption[i]) {
            return unidadesMasa[i];
        }
    }
    // Velocidad
    for (const i in unidadesVelocidadValuesOption) {
        if (unidad == unidadesVelocidadValuesOption[i]) {
            return unidadesVelocidad[i];
        }
    }
    // Presión
    for (const i in unidadesPresionValuesOption) {
        if (unidad == unidadesPresionValuesOption[i]) {
            return unidadesPresion[i];
        }
    }
    // Temperatura
    for (const i in unidadesTemperaturaValuesOption) {
        if (unidad == unidadesTemperaturaValuesOption[i]) {
            return unidadesTemperatura[i];
        }
    }
    // Energía
    for (const i in unidadesEnergiaValuesOption) {
        if (unidad == unidadesEnergiaValuesOption[i]) {
            return unidadesEnergia[i];
        }
    }

}

function mostrarHistorial(event) {

    if (historialOculto) {
        sectionHistorial.style.display = 'initial';
        sectionHistorial.style.opacity = '1.0';
        btnHistorial.innerHTML = 'Ocultar historial';
        historialOculto = false; 
    } else {
        sectionHistorial.style.display = 'none';
        sectionHistorial.style.opacity = '0.0';
        btnHistorial.innerHTML = 'Ver historial';
        historialOculto = true; 
    }

}