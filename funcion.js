//Funcion sin parametro
function saludar(){
    console.log("Hola Mundo");
}
saludar();

//Funcion con parametros
function saludarAlguien(nombre){
    console.log("Hola", nombre);
}
saludarAlguien("Angel");

//Funcion con valor por defecto
function saludarInvitado(nombre = "Invitado"){
    console.log("Hola, Bienvenido", nombre);
}
saludarInvitado("Ary");

//Funcion retorna
function multiplicar(a, b){
    return a * b;
}
let resultado = multiplicar (36, 4);
console.log(resultado);

