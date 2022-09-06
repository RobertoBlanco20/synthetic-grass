
// Calcula segun la diferencia de densidades

export function calcularDensidad(density){

    let resultadoDensidad;

    switch(density){
        case 'high':
            resultadoDensidad = 1
            break

        case 'medium':
            resultadoDensidad = 0.80
            break
        
        case 'low':
            resultadoDensidad = 0.65
            break
        
        default: 
            break
    }
    return resultadoDensidad
}