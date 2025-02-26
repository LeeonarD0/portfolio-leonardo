document.querySelector('.scroll-indicator').addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight, // Rola para a altura da próxima seção
    behavior: 'smooth' // Rola suavemente
  });
});