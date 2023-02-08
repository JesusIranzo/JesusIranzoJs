
console.clear
console.log("Bienved@s A la tienda de los mejores zapatos 👟, con entrega a tu casa ZapFast🚚")

let consulta = confirm("¿Te puedo ayudar en lo que buscar?")

if (consulta) {
    let zapatos = prompt("¿Qué tipo de zapatos estas buscando? (Deportivos - Clasicos - Converse)")
    let color = prompt("Elige el color 🔵,🔴,🟢,🟠,🟡,🟣,⚪,⚫ " + zapatos)
    switch (color) {
        case "azul":
            alert("Si, tenemos " + zapatos + " en color " + color)
            break
        case "rojo":
            alert("Si, tenemos " + zapatos + " en color " + color)
            break
        case "verde":
            alert("Si, tenemos " + zapatos + " en color " + color)
            break
        case "naranja":
            alert("Si, tenemos " + zapatos + " en color " + color)
            break
        case "amarillo":
            alert("Si, tenemos " + zapatos + " en color " + color)
            break
        case "morado":
            alert("Si, tenemos " + zapatos + " en color " + color)
            break
        case "negro":
            alert("Si, tenemos " + zapatos + " en color " + color)
            break
        case "blanco":
            alert("Si, tenemos " + zapatos + " en color " + color)
            break
        default:
            alert("No tenemos " + zapatos + " en ese color.")
    }
}
