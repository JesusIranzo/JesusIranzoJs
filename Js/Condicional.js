
let nombreIngresado = prompt("Ingresa nombre");
 let apellidoIngresado = prompt("Ingresa el apellido");

if((nombreIngresado != "") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado);
} else {
     alert("Error: Ingresa nombre y apellido");
 }