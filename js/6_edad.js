function calcularEdad(params) {
    const anioActual = new Date().getFullYear();
    const anioNatal = document.getElementById("edad").value;
    console.log(anioActual);
    console.log(anioNatal);
    const redad = anioActual - anioNatal;
    document.getElementById("resultado").innerHTML = `Tu edad es: ${redad} años`
    console.log("Tu tienes: ", redad);
}