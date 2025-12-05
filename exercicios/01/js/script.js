function obterMedia() {
    var a = parseInt(document.getElementById("parcela1").value);
    var b = parseInt(document.getElementById("parcela2").value);
    var c = parseInt(document.getElementById("parcela3").value);

    var media = (a + b + c)/3;

    document.getElementById("soma").innerHTML = "Resultado: " + media;
}