function calcular(params) {
    const numA = document.getElementById("numeroA").value;
    const numB = document.getElementById("numeroB").value;
    const operador = document.getElementById("operador").value;
    let resultado = 0;
    if (operador ==="suma") {
        resultado = parseInt(numA) + parseInt(numB);
    }
    if (operador ==="resta") {
        resultado = parseInt(numA) - parseInt(numB);
    }
    if (operador ==="divi") {
        resultado = parseInt(numA) / parseInt(numB);
    }
    if (operador ==="multi") {
        resultado = parseInt(numA) * parseInt(numB);
    }
    document.getElementById("mostrar").innerHTML=`El Resultado de: ${resultado}`
}