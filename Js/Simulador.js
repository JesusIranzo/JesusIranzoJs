let consulta = confirm("¿ Quiéres hacer un cálculo ?")

 while (consulta){
    iniciarCalculadora()
    consulta = confirm("¿ Quiére hacer otro cálculo ?")
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
    if( !isNaN (calcular (numero1, numero2, operador))){
    alert ("Resultado: " + calcular (numero1, numero2, operador))
    } else {
        alert ("Algo pusiste mal")
    }
}
