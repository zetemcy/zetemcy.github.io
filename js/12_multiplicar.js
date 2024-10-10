function generarTabla(params) {
    const tablaSelecionada = document.getElementById("tabla").value;
    document.getElementById("resultado").innerHTML="";
    for (let num1 = 1; num1 < 11; num1++) {
        let resultado = tablaSelecionada * num1;
        let mensaje = `${tablaSelecionada} * ${num1} = <strong>${resultado}</strong><br>`
        document.getElementById("resultado").innerHTML += mensaje;
        console.log(mensaje);
    }
    
}