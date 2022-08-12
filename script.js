const toggleThemeBtn = document.getElementById('toggleThemeBtn')

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})