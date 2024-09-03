function createBalloonAnimation() {
  const body = document.body;
  
  for (let i = 0; i < 10; i++) { // Generar 10 globos
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    balloon.style.backgroundColor = getRandomColor(); // Color aleatorio
    
    body.appendChild(balloon);
    
    // Eliminar el globo una vez que termina la animación
    balloon.addEventListener('animationend', () => {
      balloon.remove();
    });
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Iniciar la animación
document.addEventListener('DOMContentLoaded', createBalloonAnimation);
