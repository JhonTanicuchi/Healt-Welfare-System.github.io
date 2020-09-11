
clickComentar=1;

function comentarios() {
  event.preventDefault();

  console.log(clickComentar)


  var name = document.getElementById('name').value;
  document.getElementById('nombre-commentary'+ clickComentar).innerHTML= name;

  var comentario = document.getElementById('message').value;
  document.getElementById('commentary'+ clickComentar).innerHTML= mayusPrimera(comentario);

  document.getElementById("form-Comentarios").reset();

  clickComentar++

  if (clickComentar==3) {
    clickComentar-=2;
  }

}

function mayusPrimera(comentario){
  const primerCaracter = comentario.charAt(0).toUpperCase();
  const restoDeLaCadena = comentario.substring(1, comentario.length);
  return primerCaracter.concat(restoDeLaCadena);
}


var input = document.getElementById('message');

function capitalizarPrimeraLetra() {

  var palabra = input.value;

  if(!input.value) return;
  var mayuscula = palabra.substring(0,1).toUpperCase();
  if (palabra.length > 0) {
    var minuscula = palabra.substring(1).toLowerCase();
  }
 
  input.value = mayuscula.concat(minuscula);
}