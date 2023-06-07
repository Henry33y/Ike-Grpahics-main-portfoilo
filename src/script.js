const backToTop = document.querySelector('.back2top');
const header= document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    }
    else {
        backToTop.classList.remove('active');
    }
    if(window.scrollY > 80){
        header.classList.add('whitebg');
    }
    else{
        header.classList.remove('whitebg');

    }
})
console.log (header);