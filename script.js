document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const initialMessage = document.getElementById('initial-message');
    const confirmationMessage = document.getElementById('confirmation-message');
    const heartsContainer = document.getElementById('hearts-container');

    yesButton.addEventListener('click', function() {
        // Oculta el mensaje inicial
        initialMessage.style.display = 'none';
        // Muestra el mensaje de confirmación
        confirmationMessage.style.display = 'block';
        // Muestra la lluvia de corazones
        createHearts();
    });

    noButton.addEventListener('click', function() {
        // Aquí puedes manejar lo que sucede cuando se presiona "No"
        alert('Lo siento, esperaremos por tu respuesta.');
    });

    function createHearts() {
        const numHearts = 50; // Número de corazones a crear
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.width = `${Math.random() * 50 + 20}px`; // Tamaño aleatorio
            heart.style.height = heart.style.width; // Mantener proporciones
            heart.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
            heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración aleatoria
            heart.style.opacity = Math.random(); // Opacidad aleatoria
            heartsContainer.appendChild(heart);
        }
        heartsContainer.classList.remove('hidden');
    }
});
