let contador = 0;

function incrementar() {
    contador = contador + 1;
    // contador++;
    // contador+= 1;
    document.getElementById("contador").innerHTML= contador;
    console.log(contador);
}
function decrementar() {
    contador = contador - 1;
    // contador++;
    // contador+= 1;
    document.getElementById("contador").innerHTML= contador;
    console.log(contador);
}
function reset() {
    contador = 0;
    // contador++;
    // contador+= 1;
    document.getElementById("contador").innerHTML= contador;
    console.log(contador);
}