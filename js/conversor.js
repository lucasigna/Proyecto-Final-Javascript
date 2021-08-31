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
// Array de values del select de magnitudes
const valoresOptionSelectDeMagnitudes = ['longitud','masa','presion','temperatura','energia','velocidad'];
// Booleano para mostrar/ocultar historial
let historialOculto = true;
// Array de conversiones para localStorage
const conversiones = [];
// Guardo el width de la ventana para mantener el responsive
let screenSize = window.innerWidth;


function crearVistaConversor(app, header) {
        
    header.html(`
        <nav>
            <ul>
                <a href=""><li id="actualPage">Conversor</li></a>
                <a href="#/buscador"><li>Buscador de constantes</li></a>
            </ul>
        </nav>
    `);
    app.removeClass('mainSearch').addClass('mainIndex');
    app.html(`
        <section class="mainIndex__sectionConversor">
            <select id="selectMagnitud">
                <option value="longitud">Longitud</option>
                <option value="masa">Masa</option>
                <option value="presion">Presión</option>
                <option value="temperatura">Temperatura</option>
                <option value="energia">Energía</option>
                <option value="velocidad">Velocidad</option>
            </select>
            <div id="divOrigen" class="divConversion">
                <input id="inputValorIngresado" class="valor" type="number">
                <hr>
                <select id="selectUnidadesOrigen" class="unidad"></select>
            </div>
            <img class="arrow" src="img/flecha.png" alt="flecha">
            <button id="btnConvertir" class="btn">Convertir</button>
            <div id="divDestino" class="divConversion">
                <p id="outputValorResultado" class="valor"></p>
                <hr>
                <select id="selectUnidadesDestino" class="unidad"></select>
            </div>
            <button id="btnVerHistorial" class="btn">Ver historial</button>
        </section>
        <section id="sectionHistorial" class="mainIndex__sectionHistorial">
            <h2>Historial</h2>
            <hr>
            <div id="divsHistorial"></div>
        </section>
    `);
    // Función para hacer responsive el historial cuando se redimensiona la ventana
    $(window).resize(function() {
        screenSize = window.innerWidth;
        ajustarVistaHistorial();
    });
    // Declaro los select
    const selectDeOrigen = $("#selectUnidadesOrigen");
    let selectDeDestino = $("#selectUnidadesDestino");
    let selectMagnitudElegida = $("#selectMagnitud");

    // Declaro el input y output
    let inputValorIngresado = $("#inputValorIngresado");
    let outputValorResultado = $("#outputValorResultado");

    // Declaro el botón de convertir
    let btnConvertir = $("#btnConvertir");
    // Declaro el botón de ver historial
    let btnHistorial = $("#btnVerHistorial");
    // Declaro la sección de historial
    let sectionHistorial = $("#sectionHistorial");
    let divsHistorial = $("#divsHistorial");

    // Asigno los eventos
    btnHistorial.click( mostrarHistorial );
    btnConvertir.click( hacerConversion );
    inputValorIngresado.keyup( hacerConversion );
    selectDeOrigen.change( ponerOutputEnBlanco );
    selectDeDestino.change( ponerOutputEnBlanco );
    selectMagnitudElegida.change( selectMagnitudOnChange );

    // Como la magnitud por defecto siempre va a ser longitud, creo los options en JS
    // y los agrego a cada select con sus valores y textos
    agregarOptionsALosSelectDeOrigenYDestino(unidadesLongitud, unidadesLongitudValuesOption);

    // Recorro el localStorage y relleno el historial
    rellenarHistorial();

    //! Funciones

    // Función para rellenar el historial
    function rellenarHistorial() {
        
        let conversiones = JSON.parse( localStorage.getItem('conversiones') );
        for (const conversion of conversiones) {
            crearDivHistorial(conversion);
        }

    }

    function crearDivHistorial(conversion) {
        
        divsHistorial.prepend(`
            <div class="divHistorial">
                <p>${conversion.valorInput} ${conversion.unidadInput}</p>
                <p>=></p>
                <p>${conversion.valorOutput} ${conversion.unidadOutput}</p>
            </div>
            <hr>
        `
        );

    }

    // Función para poner en blanco el output al cambiar los select
    function ponerOutputEnBlanco(e) {
        outputValorResultado.html('');
    }

    // Creo una función para agregar options a los select de unidades
    function agregarOptionsALosSelectDeOrigenYDestino(unidades, valuesOption) {
        
        for (const i in unidades) {

            console.log('loooool');
            selectDeOrigen.append(`<option value=${valuesOption[i]}>${unidades[i]}</option>`);
            selectDeDestino.append(`<option value=${valuesOption[i]}>${unidades[i]}</option>`);

        }

    }

    function selectMagnitudOnChange() {
        
        inputValorIngresado.val('');
        outputValorResultado.html('');
        
        let magnitudElegida = selectMagnitudElegida.val();
        // Elimino los nodos hijos options para posteriormente agregar los nuevos
        selectDeDestino.empty();
        selectDeOrigen.empty();
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
        let valorIngresado = inputValorIngresado.val();
        // Cambio las comas por puntos por si acaso, y casteo la string a float
        let valorIngresadoFloat = parseFloat(valorIngresado.replace(',','.'));
        // Me aseguro que se presionó el enter (tecla 13) o se hizo click en el botón de convertir
        if (event.keyCode == 13 || event.type == 'click') {
            // Agrego un if para evitar un error si el usuario pone en blanco el input o ingresa un NaN
            if ( valorIngresadoFloat == '' || isNaN(valorIngresadoFloat) ) {
                outputValorResultado.html('');
                return;
            }
            let resultado;
            // Pongo un condicional por si la unidad de origen es igual a la de destino, en ese caso no se convierte nada
            if (selectDeOrigen.val() != selectDeDestino.val()) {

                resultado = xToX(selectDeOrigen.val(), selectDeDestino.val(), valorIngresadoFloat);

            } else {
                resultado = valorIngresadoFloat;
            }
            // Si el número es flotante lo redondeo en 4 decimales
            if (!Number.isInteger(resultado)) {
                resultado = resultado.toFixed(4);
            }
            outputValorResultado.html(resultado);
            // Guardo la conversión en el local storage
            let conversion = new Conversion(valorIngresadoFloat.toString(), corregirUnidad(selectDeOrigen.val()), resultado.toString(), corregirUnidad(selectDeDestino.val()));
            conversiones.push(conversion);
            let conversionesJson = JSON.stringify(conversiones);
            localStorage.setItem("conversiones", conversionesJson);
            crearDivHistorial(conversion);
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

    function mostrarHistorial() {

        if (screenSize < 960) {
            // Vista tablet y celular
            if (historialOculto) {

                sectionHistorial.animate(
                    {
                        height: '100%'
                    },200
                ).animate(
                    {
                        opacity: '1.0',
                    },200
                );
                btnHistorial.html('Ocultar historial');
                historialOculto = false; 
            } else {

                sectionHistorial.animate(
                    {
                        height: '0'
                    },200
                ).animate(
                    {
                        opacity: '0.0',
                    },200
                );
                btnHistorial.html('Ver historial');
                historialOculto = true; 
            }
        } else if (screenSize >= 960) {
            // Vista PC
            if (historialOculto) {

                sectionHistorial.animate(
                    {
                        width: '30vw',
                    },200
                ).animate(
                    {
                        opacity: '1.0',
                    },200
                );
                btnHistorial.html('Ocultar historial');
                historialOculto = false; 
            } else {

                sectionHistorial.animate(
                    {
                        width: '0',
                    },200
                ).animate(
                    {
                        opacity: '0.0',
                    },200
                );
                btnHistorial.html('Ver historial');
                historialOculto = true; 
            }
        }

    }
    // Función que ajusta la vista del historial cuando se redimensiona la pantalla (Evita el height: 0, etc.)
    function ajustarVistaHistorial() {

        if (screenSize < 960) {
            // Vista tablet y celular
            if (!historialOculto) {

                sectionHistorial.css({
                    'height': '100%',
                    'width': '70vw'
                });
            }
        } else if (screenSize >= 960) {
            // Vista PC
            if (!historialOculto) {

                sectionHistorial.css({
                    'height': '100%',
                    'width': '30vw'
                });
            }
        }
    }
}

$(document).ready(function() {
    

});