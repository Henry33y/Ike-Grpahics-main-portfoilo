const backToTop = document.querySelector('.back2top');
const header= document.querySelector('header');
const rightBtn=document.querySelector('.right-btn');
const leftBtn=document.querySelector('.left-btn');
const slider=document.querySelector('.myCarousel');
const navLinks=document.querySelectorAll('.mynav-link');
const navLinksAfter=document.querySelectorAll('.mynav-link::after');
const reveals=document.querySelectorAll('.reveal');

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
leftBtn.addEventListener('click',()=>{
    console.log('left');
    slider.style.transform='translateX(-300px)'
    
    
})
rightBtn.addEventListener('click',()=>{
    console.log('right');
    slider.style.transform='translateX(300px)'

})
for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click',()=>{
        for(let j=0;j<navLinks.length;j++){
            if(navLinks[j].classList.contains('clicked')){
                navLinks[j].classList.remove('clicked');
            }
        }
        navLinks[i].classList.add('clicked');
    })
}
const options = {
  threshold: 0.1 // Adjust this value as needed
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationName='reveal';
    }
    else{
        entry.target.style.animationName='';
    }
  });
}, options);

reveals.forEach(element => {
  observer.observe(element);
});
