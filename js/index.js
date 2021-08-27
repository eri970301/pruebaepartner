//Funcion de accion de botones cuando pasamos el raton por encima de un elemento de "nueva colección"

var accion = document.getElementById("coleccion"); document.getElementById("botoncar")

accion.onmouseover = function(e){
    document.getElementById("botoncar").style.display = "block";
}