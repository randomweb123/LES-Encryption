var output;
var chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~?!@#$%^&*()-_=+,./";
var letters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~?!@#$%^&*()-_=+,./";
var static = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~?!@#$%^&*()-_=+,./";

var chars = chars.split("");
var letters = letters.split("");
var static = static.split("");

for (var i = 0; i < letters.length; i++) {
    rand = Math.round(Math.random() * (chars.length - 1));
    letters[i] = chars[rand];
    chars.splice(rand, 1);
}

function LESEncode(idOfObj) {
    var arr = document.getElementById(idOfObj).value.split("");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = letters[static.indexOf(arr[i], 0)];
    }
    output = arr.join("");
}

function LESDecode(idOfObj) {
    var arr = document.getElementById(idOfObj).value.split("");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = static[letters.indexOf(arr[i], 0)];
    }
    output = arr.join("");
}