/// Codigo que se ejecuta del lado del cliente.

// Recupera el boton a traves del id colocado en la pagina web.
const btnEncender = document.getElementById("btnEncender");
const btnApagar = document.getElementById("btnApagar");

// Aniade el evento al boton enceder y apagar de nuestra pagina web.
btnEncender.addEventListener("click", enceder);
btnApagar.addEventListener("click", apagar);

/// Funcion que llama al metodo encender del servidor
/// lo que permite al usuario encender el led.
function enceder(evento){
    fetch("/encender", {method : "POST"})
    .then(function(respuesta){
        if(respuesta.ok)
            console.log("OK");
        throw new Error("Error de conexion");
    }).catch(function(error){
        console.log(error);
    });
}

/// Funcion que llama al metodo apagar del servidor
/// lo que permite al usuario apagar el led.
function apagar(evento){
    fetch("/apagar", {method : "POST"})
    .then(function(respuesta){
        if(respuesta.ok)
            console.log("OK");
        throw new Error("Error de conexion");
    }).catch(function(error){
        console.log(error);
    });
}