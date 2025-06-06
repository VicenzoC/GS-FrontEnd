function carregarComponentes() {
  // Header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    fetch('components/header.html')
      .then(res => res.text())
      .then(html => {
        headerContainer.innerHTML = html;
      });
  }

  // Footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    fetch('components/footer.html')
      .then(res => res.text())
      .then(html => {
        footerContainer.innerHTML = html;
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carregarComponentes();

  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = new bootstrap.Modal(document.getElementById('modalConfirmacao'));
      modal.show();
      form.reset();
    });
  }

  const elementosAnimados = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entradas, obs) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('show'); 
        obs.unobserve(entrada.target); 
      }
    });
  }, {
    threshold: 0.1
  });

  elementosAnimados.forEach(el => observer.observe(el));
});
