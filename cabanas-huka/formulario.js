// --- Control de Sesión ---
document.addEventListener("DOMContentLoaded", function () {
    const usuarioSesion = localStorage.getItem("usuarioHuka");
    const menuAcceso = document.getElementById("menuAcceso");
    const menuCerrarSesion = document.getElementById("menuCerrarSesion");

    if (usuarioSesion) {
        if (menuAcceso) menuAcceso.style.display = "none";
        if (menuCerrarSesion) menuCerrarSesion.style.display = "inline-block";
    } else {
        if (menuAcceso) menuAcceso.style.display = "inline-block";
        if (menuCerrarSesion) menuCerrarSesion.style.display = "none";
    }
});

function cerrarSesionUsuario() {
    localStorage.removeItem("usuarioHuka");
    localStorage.removeItem("nombreHuka");
    alert("Has cerrado sesión correctamente.");
    window.location.href = "./login.html";
}

// --- Validaciones y Envío del Formulario ---
document.addEventListener("DOMContentLoaded", function () {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const personas = document.getElementById("personas");
    const boton = document.getElementById("btnValidar");

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorPersonas = document.getElementById("errorPersonas");
    const mensajeExito = document.getElementById("mensajeExito");

    if (boton) {
        boton.addEventListener("click", function () {

            // 1. Validar Nombre
            if (nombre.value.trim() == "") {
                errorNombre.textContent = "Debes ingresar tu nombre";
            } else {
                errorNombre.textContent = "";
            }

            // 2. Validar Email con @ y .com
            const correo = email.value.toLowerCase().trim();
            if (!correo.includes("@") || !correo.endsWith(".com")) {
                errorEmail.textContent = "El email debe incluir @ y terminar en .com";
            } else {
                errorEmail.textContent = "";
            }

            // 3. Validar Teléfono (exactamente 9 dígitos y solo números)
            const numTelefono = telefono.value.trim();

            if (numTelefono.length != 9 || isNaN(numTelefono)) {
                errorTelefono.textContent = "Ingresa exactamente 9 números";
            } else {
                errorTelefono.textContent = "";
            }

            // 4. Validar Personas
            if (personas.value.trim() == "" || personas.value < 1) {
                errorPersonas.textContent = "Ingresa al menos 1 persona";
            } else {
                errorPersonas.textContent = "";
            }

            // 5. Redirección a WhatsApp si todo está bien
            if (nombre.value.trim() != "" && correo.includes("@") && correo.endsWith(".com") && numTelefono.length == 9 && !isNaN(numTelefono) && personas.value >= 1) {
                
                mensajeExito.textContent = "¡Redirigiendo a WhatsApp...";

                const numeroEmpresa = "56981800828"; 
                
                const texto = "Hola Cabañas Huka, quiero solicitar una reserva:\n" +
                              "- Nombre: " + nombre.value + "\n" +
                              "- Correo: " + correo + "\n" +
                              "- Teléfono: +56" + numTelefono + "\n" +
                              "- Huéspedes: " + personas.value;

                window.open("https://wa.me/" + numeroEmpresa + "?text=" + encodeURIComponent(texto), "_blank");

            } else {
                mensajeExito.textContent = "";
            }

        });
    }
});