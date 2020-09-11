var fondoPopupActivar = document.getElementById('fondo-popup-Activar-Asistente'),
	popupActivar = document.getElementById('popup-Activar-Asistente')

window.onload=function() {
    
    
    fondoPopupActivar.classList.add('active');
    popupActivar.classList.add('active');
    document.body.classList.add('scroll')

    

}


function modalActivarAsistente(){

    fondoPopupActivar.classList.remove('active');
    popupActivar.classList.remove('active');
	document.body.classList.remove('scroll')

    play()

    valorActivar=true
	
};


function cerrarModalActivar(){

    fondoPopupActivar.classList.remove('active');
    popupActivar.classList.remove('active');
	document.body.classList.remove('scroll')
};


