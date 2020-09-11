/* ANIMACION MENU TRANSFORM */

function transform() {
    var icon = document.getElementById("icono-menu")
    icon.classList.toggle("activo")
}




var menuContent = document.querySelector('.menu');


  //Scroll Efect

 var prevScrollPos = window.pageYOffset;

window.onscroll = () => {
  
  
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
   
    menuContent.style.transition = '0.5s';
   

  }else{
    menuContent.style.top = '-75px';
    
    menuContent.style.transition = '0.5s';
   

  }
  prevScrollPos = currentScrollPos;
  
 
  var arriba = window.pageYOffset;

 
  if(arriba <= 100){
    menuContent.style.borderBottom = 'none';
    menuContent.style.background = 'transparent';
    

  }
  else{
    menuContent.style.borderBottom = '3px solid #00adb9';
    menuContent.style.background = '#000000d2';
  }
  
}

/* ACTIVACION Y ANIMACION DE SONIDO */

var ondas = document.getElementById("ondasSonido")
var iconoSonido = document.getElementById("icon");


 function play() {
 var audio = document.getElementById('audio');


 if (audio.paused) {
   audio.play();
   ondas.style.opacity = "100%";
   iconoSonido.classList.remove("fa-volume-mute");
   iconoSonido.classList.add("fa-volume-up");

  }else{
      audio.pause();
      audio.currentTime = 0
      ondas.style.opacity = "0";
      iconoSonido.classList.add("fa-volume-mute");
      iconoSonido.classList.remove("fa-volume-up");
  }
}

audio.addEventListener("ended", function(){
  ondas.style.opacity = "0";
  iconoSonido.classList.add("fa-volume-mute");
  iconoSonido.classList.remove("fa-volume-up");
});







/* JQUERY */


/* SCROLL SUAVE */

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top + 30
  }, 2500);
});

/* DESACTIVAR COPY PASTE */

$("body").on('cut copy paste', function (e) {
  event.preventDefault();
});

$("body").on('contextmenu', function (e) {
  return false;
});