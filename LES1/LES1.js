var output;
var chars = "1234567890qwertyuiopasdfghjklzxcvbnm";
var letters = "9r6hd037okp14flswyjq5gux8bvcamit2nze";
function LESEncode(idOfObj) {
    var arr = document.getElementById(idOfObj).value.split("");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = letters[chars.indexOf(arr[i], 0)];
    }
    output = arr.join("");
}
function LESDecode(idOfObj) {
    var arr = document.getElementById(idOfObj).value.split("");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = chars[letters.indexOf(arr[i], 0)];
    }
    output = arr.join("");
}
