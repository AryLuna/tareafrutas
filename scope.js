var globalVar = "Soy una variable"

//Funcion Scope - encapsula la variable y evita que sea accesible fuera de su funcion
function saludo() {
    let mensaje = "Hola"
    console.log(mensaje);
}
saludo()
console.log(mensaje);

//BlockScope con IF solo existe en su propio bloque
if(true){
    let BlockScope = "Solo funciona dentro del mismo bloque"
    console.log(BlockScope);
}

//Palindromo 
//Crear una funcion que verifica si una palabra es un palindromo o no
function esPalindromo(palabra) {
    let palabra = palabra.toLowerCase().replace(/[^a-z]/g, "");
    return palabra === palabra.split('').reverse().join('');
}
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("ana"));      


//Filtrar todos los numeros mayores a un numero utilizando funciones
function filtrarNumeros (numeros, limite){
    function esMayorLimite(num) {
        return num > limite;
    }
    return numeros.filter(esMayorLimite);
}
const numeros = [1, 3, 5, 10, 15, 20, 35, 88, 77];
const limite = 66;
const resultado = filtrarNumeros(numeros, limite);
console.log(resultado);

//Funcion que saque el area de un circulo
//Operaciones matematicas