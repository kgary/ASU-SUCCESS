document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                this.textContent = 'Show Instructions';
            } else {
                content.style.display = 'block';
                this.textContent = 'Hide Instructions';
            }
        });
    });
});
