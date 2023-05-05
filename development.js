/*   ===== scroll sections active link =====   */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*   ===== sticky navbar  =====   */
const header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*   ===== remove toggle icioin and navbar when click navbar link (scroll)  =====   */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*   ===== toggle icon navbar  =====   */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click" , () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/*   ===== scroll reveal  =====   */
ScrollReveal({
     reset: true ,
     distance: '80px',
     duration : 2000,
     delay: 200
    });

    ScrollReveal().reveal('.home-content , .heading', { origin: 'top' }); 
    ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form', { origin: 'bottom' });  
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });      
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });     

    /*  typed js */
    const typed = new Typed('.multiple-text', {
        strings : ['အရက်သမား' , 'ဆေးသမား','ဘိန်းစား'],
        typeSpeed : 100,
        backSpeed : 100,
        backDelay :1000,
        loop : true,
    });
   

    