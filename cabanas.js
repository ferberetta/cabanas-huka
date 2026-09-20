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