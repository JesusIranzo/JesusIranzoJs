function sumar(nro1, nro2){
    console.log("resultado:" , nro1 + nro2)
}

function calcular(nro1, nro2, ope){
    switch(ope){
        case "+":
            return nro1 + nro2
        case "-":
            return nro1 - nro2
        case "*":
            return nro1 * nro2
        case "/":
            return nro1 / nro2
        default:
            return"Error en el cálculo."        
    }
}
function iniciarCalculadora (){
    let numero1 = parseFloat (prompt ("Ingresa el primer nro"))
    let numero2 = parseFloat (prompt ("Ingresa el segundo nro"))
    let operador = prompt ("Ingresa el opreador { + - * /}")
        console.log ("Resultado: ",  calcular (numero1, numero2, operador))
}

iniciarCalculadora ()
