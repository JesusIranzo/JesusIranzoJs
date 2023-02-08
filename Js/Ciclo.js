
 console.clear
 console.log("Bienved@s A la tienda de los mejores zapatos 👟, con entrega a tu casa ZapFast🚚")

 let consulta = confirm ("¿Te puedo ayudar en lo que buscar?")

 if (consulta){
    let zapatos = prompt("¿Qué tipo de zapatos estas buscando? (Deportivos - Clasicos - Converse)")
    let color = prompt ("Elige el color 🔵,🔴,🟢,🟠,🟡,🟣,⚪,⚫ " + zapatos)
    switch(color){
       case "azul":
             console.log("Si, tenemos " + zapatos + " en color " + color)
            break
        case "rojo":
            console.log("Si, tenemos " + zapatos + " en color " + color)
           break
      case "verde":
            console.log("Si, tenemos " + zapatos + " en color " + color)
           break
        case "naranja":
            console.log("Si, tenemos " + zapatos + " en color " + color)
           break
        case "amarillo":
            console.log("Si, tenemos " + zapatos + " en color " + color)
           break
        case "morado":
            console.log("Si, tenemos " + zapatos + " en color " + color)
           break
        case "negro":
            console.log("Si, tenemos " + zapatos + " en color " + color)
           break
        case "blanco":
            console.log("Si, tenemos " + zapatos + " en color " + color)
           break                    
       default:
            console.warn("No tenemos " + zapatos + " en ese color.")    
     }
 }
