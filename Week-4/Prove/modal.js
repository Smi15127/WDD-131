const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);
console.log('button clicked');

function openModal(e) {
// Code to show modal  - Use event parameter 'e'  
    if (e.target.tagName !== 'IMG') return;

    const fullImgSrc = e.target.dataset.full;   
    const alttext = e.target.full;

    modalImage.src = fullImgSrc
    modalImage.alt = alttext;

    modal.showModal();
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
       