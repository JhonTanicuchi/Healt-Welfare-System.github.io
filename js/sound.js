
function saludo(){
    var audiosAsistente = document.getElementById("audio");
    audiosAsistente.setAttribute("src", audios[0])
    play()
}

var valorSound = 1;

function desactivar(){
    var ondas = document.getElementById("ondasSonido")
    var iconoSonido = document.getElementById("icon");

    audio.pause();
    audio.currentTime = 0
    ondas.style.opacity = "0";
    iconoSonido.classList.add("fa-volume-mute");
    iconoSonido.classList.remove("fa-volume-up");
}


var valorActivar=false;

function conoceVivi() {
    var audiosAsistente = document.getElementById("audio");
    
    audiosAsistente.setAttribute("src", audios[1])
    play()

    valorActivar=true
}


function presentarTest() {

    if (valorActivar == true) {
        var audiosAsistente = document.getElementById("audio");
    
    audiosAsistente.setAttribute("src", audios[2])
    play()
    }
    
}

function soundIndex() {

    if(valorActivar == true){
        var audiosAsistente = document.getElementById("audio");
    
        audiosAsistente.setAttribute("src", audios[3])
        play()
    }
    
}




var valorSoundTest = 5 ;

function soundTestInicio() {

    if (valorActivar == true) {

    var audiosAsistente = document.getElementById("audio");
    
    audiosAsistente.setAttribute("src", audios[valorSoundTest])
    play()
    valorSoundTest++;
    }
}


function soundTestDatos() {
    var audiosAsistente = document.getElementById("audio");

    if (valorActivar == true) {
    if (valorSoundTest == 7){ 
        audiosAsistente.setAttribute("src", audios[valorSoundTest])
        play()
    valorSoundTest++;

    crearAudio2()

    }else if(valorSoundTest == 6) {
        audiosAsistente.setAttribute("src", audios[valorSoundTest])
        play()
    }
}
}


function soundTestPreguntas() {
    var audiosAsistente = document.getElementById("audio");
    let contenedorAudios=document.getElementById("contenedor-Audios")
    let audio2 =document.getElementById("audio2")
    

    if (valorActivar == true) {
    if (boton == (preguntas.length) + 1) {


        contenedorAudios.removeChild(audio2)
    
        if (porcentaje >= 0 && porcentaje <= 25) {
            valorSoundTest=27;
        } else if (porcentaje > 25 && porcentaje <= 50) {
            valorSoundTest=28;
        } else if (porcentaje > 50 && porcentaje <= 100) {
            valorSoundTest=29;
        }
        audiosAsistente.setAttribute("src", audios[valorSoundTest])
        play()
        valorSoundTest=30;

        audio.addEventListener("ended", function(){
            crearAudioFin()
        });

    }else{
        audiosAsistente.setAttribute("src", audios[valorSoundTest])
        play()
    valorSoundTest++;

    }
}
}


function soundTestDescargar() {
    var audiosAsistente = document.getElementById("audio");
    if (valorActivar == true) {
    audiosAsistente.setAttribute("src", audios[31])
    play()
    }
}


function soundTestFin() {
    var audiosAsistente = document.getElementById("audio");
    if (valorActivar == true) {
    audiosAsistente.setAttribute("src", audios[32])
    play()
    }
}



function crearAudio2() {
    let contenedorAudios=document.getElementById("contenedor-Audios")

    if (valorActivar == true) {
    let audio2=document.createElement("audio")
    audio2.setAttribute("src",audios[33])
    audio2.setAttribute("class","ocultar")
    audio2.setAttribute("id","audio2")
    audio2.setAttribute("controls","controls")
    contenedorAudios.appendChild(audio2)

    play2(audio2)
    }
}


function crearAudioFin() {
    let contenedorAudios=document.getElementById("contenedor-Audios")

    if (valorActivar == true) {
    let audioFin=document.createElement("audio")
    audioFin.setAttribute("src",audios[30])
    audioFin.setAttribute("class","ocultar")
    audioFin.setAttribute("id","audioFin")
    audioFin.setAttribute("controls","controls")
    contenedorAudios.appendChild(audioFin)

    play3(audioFin)
    }
}



var ondas = document.getElementById("ondasSonido")
var iconoSonido = document.getElementById("icon");


 function play2(audio2) {

 if (audio2.paused) {
    audio2.play();
   ondas.style.opacity = "100%";
   iconoSonido.classList.remove("fa-volume-mute");
   iconoSonido.classList.add("fa-volume-up");

  }else{
    audio2.pause();
    audio2.currentTime = 0
      ondas.style.opacity = "0";
      iconoSonido.classList.add("fa-volume-mute");
      iconoSonido.classList.remove("fa-volume-up");
  }
}


   function play3(audioFin) {
    if (audioFin.paused) {
        audioFin.play();
        ondas.style.opacity = "100%";
        iconoSonido.classList.remove("fa-volume-mute");
        iconoSonido.classList.add("fa-volume-up");
     
       }else{
        audioFin.pause();
        audioFin.currentTime = 0
           ondas.style.opacity = "0";
           iconoSonido.classList.add("fa-volume-mute");
           iconoSonido.classList.remove("fa-volume-up");
       }
     
       audioFin.addEventListener("ended", function(){
       ondas.style.opacity = "0";
       iconoSonido.classList.add("fa-volume-mute");
       iconoSonido.classList.remove("fa-volume-up");
     });
   }
   
    
