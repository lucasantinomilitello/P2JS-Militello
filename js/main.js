// Bienvenida

// Pidiendo nombre al usuario: 
let nombreIngresado = prompt("Ingrese su nombre aquí por favor:");

// Función para verificar si el nombre contiene números o símbolos
function nombreNumerosOSimbolos(texto) {
    return /[^\w\s]/.test(texto);
}

while (nombreIngresado === "" || nombreIngresado === null || nombreNumerosOSimbolos(nombreIngresado)) {
    if (nombreIngresado === null) {
        alert("ERROR! Para poder continuar le pedimos que ingrese un nombre válido sin números ni símbolos.");
    } else if (nombreIngresado === "") {
        alert("Le pedimos por favor que nos diga su nombre para poder continuar.");
    } else {
        alert("ERROR! El nombre no puede contener números ni símbolos.");
    }
    nombreIngresado = prompt("Ingrese su nombre nuevamente por favor:");
}

alert("¡Hola, " + nombreIngresado + "! ¡Bienvenido a Stallion Energy!");
console.log(nombreIngresado);


// Pidiendo la edad al usuario ingresante.
let edad = prompt("Para poder continuar, le pedimos que ingrese su edad:");

// Validando la edad ingresada
if (edad === null) {
    alert("ERROR! Por favor, inténtelo nuevamente ingresando su edad para continuar.");
} else {
    while (isNaN(edad) || edad === "") {
        alert("Por favor, ingrese su edad en números:");
        edad = prompt("Ingrese su edad con números:");
    }

    // Convirtiendo la edad a número entero.
    edad = parseInt(edad);

    // Verificando si es mayor de edad para poder ingresar al sitio.
    if (edad < 18) {
        alert("Lo siento, el acceso está restringido a mayores de 18 años.");
    } else {
        alert("Bienvenido, a continuación verá el catálogo de nuestros productos.");
        
        // Catalogo de Stallion Energy:
        let opcion;

        do {
            opcion = prompt(`Selecciona la siguiente marca:
            1. Monster Energy
            2. Speed
            3. Red Bull
            4. Prime
            0. Salir`);

            opcion = parseInt(opcion);
            switch (opcion) {
                case 1:
                    alert("A continuación verá nuestro catálogo de Monster Energy. ¡Gracias por confiar en nosotros!");
                    break;
                case 2:
                    alert("A continuación verá nuestro catálogo de Speed. ¡Gracias por confiar en nosotros!");
                    break;
                case 3:
                    alert("A continuación verá nuestro catálogo de Red Bull. ¡Gracias por confiar en nosotros!");
                    break;
                case 4:
                    alert("A continuación verá nuestro catálogo de Prime. ¡Gracias por confiar en nosotros!");
                    break;
                case 0:
                    alert("Gracias por visitarnos, ¡esperamos verte pronto!");
                    break;
                default:
                    alert("Opción no válida, por favor intente nuevamente.");
            }
        } while (isNaN(opcion) || opcion < 0 || opcion > 4);
    }

    console.log(opcion);
}
