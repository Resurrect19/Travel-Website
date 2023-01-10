let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', function(){
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type= "number"]').forEach(inputnumber => {
    inputnumber.oninput = () => {
        if(inputnumber.value.length > inputnumber.maxlength){
            inputnumber.value = inputnumber.value.slice(0, inputnumber.maxlength);
        }
    }
})