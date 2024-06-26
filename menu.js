const btnMenu = document.getElementById('hamburguer-button')
const menu = document.getElementById('menu')


btnMenu.classList.add("hamburguer-button-js-enabled")
btnMenu.setAttribute("aria-expanded", "true")

menu.setAttribute("aria-hidden", "false")



btnMenu.addEventListener("click", function(){
    
    let expanded = this.getAttribute("aria-expanded") === "true" ? true : false

    if(expanded){
        menu.classList.add("menu-closed")

    } else {
        menu.classList.remove("menu-closed")
    }

    this.setAttribute("aria-expanded", !expanded)
    menu.setAttribute("aria-hidden", expanded)
})

const mediaQuery = window.matchMedia('(min-width: 891px)')

function handleMediaQueryChange(e){

    if(e.matches){

        menu.setAttribute("aria-hidden", "false")
        btnMenu.setAttribute("aria-expanded", "true")
        menu.classList.remove("menu-closed")
    } else {

        menu.setAttribute("aria-hidden", "true")
        btnMenu.setAttribute("aria-expanded", "false")
        menu.classList.add("menu-closed")
    }

}

mediaQuery.addEventListener('change', handleMediaQueryChange)
handleMediaQueryChange(mediaQuery)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});