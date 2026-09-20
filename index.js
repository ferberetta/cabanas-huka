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

// --- Asistente Virtual (Chatbot) ---
function sendMessage() {
    const input = document.getElementById('userInput');
    if (!input) return;

    const messageText = input.value.trim();
    if (messageText === '') return;

    const chatMessages = document.getElementById('chatMessages');

    // Mensaje del usuario
    const userBubble = document.createElement('p');
    userBubble.className = 'user-msg';
    userBubble.textContent = messageText;
    chatMessages.appendChild(userBubble);

    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Respuesta automática
    setTimeout(() => {
        const botBubble = document.createElement('p');
        botBubble.className = 'bot-msg';

        const lowerMsg = messageText.toLowerCase();
        if (lowerMsg.includes('precio') || lowerMsg.includes('reserva') || lowerMsg.includes('valor')) {
            botBubble.textContent = 'Puedes revisar e iniciar tu reserva en la sección "Reservas y Contacto" del menú superior.';
        } else if (lowerMsg.includes('ubicacion') || lowerMsg.includes('donde') || lowerMsg.includes('llegar')) {
            botBubble.textContent = 'Nos encontramos en la zona de Pucón, Región de La Araucanía. ¡El mapa superior te muestra la ruta!';
        } else {
            botBubble.textContent = '¡Gracias por escribirnos! Un encargado del equipo de Cabañas Huka te responderá a la brevedad.';
        }

        chatMessages.appendChild(botBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}