/*TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector('#agregar-familiar').onclick = function(event){
    agregarFamiliar();

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event){
    const numeros = obtenerSalarios();
    mostrarSalario('mayor', obtenerMayorSalarioAnual(numeros));
    mostrarSalario('menor', obtenerMenorSalarioAnual(numeros));
    mostrarSalario('promedio', obtenerSalarioPromedioAnual(numeros));
    mostrarSalario('promedioMensual', obtenerSalarioPromedioMensual(numeros));
    mostrarResultados();

    event.preventDefault();
}

document.querySelector('#eliminar-familiar').onclick = function(event){
    eliminarFamiliar();

    event.preventDefault();
}

document.querySelector('#resetear').onclick = resetear;

function agregarFamiliar(){
    const $div = document.createElement('div');  
    $div.className = 'familiar';

    const $label = document.createElement('label');  
    $label.textContent = 'Sueldo del familiar:';
    const $input = document.createElement('input'); 
    $input.type = 'number';

    $div.appendChild($label); 
    $div.appendChild($input);

    const $familiares = document.querySelector('#familiares'); 
    $familiares.appendChild($div);
}

function eliminarFamiliar(){
    const $familiares = document.querySelectorAll('.familiar');
    if ($familiares.length > 0) {
        $familiares[$familiares.length - 1].remove();
    }
}

function obtenerSalarios(){
    const $familiares = document.querySelectorAll('.familiar input');
    const sueldos = [];
    for (let i = 0; i < $familiares.length; i++) {
        const salario = Number($familiares[i].value);
        if (salario > 0) {
            sueldos.push(salario);
        }
    }
    return sueldos;
}

function mostrarSalario(tipo, valor){
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarResultados() {
    document.querySelector('#calculo').className = '';
}

function ocultarResultados() {
    document.querySelector('#calculo').className = 'oculto';
}

function borrarFamiliares() {
    const $familiares = document.querySelectorAll('.familiar');
    for(let i = 0; i < $familiares.length; i++) {
        $familiares[i].remove();
    }
}

function resetear() {
    borrarFamiliares();
    ocultarResultados();
}
