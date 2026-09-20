// Cambiar entre pestaña de Login y Registro
function mostrarTab(tab) {
    const sectionLogin = document.getElementById("sectionLogin");
    const sectionRegistro = document.getElementById("sectionRegistro");
    const btnTabLogin = document.getElementById("btnTabLogin");
    const btnTabRegistro = document.getElementById("btnTabRegistro");

    if (tab === 'login') {
        if (sectionLogin) sectionLogin.classList.add("active");
        if (sectionRegistro) sectionRegistro.classList.remove("active");
        if (btnTabLogin) btnTabLogin.classList.add("active");
        if (btnTabRegistro) btnTabRegistro.classList.remove("active");
    } else {
        if (sectionRegistro) sectionRegistro.classList.add("active");
        if (sectionLogin) sectionLogin.classList.remove("active");
        if (btnTabRegistro) btnTabRegistro.classList.add("active");
        if (btnTabLogin) btnTabLogin.classList.remove("active");
    }
}

// Lógica para registrar un usuario común
function registrarUsuario() {
    const nombreInput = document.getElementById("regNombre");
    const emailInput = document.getElementById("regEmail");
    const passInput = document.getElementById("regPass");
    const error = document.getElementById("errorRegistro");

    if (!nombreInput || !emailInput || !passInput) return;

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const pass = passInput.value.trim();

    if (nombre === "" || email === "" || pass === "") {
        if (error) error.textContent = "Por favor completa todos los campos.";
        return;
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
        if (error) error.textContent = "Ingresa un correo válido (debe incluir @ y terminar en .com).";
        return;
    }

    // Guardar datos en localStorage
    localStorage.setItem("usuarioHuka", email);
    localStorage.setItem("nombreHuka", nombre);
    if (error) error.textContent = "";

    alert("¡Registro exitoso! Redirigiendo a la página principal...");
    window.location.href = "./index.html";
}

// Lógica para iniciar sesión
function iniciarSesion() {
    const emailInput = document.getElementById("loginEmail");
    const passInput = document.getElementById("loginPass");
    const error = document.getElementById("errorLogin");

    if (!emailInput || !passInput) return;

    const email = emailInput.value.trim().toLowerCase();
    const pass = passInput.value.trim();

    if (email === "" || pass === "") {
        if (error) error.textContent = "Ingresa tu correo y contraseña.";
        return;
    }

    // Si es Administrador
    if (email.endsWith("@huka.com")) {
        localStorage.setItem("usuarioHuka", email);
        alert("Bienvenido Administrador.");
        window.location.href = "./admin.html";
    } 
    // Si es un Cliente registrado/común
    else if (email.includes("@") && email.endsWith(".com")) {
        localStorage.setItem("usuarioHuka", email);
        alert("Inicio de sesión exitoso.");
        window.location.href = "./index.html";
    } else {
        if (error) error.textContent = "Correo no válido. Recuerda que debe incluir @ y terminar en .com.";
    }
}