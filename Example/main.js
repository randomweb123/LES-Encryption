var pf = document.getElementById("passwordField");
var h2 = document.createElement("h2");
var thing;
setInterval(function() {
    if (thing != output) {
        h2.innerHTML = output;
        pf.appendChild(h2);
        thing = output;
    }
});