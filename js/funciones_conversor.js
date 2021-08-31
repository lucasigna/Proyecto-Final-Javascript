// Funciones particulares para los cambio de unidades de Longitud

function mtsToX(unidad,valor) {
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