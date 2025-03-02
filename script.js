// Función para mostrar el texto como si lo estuviera escribiendo
document.addEventListener('DOMContentLoaded', function() {
  const textoElemento = document.getElementById('message');
  const textoCompleto = textoElemento.textContent;
  let indiceActual = 0;

  function animacionEscritura() {
    if (indiceActual < textoCompleto.length) {
      textoElemento.textContent = textoCompleto.substring(0, indiceActual + 1);
      indiceActual++;
      setTimeout(animacionEscritura, 40); // Ajusta este valor para cambiar la velocidad de escritura
    }
  }

  animacionEscritura();
});

//Funcion para mostrar la presentación animada

document.addEventListener('DOMContentLoaded', function() {
  const textoElemento = document.getElementByClassName('Presentation');
  const textoOriginal = textoElemento.textContent;
  const anchoTexto = textoElemento.offsetWidth;
  
  let posicionActual = -anchoTexto;
  const velocidad = 20; // Ajusta esta variable para cambiar la velocidad de movimiento
  
  function animacionTexto() {
    posicionActual += velocidad;
    
    if (posicionActual < 0 && textoOriginal.length * anchoTexto > anchoTexto) {
      posicionActual = -anchoTexto;
    }
    
    textoElemento.style.transform = `translateX(${posicionActual}px)`;
    
    requestAnimationFrame(animacionTexto);
  }

  // Comenzar la animación
  animacionTexto();
});

//Funcion para la hamburguesa
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navigation = document.querySelector('.navigation');
  
  hamburger.addEventListener('click', function() {
      navigation.classList.toggle('active');
  });
});
console.log('archivo cargado')

