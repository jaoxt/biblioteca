document.addEventListener('DOMContentLoaded', () => {
  const livros = [
    {
      titulo: "O Meu Pé de Laranja Lima",
      autor: "José Mauro de Vasconcelos",
      capa: "img/pe_laranja.jpg",
      resumo: "A história emocionante de um menino sensível e criativo em meio às dificuldades da infância."
    },
    {
      titulo: "A Droga da Obediência",
      autor: "Pedro Bandeira",
      capa: "img/droga_obediencia.jpg",
      resumo: "Os Karas enfrentam uma perigosa conspiração que ameaça a liberdade dos jovens."
    },
    {
      titulo: "Capitães da Areia",
      autor: "Jorge Amado",
      capa: "img/capitaes_areia.jpg",
      resumo: "Um grupo de meninos de rua enfrenta os desafios da vida em Salvador."
    },
    {
      titulo: "O Diário de Anne Frank",
      autor: "Anne Frank",
      capa: "img/anne_frank.jpg",
      resumo: "O comovente diário de uma jovem judia escondida durante a Segunda Guerra Mundial."
    },
    {
      titulo: "Senhora",
      autor: "José de Alencar",
      capa: "img/senhora.jpg",
      resumo: "Uma crítica social sobre o casamento por interesse na sociedade do século XIX."
    },
    {
      titulo: "A Hora da Estrela",
      autor: "Clarice Lispector",
      capa: "img/hora_estrela.jpg",
      resumo: "A vida simples e sofrida de Macabéa, narrada com profundidade existencial."
    },
    {
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      capa: "img/pequeno_principe.jpg",
      resumo: "Uma fábula poética sobre amizade, amor e a essência da vida."
    },
    {
      titulo: "Vidas Secas",
      autor: "Graciliano Ramos",
      capa: "img/vidas_secas.jpg",
      resumo: "Uma família nordestina enfrenta a seca e a luta pela sobrevivência."
    },
    {
      titulo: "Menino do Dedo Verde",
      autor: "Maurice Druon",
      capa: "img/dedo_verde.jpg",
      resumo: "A história mágica de Tistu, um menino que transforma o mundo com seu toque especial."
    }
  ];

  const acervoContainer = document.getElementById('acervo');
  const form = document.getElementById('formLivro');
  const tituloInput = document.getElementById('titulo');
  const autorInput = document.getElementById('autor');
  const capaInput = document.getElementById('capa');
  const resumoInput = document.getElementById('resumo');

  function renderLivro(livro) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${livro.capa}" alt="${livro.titulo}">
      <h3>${livro.titulo}</h3>
      <div class="card-content">
        <p><strong>Autor:</strong> ${livro.autor}</p>
        <p>${livro.resumo}</p>
      </div>
      <button class="delete-btn">Remover</button>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('delete-btn')) {
        card.classList.toggle('expanded');
      }
    });

    card.querySelector('.delete-btn').addEventListener('click', () => {
      acervoContainer.removeChild(card);
    });

    acervoContainer.appendChild(card);
  }

  if (acervoContainer) {
    livros.forEach(livro => renderLivro(livro));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const novoLivro = {
        titulo: tituloInput.value,
        autor: autorInput.value,
        capa: capaInput.value,
        resumo: resumoInput.value
      };
      renderLivro(novoLivro);
      form.reset();
    });
  }
});
