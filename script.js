const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.getElementById("year").innerHTML = new Date().getFullYear();


window.onscroll = function(){
    const scrollPosition = window.scrollY;
    const element = document.getElementById("fading");

    if (scrollPosition > 50){
        element.classList.add("fadeUp");
    }
    else{
        element.classList.remove("fadeUp");
    }
}
