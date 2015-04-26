var arrOriginal = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24, 91, 95, 77];

console.log(arrOriginal);

var pudo = reverse(arrOriginal);
console.log(arrOriginal);
console.log(pudo);


function reverse(arr){
    if (Array.isArray(arr)){
        var temp;
        var len = Math.floor (arr.length/2);
        for (i = 0; i < len; i++){
            temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }
        return true;
    } else {
        return false;
    }
}
