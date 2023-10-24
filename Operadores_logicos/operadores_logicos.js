// Operdores logicos
//Estos nos pemiten hascer comparaciones valores y nos devolverá valores booleanos. Existen 3 tipos de operadores:
/*
-And &&
-Or ||
-Not !
*/

//Ej / And
//En esta las dos condiciones deben cumplirse 

const nombre= "Andres";
const edad= 20;
const tieneEntrada= true;

const permitiAcceso= edad => 18 && tieneEntrada;
console.log("Tiene acceso: " + tieneEntrada);


//Ej / Or
//Con este no es necesario que las dos o mas condiciones se cumplan. Con una es suficiente

const Nombre= "Carlos";
const Edad= 19;
const TieneEntrada= false;

const PermitiAcceso= edad => 18 || TieneEntrada;
console.log("Permitir acceso: " + TieneEntrada);

//Ej / Not
//Lo que hace esto, es invertir el valor de una variable. Es decir, si la varaible es positiva, esta pasa a ser negativa

const variable = false;
console.log(!variable);