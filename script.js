function showMenu() {
    const mobileMenu = document.getElementById('toggleMenu');

    if (mobileMenu.classList.contains('--hidden')) {
        mobileMenu.classList.remove('--hidden');
    } else {
        mobileMenu.classList.add('--hidden');
    }
    
}