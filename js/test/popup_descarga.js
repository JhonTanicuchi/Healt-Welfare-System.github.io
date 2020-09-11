

var fondoPopupTest = document.getElementById('fondo-popup-descarga'),
	popupTest = document.getElementById('popup-descarga');

function descargarPdf() {

    fondoPopupTest.classList.add('active');
    popupTest.classList.add('active');

    setTimeout(function(){ genPDF() }, 5200);
}


function descargaCompleta() {
    
    fondoPopupTest.classList.remove('active');
    popupTest.classList.remove('active');
}

