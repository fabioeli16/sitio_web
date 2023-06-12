//BARRA DE NAVEGACION---------------------------------------------------------------
var miNav;
var links;
var botones;
var contenedorLinks;

document.addEventListener("DOMContentLoaded", function() {
    miNav = document.getElementById("miBarra");
    links = document.getElementsByClassName('miLink');
    botones = document.getElementsByClassName('barra-boton');
    contenedorLinks = document.getElementsByClassName('contenedorLink');
    console.log("------------");
    console.log(contenedorLinks);
    console.log("------------");

    console.log(links);
    
});

document.addEventListener("scroll", (event) => {
    posicionEjeY = window.scrollY;
    //*
    if(posicionEjeY<25){
        if(!miNav.classList.contains("onTop-nav")){
            miNav.classList.add("onTop-nav");
            miNav.classList.remove("offTop-nav");

            for(let elemento of links){
                elemento.classList.add("onTop-a");
                elemento.classList.remove("offTop-a");
            }

            for(let elemento of botones){
                elemento.classList.add("onTop-boton");
                elemento.classList.remove("offTop-boton");
            }

            for(let elemento of contenedorLinks){
                elemento.classList.remove("offTop-contenedor-links");
            }

        }

    }else if (posicionEjeY>25){
        if(!miNav.classList.contains("offTop-nav")){
            miNav.classList.add("offTop-nav");
            miNav.classList.remove("onTop-nav");
            for(elemento of links){
                elemento.classList.add("offTop-a");
                elemento.classList.remove("onTop-a");
            }

            for(let elemento of botones){
                elemento.classList.add("offTop-boton");
                elemento.classList.remove("onTop-boton");
            }

            for(let elemento of contenedorLinks){
                elemento.classList.add("offTop-contenedor-links");
            }
        }
    }
    


});



