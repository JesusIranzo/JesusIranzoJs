
let nombreIngresado = prompt("Ingresa nombre");
 let apellidoIngresado = prompt("Ingresa el apellido");

if((nombreIngresado != "") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado);
} else {
     alert("Error: Ingresa nombre y apellido");
 }

let usuario = prompt ("Ingresa tu Usuario:");
 let password = prompt ("Ingresa tu Contraseña");
 let huellaDactilar = true

 if (usuario === "NickyWolf18" && password === "1818051301"){
     alert("Bienvenido " + usuario)
 } else {
    console.warn ("No se reconoce usuario y/o contraseña.")
 }