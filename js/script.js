$(document).ready(function () {
  // ============================
  // 1. Alternar Tema Claro/Escuro
  // ============================
  $('#toggleTheme').on('click', function () {
    $('body').toggleClass('dark-theme');

    // Salva a preferência no localStorage
    if ($('body').hasClass('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Ao carregar a página, aplica o tema salvo
  if (localStorage.getItem('theme') === 'dark') {
    $('body').addClass('dark-theme');
  }

  // 2. Filtro de Projetos
  $('.filter-btn').on('click', function () {
    const categoria = $(this).data('categoria');

    if (categoria === 'todos') {
      $('.project-card').fadeIn();
    } else {
      $('.project-card').hide();
      $('.' + categoria).fadeIn();
    }
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
