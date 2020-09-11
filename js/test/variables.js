/* VARIABLES */
  
var valor1 = 100;
var valor2 = 0;
var boton = 0;
var botonV = 0;
var botonF = 0;
var botonPregunta = 1;
var correctas;
var incorrectas;
var porcentaje;
var textPdf;
var text2Pdf;
var defaultSelect = "Elige tu cantón:*"

/* VARIABLES DEL HTML */

var presentacion = document.getElementById("presentacion");
var guardar = document.getElementById("guardar");

/* VARIABLES DE LA FECHA */

var n;
var y;
var m;
var d;
var h;
var min;
var horario;
var ceromin;
var ceroh;
var cerod;
var cerom;

/* VARIABLES DE LOS DATOS INGRESADOS*/

var nombre;
var celular;
var provin;

var inputnombre = document.getElementById("name");
var inputcelular = document.getElementById("tel");
var selectprovin = document.getElementById("provincias");
var selectcanton = document.getElementById("cantones");

/* VARIABLES DE EFECTOS DE VENTANA */

var inicio = document.getElementById('inicio');
var validacion = document.getElementById('validacion');
var form= document.getElementById('form');
var bienvenida= document.getElementById('bienvenida');
var contenidoFrontal= document.getElementById('contenidoFrontal');

/* LOGO */
var logoTest = document.getElementById('logo-test');

/* NOTA */

var nota = document.getElementById('nota');


/* IMG ALERTAS */

var alertaRoja = "../img/test/iconos_preguntas/alerta_roja.png";
var alertaAmarilla = "../img/test/iconos_preguntas/alerta_amarilla.png";

