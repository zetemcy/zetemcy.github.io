function calcularPeso(params) {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultadoIMC = document.getElementById("mostrar");
    let imc = peso / (altura ** 2);
    let timc = imc.toFixed(2);
    let stat="";
    if (timc <=18.5) {
        stat="Insuficiencia Ponderal";
    }
    if (timc => 18.5 && timc <= 24.9) {
        stat="Intervalo normal";
    }
    if (timc => 25.0 && timc <= 29.9) {
        stat="Sobrepeso";
    }
    if (timc => 30.0 && timc <= 34.9) {
        stat="Obesidad clase I";
    }
    if (timc => 35.0 && timc <= 39.9) {
        stat="Obesidad clase II";
    }
    
    resultadoIMC.innerHTML = `Su IMC es ${timc} y su clasificacion corporal es de: ${stat}`;
}