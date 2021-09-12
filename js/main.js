var burger = document.querySelector('.burger');
var hm = document.querySelector('.header__menu');

burger.addEventListener("click", function(){
    hm.classList.toggle("active");
    burger.classList.toggle("active");
});