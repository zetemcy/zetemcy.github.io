function convertir(params) {
    const tasaCambio = 3864;
    const pesos = document.getElementById("pesos").value;
    const dolares = pesos / tasaCambio;
    document.getElementById("resultados").innerHTML= `${pesos} son: ${dolares.toFixed(2)}`;
    console.log("pesos ->", dolares);
}
function convertir2(params) {
    const tasaCambio = 3864;
    const dolar = document.getElementById("dolar").value;
    const pesosR = dolar * tasaCambio;
    document.getElementById("resultado").innerHTML= `${dolar} son: ${pesosR.toFixed(0)}`;
    console.log("pesos ->", pesosR);
}