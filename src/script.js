const backToTop = document.querySelector('.back2top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    }
    else {
        backToTop.classList.remove('active');
    }
})