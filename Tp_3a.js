//Declaración de Variables
var arrOriginal = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24];
var arrPar = [];
var arrImpar = [];

var i = 0;
var arrLength = arrOriginal.length;

//Recorro el array
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


