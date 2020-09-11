/* VALIDACION DEL FORMULARIO */

function validar() {
  event.preventDefault();
  valorSoundTest=7;
  soundTestDatos()
  console.log(valorSoundTest)
  DATOS()
  presentacion.classList.toggle("ocultar");
  guardar.classList.toggle("ocultar");
  contenidoFrontal.style.transition = "all 1s";
  completo()
  crearPreguntas()
  crearProgreso()
  progreso();
}

function completo(){
  contenidoFrontal.classList.toggle("frontalCompleto")
  form.classList.toggle("ocultar");
  nota.classList.remove("ocultar");
}

function crearPreguntas() {

  var contenedorPreguntas = document.getElementById('preguntas-contenidoFrontal');
 
  while (contenedorPreguntas.firstChild) {
    contenedorPreguntas.removeChild(contenedorPreguntas.firstChild);
  }

  var img = document.createElement("img");
  img.setAttribute("src", imagenes[boton]);
  img.setAttribute("data-aos", "fade-zoom-in");
  img.setAttribute("data-aos-delay", "200");
  img.setAttribute("class", "img-preguntas-test");
  contenedorPreguntas.appendChild(img);
  
  
  var parrafo = document.createElement("p");
  parrafo.setAttribute("class", "preguntas-test");
  parrafo.setAttribute("data-aos", "fade-zoom-in");
  parrafo.setAttribute("data-aos-delay", "400");
  parrafo.innerHTML = preguntas[boton++];
  contenedorPreguntas.appendChild(parrafo);

}


function animacionPreguntas() {
  contenidoFrontal.classList.add("animacion-ventana-test");
}
function animacionPreguntasFalse() {
  contenidoFrontal.classList.remove("animacion-ventana-test");
}

/* DECLARACION DE DATOS EN VARIABLES */

function DATOS() {
  nombre = inputnombre.value.toUpperCase();
  celular = inputcelular.value;
  provin = selectprovin.value;
  canto = selectcanton.value;


  /* MOSTRAR DATOS INGRESADOS CONSOLA */

  console.log(nombre);
  console.log(celular);
  console.log(provin);
  console.log(canto);
}

/* CONFIGURACION DE HORA Y FECHA*/
function hora() {
  n = new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  h = n.getHours(); 
  min = n.getMinutes(); 

  if (h >= 12) {
    h = n.getHours() - 12; 
    horario = " PM";
  } else if (h < 12) {
    horario = " AM";
  }

  if (min >= 0 && min < 10) {
    ceromin = "0"; 
  } else {
    ceromin = "";
  }

  if (h >= 0 && h < 10) {
    ceroh = "0";
  } else {
    ceroh = "";
  }

  if (d >= 0 && d < 10) {
    cerod = "0";
  } else {
    cerod = "";
  }

  if (m >= 0 && m < 10) {
    cerom = "0";
  } else {
    cerom = "";
  }

  /* MOSTRAR FECHA CONSOLA */

  console.log(
    cerod +
      d +
      "/" +
      cerom +
      m +
      "/" +
      y +
      "  " +
      ceroh +
      h +
      ":" +
      ceromin +
      min +
      horario
  );
  console.log("");
}

