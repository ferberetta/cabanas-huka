// --- Protección de Ruta y Gestión de Sesión ---
document.addEventListener("DOMContentLoaded", function () {
    const usuarioSesion = localStorage.getItem("usuarioHuka");
    const menuAcceso = document.getElementById("menuAcceso");
    const menuCerrarSesion = document.getElementById("menuCerrarSesion");
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");
    const panelAdmin = document.getElementById("panelAdmin");

    // 1. Verificar si hay usuario logueado
    if (usuarioSesion) {
        if (menuAcceso) menuAcceso.style.display = "none";
        if (menuCerrarSesion) menuCerrarSesion.style.display = "inline-block";

        // 2. Verificar si es Administrador (correo termina en @huka.com)
        if (usuarioSesion.toLowerCase().endsWith("@huka.com")) {
            if (mensajeBienvenida) mensajeBienvenida.textContent = "Bienvenido/a Administrador/a (" + usuarioSesion + ")";
            if (panelAdmin) panelAdmin.style.display = "block";
        } else {
            // Usuario común intentando entrar al panel
            alert("Acceso denegado: Esta sección es exclusiva para administradores de Cabañas Huka.");
            window.location.href = "./index.html";
        }
    } else {
        // No hay sesión activa
        if (menuAcceso) menuAcceso.style.display = "inline-block";
        if (menuCerrarSesion) menuCerrarSesion.style.display = "none";
        
        alert("Debes iniciar sesión con una cuenta de administrador para acceder.");
        window.location.href = "./login.html";
    }
});

function cerrarSesionUsuario() {
    localStorage.removeItem("usuarioHuka");
    localStorage.removeItem("nombreHuka");
    alert("Has cerrado sesión correctamente.");
    window.location.href = "./login.html";
}