// Funcion para rellenar el formulario
let inicioDeSesion = false;

// If para que cuando entren a otros sitios no les salte el formulario de nuevo
if (inicioDeSesion === true) {
    alert("¡Ya estás registrado!");
} else {
    // Bucle para comprobar que el formulario esté completo
    // Utilizamos do-while para garantizar que el código se ejecute al menos una vez
    alert("Hola, bienvenido a nuestro sitio. Por favor, regístrese para continuar en el sitio.");
    do {
        // Saludo de bienvenida
        var nombreUsuario = prompt("Ingrese su nombre");
        var apellidoUsuario = prompt("Ingrese su apellido");

        // Verificar si se han ingresado datos en nombre y apellido
        if (nombreUsuario.length === 0 || apellidoUsuario.length === 0) {
            alert("Nombre y apellido son obligatorios para continuar navegando en el sitio.");
        } else {
            // El formulario está completo, marcamos inicioDeSesion como true para continuar
            inicioDeSesion = true;

            // Felicitamos por completar el formulario
            alert(`¡Felicitaciones ${nombreUsuario} ${apellidoUsuario}! Has sido registrado. Disfruta consiguiendo los mejores precios.`);
        }
    } while (!inicioDeSesion);
}



function operacionesSimples() {
    let num1 = parseFloat(prompt("Ingrese un numero"));
    while (isNaN(num1)) {
        alert("Por favor, ingrese un número válido.");
        num1 = parseFloat(prompt("Ingrese un numero"));
    }

    let operacion = prompt("Ingrese el tipo de operacion +(suma) -(resta) *(multiplicacion) /(division)");
    while (!["+", "-", "*", "/"].includes(operacion)) {
        alert("Por favor, ingrese una operación válida.");
        operacion = prompt("Ingrese el tipo de operacion +(suma) -(resta) *(multiplicacion) /(division)");
    }

    let num2 = parseFloat(prompt("Ingrese otro numero"));
    while (isNaN(num2)) {
        alert("Por favor, ingrese un número válido.");
        num2 = parseFloat(prompt("Ingrese otro numero"));
    }

    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("No se puede dividir por cero. Por favor, ingrese otro número.");
                operacionesSimples();
                return;
            }
            break;
        default:
            alert("Operacion no valida");
            resultado = "indefinido";
    }

    alert("Tu resultado es " + resultado);
}

function ofrecerCalculadora() {
    preguntaCalculadora = prompt("Queres que resuelva algunas operaciones simples?(SI/NO)").toLowerCase();
}

ofrecerCalculadora();

if (preguntaCalculadora === "si") {
    do {
        operacionesSimples();
        ofrecerCalculadora();
    } while (preguntaCalculadora === "si");
} else {
    alert("Ok, pasa al sitio.")
}