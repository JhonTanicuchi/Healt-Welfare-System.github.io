
var fondoPopup = document.getElementById('fondo-popup'),
	popup = document.getElementById('popup')
	

window.onload=function() {
    
    setTimeout(function(){
        fondoPopup.classList.add('active');
    popup.classList.add('active');
    document.body.classList.add('scroll')

    }, 1000);

}



function aceptar(){
	fondoPopup.classList.remove('active');
    popup.classList.remove('active');
    modal2()
};


var fondoPopup2 = document.getElementById('fondo-popup-2'),
	popup2 = document.getElementById('popup-2')
	

function cerrar(){
	
	fondoPopup2.classList.remove('active');
    popup2.classList.remove('active');
    document.body.classList.remove('scroll')
    mute()
  
  
};

function cerrarAsistente(){
	fondoPopup.classList.remove('active');
    popup.classList.remove('active')
    modal2();
};


function modal2() {
    fondoPopup2.classList.add('active');
    popup2.classList.add('active');
}


function mute(){
    audio.pause();
    audio.currentTime = 0
    ondas.style.opacity = "0%";
    iconoSonido.classList.add("fa-volume-mute");
    iconoSonido.classList.remove("fa-volume-up");
}

function presentacion() {
    
    let botonAceptar = document.getElementById("botonAceptar-Modal")
    let TextoAceptar = document.getElementById("texto-Modal-Aceptar")
    let TextoPresentacion = document.getElementById("texto-Modal-Presentacion")
    let botonPresentacionModal = document.getElementById("botonPresentacion-Modal")

    function mostrarbotonAceptar() {
        TextoAceptar.classList.toggle("animacion-Modal")
        TextoAceptar.style.display="block"

        botonAceptar.classList.toggle("animacion-Modal")
        botonAceptar.style.display="block"
    }
    
    setTimeout(function(){ mostrarbotonAceptar() }, 100);

    TextoPresentacion.style.display="none"
    botonPresentacionModal.style.display="none"
}


