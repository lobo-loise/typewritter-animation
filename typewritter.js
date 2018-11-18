$(document).ready(function(){

  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split(''); //separa array
    elemento.innerHTML = ''; //"zera" a frase incial
    textoArray.forEach((letra, i) => {
      setTimeout( function() { //adiciona cada caracter por vez

        elemento.innerHTML += letra
      }, 75 * i)
    })

  }

  const texto = document.querySelector('.texto');
  typeWriter(texto);

});
