//Tipos de datos

// Cadenas de texto (string): son las que nos permiten escribir texto y almacernarlo 

const nombre= "Andres"; //podemos hacerlo con comillas dobles
const Nombre= 'Carlos'; //podemos hacerlo con commilas simples


//Numero (number) : nos permitirá guardar numeros , ya sean negativos, positivos, entero o decimales

const numero= 4; //positivo
const numero2= -4.123;  //decimal
const numero3= -3 ; //negativo
const numero4 =  5; //entero


//Boleano (verdadero o falso) : nos permtira crear condiciones donde demos como resultado un falso o verdadero. Decirle a nuestro sitio web, que dependiendo de algo, reaccione

const usuarioConectado= "false";
const mayorQue = 10 > 2;
console.log(mayorQue);  //Nos tirará "true", porque 10 es mayor a 2  


//Array (arreglos): nos permitirán guardar multiples valores

const arreglo = [1,2,3,4,5,6,7,8,9,10];


//Objetos: nos permite guardar informacion,similar al arreglo, sin embargo, este lo hace en parejas, llamadas "clave y valor"

const persona ={
    nombre : "Carlos",
    edad : 20,
    carro : {
        marca: "toyota"
    }
};

console.log(persona);


//Funciones: practicamente nos permiten reciclar codigo y hacerlo mas sencillo de leer

function hola(){
    console.log("Hola mundo");
}

hola(); //esta es la llamada a la funcion, necesaria para que se pueda ejecutar


