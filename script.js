
// =====================================
// GONÇALVES MODA - CADASTRO DE PRODUTOS
// =====================================

// Edite os produtos e coloque seus links
// de afiliado da Shopee nos campos link.

const produtos = [
  {
    nome: "Camiseta Masculina Premium",
    preco: "R$ 39,90",
    categoria: "masculino",
    imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    link: ""
  },
  {
    nome: "Tênis Casual Masculino",
    preco: "R$ 89,90",
    categoria: "masculino",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    link: ""
  },
  {
    nome: "Vestido Feminino Elegante",
    preco: "R$ 69,90",
    categoria: "feminino",
    imagem: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
    link: ""
  },
  {
    nome: "Bolsa Feminina",
    preco: "R$ 59,90",
    categoria: "feminino",
    imagem: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    link: ""
  },
  {
    nome: "Tênis Esportivo",
    preco: "R$ 99,90",
    categoria: "ofertas",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    link: ""
  },
  {
    nome: "Óculos de Sol",
    preco: "R$ 29,90",
    categoria: "ofertas",
    imagem: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    link: ""
  }
];

// =====================================
// EXIBIÇÃO DOS PRODUTOS
// =====================================

function criarProduto(produto) {
  const linkValido = /^https?:\/\//i.test(produto.link);

  return `
    <article class="produto">
      <img
        src="${produto.imagem}"
        alt="${produto.nome}"
        loading="lazy"
      >

      <div class="produto-info">
        <h3>${produto.nome}</h3>
        <p class="preco">${produto.preco}</p>

        ${
          linkValido
            ? `<a class="botao" href="${produto.link}" target="_blank" rel="sponsored nofollow noopener">VER NA SHOPEE</a>`
            : `<button class="botao" disabled>LINK EM BREVE</button>`
        }
      </div>
    </article>
  `;
}

function carregarProdutos() {
  const masculina = document.getElementById("listaMasculina");
  const feminina = document.getElementById("listaFeminina");
  const ofertas = document.getElementById("listaOfertas");

  masculina.innerHTML = produtos
    .filter(p => p.categoria === "masculino")
    .map(criarProduto)
    .join("");

  feminina.innerHTML = produtos
    .filter(p => p.categoria === "feminino")
    .map(criarProduto)
    .join("");

  ofertas.innerHTML = produtos
    .filter(p => p.categoria === "ofertas")
    .map(criarProduto)
    .join("");
}

carregarProdutos();
