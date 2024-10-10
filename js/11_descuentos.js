function calcularDescuento(params) {
    const valorProducto = document.getElementById("producto").value;
    let descuento= 10;
    if (valorProducto >= 10000 && valorProducto <=200000) {
        let resultado = valorProducto - (valorProducto * (descuento/100));
        console.log("valor descuento"+ resultado);
        document.getElementById("mostrar").innerHTML=`El descuento aplicado es de ${descuento}% tu compra es total es de ${resultado}`;
    }else{
        document.getElementById("mostrar").innerHTML=`Tu compra no aplica para desceunto tu pago total es de: ${valorProducto}`;
    }
}