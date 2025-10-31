$(document).ready(function () {
  // ============================
 // Carrossel de Certificados
const certificadosCarousel = $('.certificados-carousel');
certificadosCarousel.on('wheel', function(e) {
  e.preventDefault();
  this.scrollBy({
    left: e.originalEvent.deltaY < 0 ? -100 : 100,
    behavior: 'smooth'
  });
});
  // ============================

  // 2. Projetos
$(document).ready(function () {
  const projetos = $('#projetos-container .project-card').toArray();
  const container = $('#projetos-container');
  container.empty(); // limpa o container original

  const projetosPorLinha = 6;

  // Cria uma nova linha a cada 6 projetos
  for (let i = 0; i < projetos.length; i += projetosPorLinha) {
    const linha = $('<div class="carousel-row"></div>');
    $(projetos.slice(i, i + projetosPorLinha)).appendTo(linha);
    container.append(linha);
  }

  // Filtro de categorias (mantém o mesmo comportamento)
  $('.filter-btn').on('click', function () {
    const categoria = $(this).data('categoria');

    if (categoria === 'todos') {
      $('.project-card').fadeIn();
    } else {
      $('.project-card').hide();
      $('.' + categoria).fadeIn();
    }
  });
});

  // 3. Validação de Formulário
  $('#form-contato').on('submit', function (e) {
    e.preventDefault();

    const nome = $('#nome').val().trim();
    const email = $('#email').val().trim();
    const mensagem = $('#mensagem').val().trim();

    if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    alert('Mensagem enviada com sucesso!');
    $(this)[0].reset(); // Limpa o formulário
  });

  // 4. Carrossel com Scroll Suave
  const carrossel = $('.carousel');
  carrossel.on('wheel', function (e) {
    e.preventDefault();
    this.scrollBy({
      left: e.originalEvent.deltaY < 0 ? -100 : 100,
      behavior: 'smooth'
    });
  });


  // 5. Animações de entrada

  $(document).on('pageshow', '#projetos', function () {
    $('.project-card').each(function (i, el) {
      $(el).addClass('fade-in');
    });
  });
});
