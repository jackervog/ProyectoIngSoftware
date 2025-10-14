document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionar los elementos del formulario modal que va a utilizar
    const modalOverlay = document.getElementById('motivo-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalForm = document.getElementById('motivo-form');
    const confirmButton = document.getElementById('btn-modal-confirmar');
    
    // Botones que abren la modal
    const btnRechazar = document.querySelector('.btnRechazar');
    const btnDevolver = document.querySelector('.btnDevolver');

    // Elementos para cerrar la modal
    const closeModalButton = document.querySelector('.modal-close-button');
    const cancelButton = document.querySelector('.btn-modal-cancelar');

    // 2. Función para abrir la modal
    const openModal = (action) => {
        // Personalizar la modal según la acción (Rechazar o Devolver)
        if (action === 'Rechazar') {
            modalTitle.textContent = 'La solicitud será rechazada';
            confirmButton.textContent = 'Rechazar';
            confirmButton.style.backgroundColor = 'red'; // Color del botón
        } else if (action === 'Devolver') {
            modalTitle.textContent = 'La solicitud será devuelta';
            confirmButton.textContent = 'Devolver';
            confirmButton.style.backgroundColor = 'orange'; // Color del botón
        }
        modalOverlay.classList.add('visible'); // Muestra la modal
    };

    // 3. Función para cerrar la modal
    const closeModal = () => {
        modalOverlay.classList.remove('visible');
    };

    // 4. Asignar eventos a los botones

    // Abrir modal al hacer clic en "Rechazar"
    btnRechazar.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que la página salte
        openModal('Rechazar');
    });

    // Abrir modal al hacer clic en "Devolver"
    btnDevolver.addEventListener('click', (event) => {
        event.preventDefault();
        openModal('Devolver');
    });

    // Cerrar modal con la 'X' o el botón "Comentarios"
    closeModalButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

    // Cerrar modal al hacer clic fuera de ella (en el fondo oscuro)
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // Manejar el envío del formulario (aquí puedes añadir lógica futura)
    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const comentarios = document.getElementById('motivo-comentarios').value;
        console.log(`Acción: ${confirmButton.textContent}, Comentarios: ${comentarios}`);
        alert('Acción registrada. Revisa la consola para ver los datos.');
        closeModal(); // Cierra la modal después de confirmar
    });
});