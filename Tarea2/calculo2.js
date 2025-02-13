function obtenerMayorSalarioAnual(numeros){
    let mayorSueldo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayorSueldo) {
        mayorSueldo = numeros[i];
        }
    }

    return mayorSueldo;
}

function obtenerMenorSalarioAnual(numeros){
        let menorSueldo = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] < menorSueldo) {
            menorSueldo = numeros[i];
        }
        }
    
        return menorSueldo;
}


function obtenerSalarioPromedioAnual(numeros){
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }

    return (acumulador / numeros.length).toFixed(2);
}


function obtenerSalarioPromedioMensual(numeros){
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }

    return (((acumulador / numeros.length) / 12)).toFixed(2);
}