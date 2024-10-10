function validar(params) {
    const edad = document.getElementById("Edad").value;
    let mensaje =""
    if (edad >= 18 && edad <= 99) {
        mensaje="Usted es moyor de edad y puedo elegir candidato";
    }else if(edad >= 110){
        mensaje="Udste esta ingresando una edad muy longeva no es posible que este vivo";
    }else if (edad <=0 || edad <=10){
        mensaje="No es posible que ud pueda votar";
    }else if (edad < 0){
        mensaje = "Ingrese una edad correcta NO Negativa";
    }else{
        mensaje="Usted es mennor de edad y no tiene aun los derechos para elegir candidato.";
    }
    document.getElementById("resultado").innerHTML= mensaje;
}