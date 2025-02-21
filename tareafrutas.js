// Declaracion de un arreglo de frutas con varios tipos usando Ciclo For

let frutas = ['uva', 'manzana', 'mora', 'cereza', 'uva', 'uva'];
let cantidadFrutas = {};
for (let i=0; i < frutas.length; i++){
    let fruta = frutas [i];
    if (cantidadFrutas [fruta]){
        cantidadFrutas[fruta]++;
    } else {
        cantidadFrutas[fruta] = 1;
    }
}
console.log(cantidadFrutas);