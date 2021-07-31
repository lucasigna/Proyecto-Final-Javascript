// Funcionalidad conversor de unidades

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

//Declaro el input
let inputValorIngresado = document.getElementById("inputValorIngresado");

// Asigno los eventos
inputValorIngresado.addEventListener("input", hacerConversion);
selectDeOrigen.addEventListener("change", hacerConversion);
selectDeDestino.addEventListener("change", hacerConversion);
selectMagnitudElegida.addEventListener("change", selectMagnitudOnChange);

// Como la magnitud por defecto siempre va a ser longitud, creo los options en JS
// y los agrego a cada select con sus valores y textos
agregarOptionsALosSelectDeOrigenYDestino(unidadesLongitud, unidadesLongitudValuesOption);

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

// Hago una función para eliminar los options/hijos de los select
function eliminarOptions(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    // Elimino el primer nodo hijo hasta que éste sea nulo y salga del bucle while
}

const valoresOptionSelectDeMagnitudes = ['longitud','masa','presion','temperatura','energia','velocidad'];

function selectMagnitudOnChange() {
    
    document.getElementById("inputValorIngresado").value = '';
    document.getElementById("outputValorResultado").innerHTML = '';
    
    let magnitudElegida = selectMagnitudElegida.value;
    // Elimino los nodos hijos options para posteriormente agregar los nuevos
    eliminarOptions(selectDeDestino);
    eliminarOptions(selectDeOrigen);
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

function hacerConversion() {
    // Recibo el valor ingresado
    let valorIngresado = inputValorIngresado.value;
    // Declaro el elemento output
    let outputValor = document.getElementById("outputValorResultado");
    // Agrego un if para evitar un error si el usuario pone en blanco el input
    if (valorIngresado == '') {
        outputValor.innerHTML = '';
        return;
    }
    // Cambio las comas por puntos por si acaso, y casteo la string a float
    let valorIngresadoFloat = parseFloat(valorIngresado.replace(',','.'));
    let resultado;
    // Pongo un condicional por si la unidad de origen es igual a la de destino, en ese caso no se convierte nada
    if (selectDeOrigen.value != selectDeDestino.value) {

        resultado = xToX(selectDeOrigen.value, selectDeDestino.value, valorIngresadoFloat);

    } else {
        resultado = valorIngresadoFloat;
    }
    outputValor.innerHTML = resultado;
}