document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  // Abre/fecha menu acessibilidade
  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado =
      botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
  });

  // Aumentar/diminuir fonte
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  // Contraste
  alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
  });
});

// ScrollReveal
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });

.home__img img {
  width: 250px;   /* Tamanho adequado */
  height: auto;
  border-radius: 50%; /* deixa circular, se quiser */
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

