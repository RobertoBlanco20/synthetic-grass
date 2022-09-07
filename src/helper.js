
// Calcula segun la diferencia de densidades

export function calcularDensidad(density){

    let resultadoDensidad;

    switch(density){
        case 'Alta':
            resultadoDensidad = 1
            break

        case 'Media':
            resultadoDensidad = 0.80
            break
        
        case 'Baja':
            resultadoDensidad = 0.65
            break
        
        default: 
            break
    }
    return resultadoDensidad
}

// Establecer el tipo de trabajo 

export function tipoTrabajo(plan){

    let resultadoPlan;

    switch(plan){
        case 'materiales':
            resultadoPlan = 'Solo Materiales'
            break

        case 'colocado':
            resultadoPlan = 'Materiales y colocación'
            break
        default: 
            break
    }
    return resultadoPlan
}
