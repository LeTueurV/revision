document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const imageSrc = this.querySelector('img').src;
            const description = this.querySelectorAll('p');

            modalTitle.textContent = title;
            modalImage.src = imageSrc;
            modalDescription.innerHTML = '';

            description.forEach(paragraph => {
                modalDescription.innerHTML += `<p>${paragraph.innerHTML}</p>`;
            });

            modal.style.display = 'flex';
            modalImage.style.maxWidth = '100%';
            modalImage.style.height = 'auto';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});