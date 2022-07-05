// Creation d'une fonction pour changer de theme

function changeTheme() {
    // Selection du body
    const bodyElement = document.querySelector('body');

    // Si le body contient la classe theme-clair alors on l'enleve
    if (bodyElement.classList.contains('theme-clair')) {
        bodyElement.classList.remove('theme-clair')
    } else {
        // Sinon on l'ajoute
        bodyElement.classList.add('theme-clair');
    }
}