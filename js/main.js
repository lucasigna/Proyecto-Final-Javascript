// Funcionalidad conversor de unidades

// Funciones particulares para los cambio de unidades de Longitud

function mtsToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km':
            return valor/1000;
        case 'cm':
            return valor*100;
        case 'mm':
            return valor*1000;
        case 'microm':
            return valor*1000000;
        case 'nm':
            return valor*1000000000;
        case 'mile':
            return valor/1609.34;
        case 'inch':
            return valor*39.37;
        default:
            break;
    }
}

function kmToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'mts':
            return valor*1000;
        case 'cm':
            return valor*100000;
        case 'mm':
            return valor*1000000;
        case 'microm':
            return valor*1000000000;
        case 'nm':
            return valor*1000000000000;
        case 'mile':
            return valor/1.60934;
        case 'inch':
            return valor*39370;
        default:
            break;
    }
}

function cmToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km':
            return valor/100000;
        case 'mts':
            return valor/100;
        case 'mm':
            return valor*10;
        case 'microm':
            return valor*10000;
        case 'nm':
            return valor*10000000;
        case 'mile':
            return valor/160934;
        case 'inch':
            return valor/2.54;
        default:
            break;
    }
}

function mmToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km':
            return valor/1000000;
        case 'cm':
            return valor/10;
        case 'mts':
            return valor/1000;
        case 'microm':
            return valor*1000;
        case 'nm':
            return valor*1000000;
        case 'mile':
            return valor/1609340;
        case 'inch':
            return valor/25.4;
        default:
            break;
    }
}

function micromToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km':
            return valor/1000000000;
        case 'cm':
            return valor/10000;
        case 'mm':
            return valor/1000;
        case 'mts':
            return valor/1000000;
        case 'nm':
            return valor*1000;
        case 'mile':
            return valor/1609340000;
        case 'inch':
            return valor/25400;
        default:
            break;
    }
}

function nmToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km':
            return valor/1000000000000;
        case 'cm':
            return valor/10000000;
        case 'mm':
            return valor/1000000;
        case 'microm':
            return valor/1000;
        case 'mts':
            return valor/1000000000;
        case 'mile':
            return valor/1609340000000;
        case 'inch':
            return valor/25400000;
        default:
            break;
    }
}

function mileToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km':
            return valor*1.609;
        case 'cm':
            return valor*160934;
        case 'mm':
            return valor*1609340;
        case 'microm':
            return valor*1609340000;
        case 'nm':
            return valor*1609340000000;
        case 'mts':
            return valor*1609.34;
        case 'inch':
            return valor*63360;
        default:
            break;
    }
}

function inchToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km':
            return valor/39370;
        case 'cm':
            return valor*2.54;
        case 'mm':
            return valor*25.4;
        case 'microm':
            return valor*25400;
        case 'nm':
            return valor*25400000;
        case 'mile':
            return valor/63360;
        case 'mts':
            return valor/39.37;
        default:
            break;
    }
}

// Funciones particulares para los cambio de unidades de Masa

function kgToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'g':
            return valor*1000;
        case 'mg':
            return valor*1000000;
        case 'tn':
            return valor/1000;
        case 'libra':
            return valor*2.205;
        case 'onza':
            return valor*35.274;
        default:
            break;
    }
}

function gToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'kg':
            return valor/1000;
        case 'mg':
            return valor*1000;
        case 'tn':
            return valor/1000000;
        case 'libra':
            return valor/454;
        case 'onza':
            return valor/28.35;
        default:
            break;
    }
}

function mgToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'g':
            return valor/1000;
        case 'kg':
            return valor/1000000;
        case 'tn':
            return valor/1000000000;
        case 'libra':
            return valor/453592;
        case 'onza':
            return valor/28350;
        default:
            break;
    }
}

function tnToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'g':
            return valor*1000000;
        case 'mg':
            return valor*1000000000;
        case 'kg':
            return valor*1000;
        case 'libra':
            return valor*2205;
        case 'onza':
            return valor*35274;
        default:
            break;
    }
}

function libraToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'g':
            return valor*454;
        case 'mg':
            return valor*453592;
        case 'tn':
            return valor/2205;
        case 'kg':
            return valor/2.205;
        case 'onza':
            return valor*16;
        default:
            break;
    }
}

function onzaToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'g':
            return valor*28.35;
        case 'mg':
            return valor*28350;
        case 'tn':
            return valor/35274;
        case 'libra':
            return valor/16;
        case 'kg':
            return valor/35.274;
        default:
            break;
    }
}

// Funciones particulares para los cambio de unidades de Presión

function pascalToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'bar':
            return valor/100000;
        case 'atm':
            return valor/101325;
        default:
            break;
    }
}

function barToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'pascal':
            return valor*100000;
        case 'atm':
            return valor/1.013;
        default:
            break;
    }
}

function atmToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'bar':
            return valor*1.013;
        case 'pascal':
            return valor*101325;
        default:
            break;
    }
}

// Funciones particulares para los cambio de unidades de Temperatura

function celsiusToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'f':
            return valor*(9/5) + 32;
        case 'k':
            return valor + 273.15;
        default:
            break;
    }
}

function fahrenheitToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'c':
            return (valor-32) * (5/9);
        case 'k':
            return (valor-32) * (5/9) + 273.15;
        default:
            break;
    }
}

function kelvinToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'f':
            return (valor-273.15) * (9/5) + 32;
        case 'c':
            return valor - 273.15;
        default:
            break;
    }
}

// Funciones particulares para los cambio de unidades de Energía

function jouleToKcal(valor) {
    return valor/4184;
}

function kcalToJoule(valor) {
    return valor*4184;
}

// Funciones particulares para los cambio de unidades de Velocidad

function mxsToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km/h':
            return valor*3.6;
        case 'mile/h':
            return valor*2.237;
        default:
            break;
    }
}

function kmxhToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'm/s':
            return valor/3.6;
        case 'mile/h':
            return valor/1.609;
        default:
            break;
    }
}

function milexhToX(unidad,valor) {
    unidad = unidad.toLowerCase();
    switch (unidad) {
        case 'km/h':
            return valor*1.609;
        case 'm/s':
            return valor/2.237;
        default:
            break;
    }
}

// Función general de convertibilidad

function xToX(inicial,final,valor) {
    switch (inicial) {
        case 'km':
            return kmToX(final,valor);
        case 'mts':
            return mtsToX(final,valor);
        case 'cm':
            return cmToX(final,valor);
        case 'mm':
            return mmToX(final,valor);
        case 'microm':
            return micromToX(final,valor);
        case 'nm':
            return nmToX(final,valor);
        case 'mile':
            return mileToX(final,valor);
        case 'inch':
            return inchToX(final,valor);
        case 'kg':
            return kgToX(final,valor);
        case 'g':
            return gToX(final,valor);
        case 'mg':
            return mgToX(final,valor);
        case 'tn':
            return tnToX(final,valor);
        case 'libra':
            return libraToX(final,valor);
        case 'onza':
            return onzaToX(final,valor);
        case 'pascal':
            return pascalToX(final,valor);
        case 'bar':
            return barToX(final,valor);
        case 'atm':
            return atmToX(final,valor);
        case 'c':
            return celsiusToX(final,valor);
        case 'f':
            return fahrenheitToX(final,valor);
        case 'k':
            return kelvinToX(final,valor);
        case 'joule':
            return jouleToKcal(valor);
        case 'kcal':
            return kcalToJoule(valor);
        case 'm/s':
            return mxsToX(final,valor);
        case 'km/h':
            return kmxhToX(final,valor);
        case 'mile/h':
            return milexhToX(final,valor);
        default:
            break;
    }
}

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

// Declaro los select de unidades de origen y de destino
let selectDeOrigen = document.getElementById("selectUnidadesOrigen");
let selectDeDestino = document.getElementById("selectUnidadesDestino");

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
    
    let magnitudElegida = document.getElementById("selectMagnitud").value;
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
    let valorIngresado = document.getElementById("inputValorIngresado").value;
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