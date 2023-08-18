const openModalButton = document.getElementById('openModalButton');
const closeButton = document.getElementById('closeButton');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Call the functions directly
openModalButton.onclick = openModal;
closeButton.onclick = closeModal;