const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

function checkRadio1(){
    document.getElementsByClassName("radio1").checked = true;
}

function uncheckRadio1(){
    document.getElementsByClassName("radio1").checked = true;
}
function checkRadio2(){
    document.getElementsByClassName("radio2").checked = true;
}

function uncheckRadio2(){
    document.getElementsByClassName("radio2").checked = true;
}



document.getElementById("year").innerHTML = new Date().getFullYear();
