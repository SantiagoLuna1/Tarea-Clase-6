/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#seleccionar').onclick = function(event){
    const $cantidadIntegrantes = document.querySelector('#numero-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event) {
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarResultados();

    event.preventDefault();
}

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for(let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function crearIntegrantes(cantidadIntegrantes){
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
    } else {
        resetear();
    }
}

function crearIntegrante(indice){
    const $div = document.createElement('div');  
    $div.className = 'integrante';

    const $label = document.createElement('label');  
    $label.textContent = 'Edad del integrante #: ' + (indice + 1); 
    const $input = document.createElement('input'); 
    $input.type = 'number';

    $div.appendChild($label);  //<div> ... </div>
    $div.appendChild($input);  //<label> Edad del integrante... </label>

    const $integrantes = document.querySelector('#integrantes'); 
    $integrantes.appendChild($div); //<div id="integrantes"> <div> </div> </div>
}

function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
}

function ocultarBotonCalculo() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonCalculo() {
    document.querySelector('#calcular').className = '';
}

function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}