/* PROCESO NEXT PREGUNTA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

  /* BONTON VERDADERO */
  
  function click1() {
    botonV++; 
   animacionPreguntas()
   crearPreguntas()
   setTimeout(function(){ animacionPreguntasFalse(); }, 700);
   progreso()
  
    /* CONSOLA */
  
    console.log("Pregunta # " + (boton - 1));
    console.log("Valor = " + valor1);
    console.log("");
  
    /* PROCESO PORCENTAJE DE FORMULARIO */
  
    if (boton >= 1 && boton <= (preguntas.length) + 1) {
      correctas = botonV ;
      porcentaje = (correctas * valor1) / preguntas.length ;
    }
  
    /* CONSOLA */
  
    consola();
  
    /* RESULTADOS DEL TEST %*/
  
    fin()

  
    procesoresultado();
  
  }
  
  /* BONTON FALSO */
  
  function click2() {
    botonF++;

    animacionPreguntas()
    crearPreguntas()
    setTimeout(function(){ animacionPreguntasFalse(); }, 700);
    progreso()

    /* CONSOLA */
  
    console.log("Pregunta #" + (boton - 1));
    console.log("valor = " + valor2);
    console.log("");
  
    /* PROCESO PORCENTAJE DE FORMULARIO */
  
    if (boton >= 1 && boton <= (preguntas.length)+ 1) {
      incorrectas = botonF ;
      porcentaje = (correctas * valor1) / preguntas.length ;
    }
  
    /* CONSOLA */
  
    consola();
  
    /* RESULTADOS DEL TEST %*/
  
    fin();

    

    procesoresultado();

  
  }
  
/* FIN */
  function fin() {

    if (boton == (preguntas.length) + 1) {
      var interface = document.getElementById('interface');
      var contenedorProgreso = document.getElementById("progreso-preguntas");
      var botonesResultadosTest = document.getElementById("botones-resultados-test");
      botonesResultadosTest.style.display="flex";

      nota.removeChild(interface);
      nota.removeChild(contenedorProgreso);

      let div = document.createElement("div")
      div.setAttribute("class", "resultados-test");
      div.setAttribute("id", "resultados-test");
      div.setAttribute("data-aos", "fade-zoom-in");
      div.setAttribute("data-aos-delay", "200");
      nota.appendChild(div);
    }


  }

function porcentajeTest() {
  var div = document.getElementById('resultados-test');

  let h1 = document.createElement("h1");
  h1.setAttribute("class", "porcentaje-test");
  h1.innerHTML = porcentaje + "%";
  div.appendChild(h1);
}

function emergencias() {
  var div = document.getElementById('resultados-test');

  let parrafo = document.createElement("p");
  parrafo.setAttribute("class", "telefonos-test");
  parrafo.innerHTML = enunciado[3];
  div.appendChild(parrafo);


  let parrafo2 = document.createElement("p");
  parrafo2.setAttribute("class", "numeros-Tel-test");
  parrafo2.innerHTML = "#171";
  div.appendChild(parrafo2);

  let parrafo3 = document.createElement("p");
  parrafo3.setAttribute("class", "recuerda");
  parrafo3.innerHTML = enunciado[4];
  div.appendChild(parrafo3);

}

