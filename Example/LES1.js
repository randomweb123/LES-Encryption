var output;
function LESEncode(idOfObj) {
    var arr = document.getElementById(idOfObj).value.split("");
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i].valueOf()) {
            case "1":
                arr[i] = "9";
                break;
            case "2":
                arr[i] = "r";
                break;
            case "3":
                arr[i] = "6";
                break;
            case "4":
                arr[i] = "h";
                break;
            case "5":
                arr[i] = "d";
                break;
            case "6":
                arr[i] = "0";
                break;
            case "7":
                arr[i] = "3";
                break;
            case "8":
                arr[i] = "7";
                break;
            case "9":
                arr[i] = "o";
                break;
            case "0":
                arr[i] = "k";
                break;
            case "q":
                arr[i] = "p";
                break;
            case "w":
                arr[i] = "1";
                break;
            case "e":
                arr[i] = "4";
                break;
            case "r":
                arr[i] = "f";
                break;
            case "t":
                arr[i] = "l";
                break;
            case "y":
                arr[i] = "s";
                break;
            case "u":
                arr[i] = "w";
                break;
            case "i":
                arr[i] = "y";
                break;
            case "o":
                arr[i] = "j";
                break;
            case "p":
                arr[i] = "q";
                break;
            case "a":
                arr[i] = "5";
                break;
            case "s":
                arr[i] = "g";
                break;
            case "d":
                arr[i] = "u";
                break;
            case "f":
                arr[i] = "x";
                break;
            case "g":
                arr[i] = "8";
                break;
            case "h":
                arr[i] = "b";
                break;
            case "j":
                arr[i] = "v";
                break;
            case "k":
                arr[i] = "c";
                break;
            case "l":
                arr[i] = "a";
                break;
            case "z":
                arr[i] = "m";
                break;
            case "x":
                arr[i] = "i";
                break;
            case "c":
                arr[i] = "t";
                break;
            case "v":
                arr[i] = "2";
                break;
            case "b":
                arr[i] = "n";
                break;
            case "n":
                arr[i] = "z";
                break;
            case "m":
                arr[i] = "e";
                break;
        }
    }
    console.log("wot");
    output = arr.join("");
    return output;
}
function LESDecode(idOfObj) {
    var arr = document.getElementById(idOfObj).value.split("");
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i].valueOf()) {
            case "9":
                arr[i] = "1";
                break;
            case "r":
                arr[i] = "2";
                break;
            case "6":
                arr[i] = "3";
                break;
            case "h":
                arr[i] = "4";
                break;
            case "d":
                arr[i] = "5";
                break;
            case "0":
                arr[i] = "6";
                break;
            case "3":
                arr[i] = "7";
                break;
            case "7":
                arr[i] = "8";
                break;
            case "o":
                arr[i] = "9";
                break;
            case "k":
                arr[i] = "0";
                break;
            case "p":
                arr[i] = "q";
                break;
            case "1":
                arr[i] = "w";
                break;
            case "4":
                arr[i] = "e";
                break;
            case "f":
                arr[i] = "r";
                break;
            case "l":
                arr[i] = "t";
                break;
            case "s":
                arr[i] = "y";
                break;
            case "w":
                arr[i] = "u";
                break;
            case "y":
                arr[i] = "i";
                break;
            case "j":
                arr[i] = "o";
                break;
            case "q":
                arr[i] = "p";
                break;
            case "5":
                arr[i] = "a";
                break;
            case "g":
                arr[i] = "s";
                break;
            case "u":
                arr[i] = "d";
                break;
            case "x":
                arr[i] = "f";
                break;
            case "8":
                arr[i] = "g";
                break;
            case "b":
                arr[i] = "h";
                break;
            case "v":
                arr[i] = "j";
                break;
            case "c":
                arr[i] = "k";
                break;
            case "a":
                arr[i] = "l";
                break;
            case "m":
                arr[i] = "z";
                break;
            case "i":
                arr[i] = "x";
                break;
            case "t":
                arr[i] = "c";
                break;
            case "2":
                arr[i] = "v";
                break;
            case "n":
                arr[i] = "b";
                break;
            case "z":
                arr[i] = "n";
                break;
            case "e":
                arr[i] = "m";
                break;
        }
    }
    output = arr.join("");
}
