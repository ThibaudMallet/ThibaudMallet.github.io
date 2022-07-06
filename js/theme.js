// Création de l'objet qui permet de changer de theme

const theme = {
    init: function() {
        const btnTheme = document.getElementById('btnTheme')
        btnTheme.addEventListener('click', theme.changeTheme);
    },
    changeTheme: function() {
        const bodyElement = document.querySelector('body');
        if (bodyElement.classList.contains('theme-clair')) {
            bodyElement.classList.remove('theme-clair')
        } else {
            bodyElement.classList.add('theme-clair');
        }
        if (btnTheme.classList.contains('btnThemeChangeBackground')) {
            btnTheme.classList.remove('btnThemeChangeBackground')
        } else {
            btnTheme.classList.add('btnThemeChangeBackground');
        }   
    }
}