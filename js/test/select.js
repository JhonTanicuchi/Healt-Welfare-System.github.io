/* CARGAR PROVINCIAS EN SELECT OPTIONS */

function cargarProvincias() {
  var valueProvincias=0
  provincias.sort();
  for (var i = 0; i < provincias.length; i++) {
  var option = document.createElement("option");
  option.setAttribute("value", valueProvincias);
  option.innerHTML = provincias[i];
  selectprovin.appendChild(option);
  valueProvincias++
}
}

cargarProvincias();

/* GUARDAR EL VALOR DE CADA PROVINCIA */
var textoProvincia;

selectprovin.addEventListener("change", updateValue);

function updateValue(e){
  let index = selectprovin.value
  console.log(selectprovin.value);
  textoProvincia =  provincias[selectprovin.value];

  console.log(textoProvincia)

  eliminarCantones()
  crearDefault()
  crearCantonesSelect(index)
}

 /* CREAR CANTONES EN SELECT OPTIONS */

function crearCantonesSelect(index) {
    cantones[index].sort();
    for (let i = 0; i < cantones[index].length; i++) {
      var optionn = document.createElement("option");
      optionn.setAttribute("value", cantones[index][i]);
      optionn.innerHTML = cantones[index][i];
      selectcanton.appendChild(optionn);
    }
}

/* ELIMINA TODAS LAS OPTIONS DEL SELECT */


 function eliminarCantones() {
  var element  = document.getElementById("cantones");

while (element.firstChild) {
  element.removeChild(element.firstChild);
}
} 

/* CREACION DE LA OPTION POR DEFECTO */

 function crearDefault(){
    var optionn = document.createElement("option");
    optionn.setAttribute("value", "");
    optionn.innerHTML = defaultSelect;
    selectcanton.appendChild(optionn);
} 





/* 
 function Azuay(){
  cantones[0].sort();
  for (var i = 0; i < cantones[0].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[0][i]);
    optionn.innerHTML = cantones[0][i];
    selectcanton.appendChild(optionn);
  }
}

function Bolívar(){
  cantones[1].sort();
  for (var i = 0; i < cantones[1].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[1][i]);
    optionn.innerHTML = cantones[1][i];
    selectcanton.appendChild(optionn);
  }
}

function Carchi(){
  cantones[2].sort();
  for (var i = 0; i < cantones[2].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[2][i]);
    optionn.innerHTML = cantones[2][i];
    selectcanton.appendChild(optionn);
  }
}

function Cañar(){
  cantones[3].sort();
  for (var i = 0; i < cantones[3].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[3][i]);
    optionn.innerHTML = cantones[3][i];
    selectcanton.appendChild(optionn);
  }
}

function Chimborazo(){
  cantones[4].sort();
  for (var i = 0; i < cantones[4].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[4][i]);
    optionn.innerHTML = cantones[4][i];
    selectcanton.appendChild(optionn);
  }
}

function Cotopaxi(){
  cantones[5].sort();
  for (var i = 0; i < cantones[5].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[5][i]);
    optionn.innerHTML = cantones[5][i];
    selectcanton.appendChild(optionn);
  }
}

function ElOro(){
  cantones[6].sort();
  for (var i = 0; i < cantones[6].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[6][i]);
    optionn.innerHTML = cantones[6][i];
    selectcanton.appendChild(optionn);
  }
}

function Esmeraldas(){
  cantones[7].sort();
  for (var i = 0; i < cantones[7].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[7][i]);
    optionn.innerHTML = cantones[7][i];
    selectcanton.appendChild(optionn);
  }
}

function Galápagos(){
  cantones[8].sort();
  for (var i = 0; i < cantones[8].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[8][i]);
    optionn.innerHTML = cantones[8][i];
    selectcanton.appendChild(optionn);
  }
}

function Guayas(){
  cantones[9].sort();
  for (var i = 0; i < cantones[9].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[9][i]);
    optionn.innerHTML = cantones[9][i];
    selectcanton.appendChild(optionn);
  }
}

function Imbabura(){
  cantones[10].sort();
  for (var i = 0; i < cantones[10].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[10][i]);
    optionn.innerHTML = cantones[10][i];
    selectcanton.appendChild(optionn);
  }
}

function Loja(){
  cantones[11].sort();
  for (var i = 0; i < cantones[11].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[11][i]);
    optionn.innerHTML = cantones[11][i];
    selectcanton.appendChild(optionn);
  }
}

function LosRíos(){
  cantones[12].sort();
  for (var i = 0; i < cantones[12].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[12][i]);
    optionn.innerHTML = cantones[12][i];
    selectcanton.appendChild(optionn);
  }
}

function Manabí(){
  cantones[13].sort();
  for (var i = 0; i < cantones[13].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[13][i]);
    optionn.innerHTML = cantones[13][i];
    selectcanton.appendChild(optionn);
  }
}

function MoronaSantiago(){
  cantones[14].sort();
  for (var i = 0; i < cantones[14].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[14][i]);
    optionn.innerHTML = cantones[14][i];
    selectcanton.appendChild(optionn);
  }
}

function Napo(){
  cantones[15].sort();
  for (var i = 0; i < cantones[15].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[15][i]);
    optionn.innerHTML = cantones[15][i];
    selectcanton.appendChild(optionn);
  }
}

function Orellana(){
  cantones[16].sort();
  for (var i = 0; i < cantones[16].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[16][i]);
    optionn.innerHTML = cantones[16][i];
    selectcanton.appendChild(optionn);
  }
}

function Pastaza(){
  cantones[17].sort();
  for (var i = 0; i < cantones[17].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[17][i]);
    optionn.innerHTML = cantones[17][i];
    selectcanton.appendChild(optionn);
  }
}

function Pichincha(){
  cantones[18].sort();
  for (var i = 0; i < cantones[18].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[18][i]);
    optionn.innerHTML = cantones[18][i];
    selectcanton.appendChild(optionn);
  }
}

function SantaElena(){
  cantones[19].sort();
  for (var i = 0; i < cantones[19].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[19][i]);
    optionn.innerHTML = cantones[19][i];
    selectcanton.appendChild(optionn);
  }
}

function SantoDomingoDeLosTsáchilas(){
  cantones[20].sort();
  for (var i = 0; i < cantones[20].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[20][i]);
    optionn.innerHTML = cantones[20][i];
    selectcanton.appendChild(optionn);
  }
}

function Sucumbíos(){
  cantones[21].sort();
  for (var i = 0; i < cantones[21].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[21][i]);
    optionn.innerHTML = cantones[21][i];
    selectcanton.appendChild(optionn);
  }
}

function Tungurahua(){
  cantones[22].sort();
  for (var i = 0; i < cantones[22].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[22][i]);
    optionn.innerHTML = cantones[22][i];
    selectcanton.appendChild(optionn);
  }
}

function ZamoraChinchipe(){
  cantones[23].sort();
  for (var i = 0; i < cantones[23].length; i++) {
    var optionn = document.createElement("option");
    optionn.setAttribute("value", cantones[23][i]);
    optionn.innerHTML = cantones[23][i];
    selectcanton.appendChild(optionn);
  }
} */

