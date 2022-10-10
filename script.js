const menuToggle = document.querySelector('.nav-mobile input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
}); 

nav.addEventListener('click', function(){
    nav.classList.remove('slide');
    document.getElementById("a").checked = false;
});