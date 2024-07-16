// Função para mover o carrossel
function moverCarrossel(direcao) {
    const carousel = document.querySelector('.carousel');
    const scrollAmount = 300; // Quantidade de scroll a cada movimento
    carousel.scrollBy({
      left: direcao * scrollAmount,
      behavior: 'smooth' // Rolagem suave
    });
  }