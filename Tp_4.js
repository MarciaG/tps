var arrPalabras  = ["follow", "the", "white", "rabbit"];
var arrLen = arrPalabras.length;
var arrResultante = [];
for (var i = 0; i < arrLen; i++){
    // Guardo en el array la cantidad de vocales de la palabra
    arrResultante.push (contarVocales (arrPalabras[i]));
}
console.log("Vocales por palabra: " + arrResultante);

// contarVocales devuelve la cantidad de vocales de una palabra
function contarVocales (palabra){
    
    // Convierto la palabra a minúsculas (por si llegara en mayúsculas) 
    palabra = palabra.toLowerCase();
    var cantVocales = 0;
    
    for (var i = 0; i < palabra.length; i++) {
        var letra = palabra[i];
        
        // Este switch entra y cuando cumple directamente suma y sale.
        switch (letra){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                cantVocales++;
                break;
        }
    }
    return cantVocales;
}