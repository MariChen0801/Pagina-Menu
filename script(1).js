const enlaces = document.querySelectorAll(".enlaceMovil");

enlaces.forEach((enlace) => {
    let posicion = 0;
    let velocidad = 8;

    function moverEnlace(){
        if(posicion >= window.innerWidth){
            posicion =- enlace.offsetWidth;
        }
        else{
            posicion += velocidad;
        }
        enlace.style.left = posicion + "px";

        requestAnimationFrame(moverEnlace);
    }

    moverEnlace();
});