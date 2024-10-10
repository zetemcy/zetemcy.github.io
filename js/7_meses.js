function calcularMeses(params) {
    const anioActual= new Date().getFullYear();
    const mesActual = new Date().getMonth();
    const AnioNatal = document.getElementById("meses").value;
    const mes = 12;
    const calcAnio= anioActual - AnioNatal;
    const mesesTotales = calcAnio * mes;
    const Total= mesesTotales+mesActual;
    console.log("Año Actual",anioActual);
    console.log("Año de nacimiento",AnioNatal);
    console.log("Total de Años",calcAnio)
    console.log("Meses Totales",mesesTotales);
    console.log("Meses Trascurridos",mesActual)
    document.getElementById("mostrar").innerHTML=`los meses son: ${Total} meses`
    console.log("Meses hasta el momento",Total)
}