/* ELIMINA TODAS LAS OPTIONS DEL SELECT */


/* function eliminarCantones() {
  var element  = document.getElementById("cantones");

while (element.firstChild) {
  element.removeChild(element.firstChild);
}
} */

/* CREACION DE LA OPTION POR DEFECTO */

/* function crearDefault(){
    var optionn = document.createElement("option");
    optionn.setAttribute("value", "");
    optionn.innerHTML = defaultSelect;
    selectcanton.appendChild(optionn);
} */

/* DETERCTAR CAMBIOS DE LAS PROVINCIAS Y MOSTRAR CANTONES*/

/* selectprovin.addEventListener("change", updateValue);

function updateValue(e){
  
  let cambiosprovincia = e.target.value;
  console.log(selectprovin.value);
  console.log(cambiosprovincia);

  if (cambiosprovincia == provincias[0]) {
    eliminarCantones()
    crearDefault()
    Azuay();
  }else if (cambiosprovincia == provincias[1]) {
    eliminarCantones()
    crearDefault()
    Bolívar()
  }else if (cambiosprovincia == provincias[2]) {
    eliminarCantones()
    crearDefault()
    Carchi()
  }else if (cambiosprovincia == provincias[3]) {
    eliminarCantones()
    crearDefault()
    Cañar()
  }else if (cambiosprovincia == provincias[4]) {
    eliminarCantones()
    crearDefault()
    Chimborazo()
  }else if (cambiosprovincia == provincias[5]) {
    eliminarCantones()
    crearDefault()
    Cotopaxi();
  }else if (cambiosprovincia == provincias[6]) {
    eliminarCantones()
    crearDefault()
    ElOro();
  }else if (cambiosprovincia == provincias[7]) {
    eliminarCantones()
    crearDefault()
    Esmeraldas();
  }else if (cambiosprovincia == provincias[8]) {
    eliminarCantones()
    crearDefault()
    Galápagos();
  }else if (cambiosprovincia == provincias[9]) {
    eliminarCantones()
    crearDefault()
    Guayas();
  }else if (cambiosprovincia == provincias[10]) {
    eliminarCantones()
    crearDefault()
    Imbabura();
  }else if (cambiosprovincia == provincias[11]) {
    eliminarCantones()
    crearDefault()
    Loja();
  }else if (cambiosprovincia == provincias[12]) {
    eliminarCantones()
    crearDefault()
    LosRíos();
  }else if (cambiosprovincia == provincias[13]) {
    eliminarCantones()
    crearDefault()
    Manabí();
  }else if (cambiosprovincia == provincias[14]) {
    eliminarCantones()
    crearDefault()
    MoronaSantiago();
  }else if (cambiosprovincia == provincias[15]) {
    eliminarCantones()
    crearDefault()
    Napo();
  }else if (cambiosprovincia == provincias[16]) {
    eliminarCantones()
    crearDefault()
    Orellana();
  }else if (cambiosprovincia == provincias[17]) {
    eliminarCantones()
    crearDefault()
    Pastaza();
  }else if (cambiosprovincia == provincias[18]) {
    eliminarCantones()
    crearDefault()
    Pichincha();
  }else if (cambiosprovincia == provincias[19]) {
    eliminarCantones()
    crearDefault()
    SantaElena();
  }else if (cambiosprovincia == provincias[20]) {
    SantoDomingoDeLosTsáchilas();
  }else if (cambiosprovincia == provincias[21]) {
    eliminarCantones()
    crearDefault()
    Sucumbíos();
  }else if (cambiosprovincia == provincias[22]) {
    eliminarCantones()
    crearDefault()
    Tungurahua();
  }else if (cambiosprovincia == provincias[23]) {
    eliminarCantones()
    crearDefault()
    ZamoraChinchipe();
  }else{
    eliminarCantones()
    crearDefault()
  }
}
 */
