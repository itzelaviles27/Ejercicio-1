/**
 * Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus 
respectivas variables.
Debe analizar los números, identificar cual es el número mayor, 
el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de 
mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e 
imprimir un mensaje por consola o por el DOM diciendo que los números 
son iguales.
 */

//Se solicita al usuario 3 números y se guardan en las variables
let n1 = prompt('Ingresa el primer número');
let n2 = prompt('Ingresa el segundo número');
let n3 = prompt('Ingresa el tercer número');

//Analizar si los numeros son iguales 
if (n1 === n2 && n2===n3){
    console.log('Los números son iguales');
}else {
    //se debe encontrar el numero mayor y se utiliza otra variable para guardar el mayor
    let mayor = n1;
    if (mayor < n2){
        mayor = n2;
    }
    if (mayor < n3){
        mayor = n3;
    }
    //se debe encontrar el número menor y se utiliza otra variable para guardar el menor
    let menor = n1;
    if (menor > n2){
        menor = n2;
    }
    if (menor > n3){
        menor = n3;
    }

    //se debe de encontrar el valor de en medio, se compara cada numero para ver que sea diferente a mayor y menor
    let medio;
    if (n1 !== mayor && n1 !== menor) {
        medio = n1;
    } else if (n2 !== mayor && n2 !== menor) {
        medio = n2;
    } else {
        medio = n3;
    }
    console.log (`${mayor},${medio},${menor}`);
    console.log (`${menor},${medio},${mayor}`);

}
