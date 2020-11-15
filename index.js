console.log("hu");
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
// navigation = document.getElementById('navigation');
apply = document.querySelector('apply');


burger.addEventListener('click', () =>
 {
    navbar.classList.toggle('h-res');
    // navigation.classList.toggle('v-class-res');
    apply.classList.toggle('v-class-res');
});