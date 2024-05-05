function CapturarMensaje(){
    let nombre = document.getElementById("nombretxt").value;
    let correo = document.getElementById("mailtxt").value;
    let mensaje = document.getElementById("msgtxt").value;
    console.log(nombre);
    console.log(correo);
    console.log(mensaje);
    let flag = false;
    if(nombre.trim() == ""){
        alert("Ingrese un nombre valido por favor");
        return;
    }

    if(correo.trim() == ""){
        alert("Ingrese un correo valido por favor");
        return;
    }

    if(mensaje.trim() == ""){
        alert("Ingrese un mensaje valido por favor");
        return;
    }
    alert("Gracias por tu mensaje, "+nombre+"! voy a responderte pronto.");
}