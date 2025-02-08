// Toggle Dark/Light Mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        this.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        this.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});