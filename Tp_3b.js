//Otro ejercicio para los que terminaron:
//Usando este array: [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24, 91, 95, 77], generar los pares e impares con el ejercicio anterior y generar otro array con la multiplicacion de los elementos del array de pares e impares, teniendo en cuenta que de tener distintas longitudes, se debe usar 1 como multiplicador

//Declaración de Variables
var arrOriginal = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24, 91, 95, 77];
var arrPar = [];
var arrImpar = [];

var arrLength = arrOriginal.length;

//Recorro el array
var i;

for (i = 0; i < arrLength; i++){
	//console.log(arroriginal[i]);

	if (arrOriginal[i]%2 === 0){
		arrPar.push(arrOriginal[i]);
	}
	else{
		arrImpar.push(arrOriginal[i]);
	}

}

//Impresión de separación
console.log("Array pares:" + arrPar);
console.log("Array impares:" + arrImpar);

//Almacenar la longitud de cada array

var arrParLen = arrPar.length;
var arrImparLen = arrImpar.length;

//Verifico cual de los 2 es más largo - Ternary Conditional Operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
var mayorLen = arrParLen > arrImparLen ? arrParLen : arrImparLen;

//Multiplicación de Arrays

var resultado;
var arrFinal = [];
for (i = 0; i < mayorLen; i++){
    
    /* Versión extendida
    if (i < arrParLen && i <arrImparLen){
       resultado =  arrPar[i]*arrImpar[i];
    } else if (i < arrParLen) {
        resultado = arrPar[i];
    } else {
        resultado = arrImpar[i]
    }
    */
    
    // Versión Ternary Conditional Operator
    var valor1 = i < arrParLen ? arrPar[i] : 1;
    var valor2 = i < arrImparLen ? arrImpar[i] : 1;
    
    resultado = valor1 * valor2;
    
    //Agrego el resultado al array final
    arrFinal.push(resultado);

}
//Imprimo
console.log("Array resultante: " + arrFinal);