function sano() {
  var div = document.getElementById('resultados-test');

  let parrafo = document.createElement("p");
  parrafo.setAttribute("class", "enunciados-test");
  parrafo.innerHTML = enunciado[0];
  div.appendChild(parrafo);

}
function probable() {
  var div = document.getElementById('resultados-test');

  let parrafo = document.createElement("p");
  parrafo.setAttribute("class", "enunciados-test");
  parrafo.innerHTML = enunciado[1];
  div.appendChild(parrafo);
}
function urgente() {
  var div = document.getElementById('resultados-test');

  let parrafo = document.createElement("p");
  parrafo.setAttribute("class", "enunciados-test");
  parrafo.innerHTML = enunciado[2];
  div.appendChild(parrafo);
}

  /* EXTREMOS CORRECTOS E INCORRECTOS */
  
  if (botonV == 0) {
    correctas = 0;
  }
  if (botonF == 0) {
    incorrectas = 0;
  }
  
  /* FIN PROCESO NEXT PREGUNTA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

  function consola() {
    if (boton == (preguntas.length) + 1) {
      console.log("Respuestas Correctas = " + correctas);
      console.log("Respuestas Incorrectas = " + incorrectas);
      console.log("");
      console.log("Porcentaje Probable " + porcentaje + "%");
      console.log("");
    }
  }

  function crearAlertaRoja() {
    let div = document.getElementById("img-alertas-3");
    let contenedor = document.getElementById("img-alertas");

    div.style.display ="flex"
    contenedor.classList.add("animacion-alerta")
    div.setAttribute("aria-label", "Riesgo Alto");

  }

  function crearAlertaAmarilla() {
    let div = document.getElementById("img-alertas-2");
    let contenedor = document.getElementById("img-alertas");

    div.style.display ="flex"
    contenedor.classList.add("animacion-alerta")
    div.setAttribute("aria-label", "Riesgo Medio");
  }

  function crearAlertaVerde() {
    let div = document.getElementById("img-alertas-1");
    let contenedor = document.getElementById("img-alertas");

    div.style.display ="flex"
    contenedor.classList.add("animacion-alerta")
    div.setAttribute("aria-label", "Riesgo Bajo");
  }
 
  function procesoresultado() {
    if (porcentaje >= 0 && porcentaje <= 25 && boton == (preguntas.length) + 1) {
      console.log("Usuario: Sano");
      crearAlertaVerde()
      porcentajeTest()
      sano() 
      emergencias()
      hora();
      textPdf = pdfenunciado[1];
      text2Pdf = pdfenunciado[0];
    } else if (porcentaje > 25 && porcentaje <= 50 && boton == (preguntas.length) + 1) {
      console.log("Usuario: Probable");
      crearAlertaAmarilla()
      porcentajeTest()
      probable()
      emergencias()
      hora();
      textPdf = pdfenunciado[2];
      text2Pdf = pdfenunciado[3];
    } else if (porcentaje > 50 && porcentaje <= 100 && boton == (preguntas.length) + 1) {
      console.log("Usuario: Urgente");
      crearAlertaRoja()
      porcentajeTest()
      urgente()
      emergencias()
      hora();
      textPdf = pdfenunciado[4];
      text2Pdf = pdfenunciado[5];
    }
  }

  function finalizarTest() {
    
    var div = document.getElementById('resultados-test');
    nota.removeChild(div);
    
    let divFin = document.createElement("div")
    divFin.setAttribute("class", "finalizar-test animacion-fin");
    divFin.setAttribute("id", "finalizar-test");
    nota.appendChild(divFin);

    let contenedor = document.getElementById("img-alertas");
    var botonesResultadosTest = document.getElementById("botones-resultados-test");
    botonesResultadosTest.style.display="none";
    contenedor.style.display="none";

    
    var botonesFinalizarTest = document.getElementById("botones-finalizar-test");
    botonesFinalizarTest.classList.remove("ocultar")
    
    crearContenidoFinalizar()
  }

  function crearContenidoFinalizar() {
    let contenedorFin = document.getElementById('finalizar-test');

    let parrafo1 = document.createElement("p");
    parrafo1.setAttribute("class", "agradecimiento-texto1");
    parrafo1.innerHTML = enunciado[5];
    contenedorFin.appendChild(parrafo1);

    let parrafo2 = document.createElement("p");
    parrafo2.setAttribute("class", "agradecimiento-texto2");
    parrafo2.innerHTML = enunciado[6];
    contenedorFin.appendChild(parrafo2);

    let parrafo3 = document.createElement("p");
    parrafo3.setAttribute("class", "agradecimiento-texto3");
    parrafo3.innerHTML = enunciado[7];
    contenedorFin.appendChild(parrafo3);

    let hr = document.createElement("hr");
    hr.setAttribute("class", "agradecimiento-hr");
    contenedorFin.appendChild(hr);

    let parrafo4 = document.createElement("p");
    parrafo4.setAttribute("class", "agradecimiento-texto4");
    parrafo4.innerHTML = enunciado[8];
    contenedorFin.appendChild(parrafo4);

    let imgFin = document.getElementById('img-recomendaciones-finales');
    imgFin.classList.add("animacion-fin")
    imgFin.style.display = "block"

  }