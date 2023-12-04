const books = document.querySelectorAll(".books_book");
const modal = document.querySelector(".book-modal-container");

const booksList = [
    {
        name: "Amazônia à mesa",
        text: "Escrito para estimular uma alimentação saudável e nutritiva em escolas públicas do Norte do país, o livro “Amazônia à Mesa” conta com mais de 40 receitas que destacam a culinária da Amazônia e utilizam produtos da sociobiodiversidade e da agroecologia regional em seu preparo. Lançado em 2020, o livro foi elaborado pelo Ministério da Agricultura, Pecuária e Abastecimento (Mapa) com apoio do Fundo Nacional de Desenvolvimento da Educação (FNDE), autarquia vinculada ao Ministério da Educação (MEC).",
        urlText: "O livro está disponível no site do GOV, por download de PDF.",
        url: "https://www.fnde.gov.br/phocadownload/programas/Livro_Didatico_PNLD/Apoio_a_Gestao/2020/Livro%20Receitas%20Amaznia%20%20Mesa.pdf"
    },
    {
        name: "Do que se come",
        text: "A história da Amazônia ainda está sendo escrita, mas o livro de Sidiana é um dos elementos essenciais para se entender esse grande tema. Sem dúvida que o estudo da história do abastecimento e da alimentação na região amazônica, com destaque para a realidade paraense, se faz importante e necessário para o alargamento da compreensão de nosso presente a partir do passado, um presente tão marcado na identidade e cultura paraense pelo comer, com suas práticas alimentares com ingredientes, manejos, cheiros e sabores típicos, recheados de tradição e histórias.",
        urlText: "O livro está disponível no site Alameda, por R$84,00 reais.",
        url: "https://www.alamedaeditorial.com.br/do-que-se-come-#:~:text=Do%20que%20se%20come%20%C3%A9,g%C3%AAneros%20de%20outros%20lugares%2C%20quer"
    },
    {
        name: "Transformação e Persistência: antropologia da alimentação e nutrição em uma sociedade indígena amazônica",
        text: "O livro traz a experiência do autor em sua convivência com os Wari’ (ou Pacaás Novos), povo indígena mais numeroso no estado de Rondônia, com cerca de 2.700 indivíduos. Apresenta, em linguagem precisa e agradável, uma abrangente descrição das condições de alimentação e nutrição locais, levando em consideração a especificidade cultural das comunidades amazônicas. A obra demonstra o quão importante é não prescindir de cuidadosa contextualização dos achados no conjunto das práticas nativas e das ideias que as orientam, seja qual for o campo sob investigação.",
        urlText: "O livro está disponível no site da Amazon por R$31,16 reais.",
        url: "https://www.amazon.com.br/Transforma%C3%A7ao-Persistencia-AntropologiaAlimenta%C3%A7ao-Sociedade/dp/8575411373"
    },
    {
        name: "Desenvolvimento Sustentável da Amazônia – Menos Desmatamento, Desperdício e Pobreza – Mais Preservação, Alimentos e Riqueza",
        text: "A obra divide-se em três partes. Na primeira parte, Escolhas Possíveis, apresentam-se os problemas do aquecimento global e do desmatamento amazônico. Na segunda parte, Pressupostos do Modelo, discutem-se os pressupostos de um modelo de desenvolvimento sustentável, e, principalmente, os pressupostos do nosso modelo para a Amazônia. Na terceira parte, Um Modelo de Desenvolvimento Sustentável para a Amazônia, apresentam-se e analisam-se as propostas, e o modelo ganha forma concretamente.",
        urlText: "O livro está disponível no site Juruá editora, por R$119,91 reais na versão impressa e R$80,91 reais na versão digital.",
        url: "https://www.jurua.com.br/shop_item.asp?id=24202"
    },
    {
        name: "Um rio de receitas beiradeiras",
        text: "Essa obra foi produzida durante a pandemia (enquanto a pesquisadora não pode estar presencialmente nas comunidades) e registra os modos de preparo de cada receita escolhida pelas autoras beiradeiras residentes entre os municípios de Portel e Melgaço, nos arredores da Floresta Nacional de Caxiuanã, Amazônia paraense.",
        urlText: "O livro está disponível em um site da USP, por download de PDF.",
        url: "https://sites.usp.br/laaae/extensao/evolucao-para-todes/livro-um-rio-de-receitas/"
    },
    {
        name: "Frutíferas e Plantas Úteis na Vida Amazônica",
        text: "Frutíferas e Plantas Úteis na Vida Amazônica’ integra saberes científicos e tradicionais sobre 21 espécies de árvores, cipós e palmeiras com grande importância para as populações locais. As pesquisas ecológicas, cantos, receitas, lendas e ilustrações valorizam a cultura amazônica e transmitem práticas que servem para as pessoas do campo e cidade.",
        urlText: "O livro está disponível no site da Amazon, por R$55,90 reais.",
        url: "https://www.amazon.com.br/Frut%C3%ADferas-Plantas-%C3%BAteisVida-Amaz%C3%B4nica/dp/602869312X"
    },
    {
        name: "Hortaliças Não-Convencionais da Amazônia",
        text: "A obra aborda aspectos como características botânicas, exigências edafoclimáticas, propagação e cultivo, inimigos naturais, colheita e comercialização.",
        urlText: "O livro está disponível no site da Amazon, por R$120,00 reais.",
        url: "https://www.amazon.com.br/Hortali%C3%A7as-N%C3%A3oConvencionais-Amaz%C3%B4nia-Marinice-Oliveira/dp/8585007672"
    },
    {
        name: "Insegurança alimentar e nutricional no Amazonas",
        text: "Esta obra traz informações sobre o estado de insegurança alimentar da população do Amazonas em todas as fases da vida, desde a gestante e seu concepto, passando pelos pré-escolares, crianças, adolescentes até o idoso, evidenciando a necessidade de maior atenção e cuidado com a alimentação desses grupos para justamente reduzir a insegurança alimentar, pois uma alimentação adequada pode reduzir o risco de doenças e impulsionar o crescimento e desenvolvimento de uma região e do país.",
        urlText: "O livro está disponível no site de Repositório do INPA GOV, por download de PDF",
        url: "https://repositorio.inpa.gov.br/handle/1/4693"
    },
    {
        name: "Culinária Amazônica: O Sabor Da Natureza",
        text: "Com textos informativos e receitas de diversos pratos, este livro apresenta um retrato contemporâneo e ao mesmo tempo tradicional da cozinha amazônica, proporcionando ao leitor uma saborosa viagem através da história de nossa sociedade e cultura.",
        urlText: "O livro está disponível no site SENAC, por R$127,00 reais.",
        url: "https://www.livrariasenacceara.com.br/livro/culinaria-amazonica-o-saborda-natureza/"
    },
    {
        name: "Educação e Diversidades na Amazônia",
        text: "Este Almanaque será um convite para descobrimento e tomarmos consciência da importância da educação e da diversidade na Amazônia, principalmente saberes sobre dança, arte marajoara, culinária, diversidade étnico-racial, religiosidade, esporte, música, moda, política, saúde, respeito às diferenças, gênero, raça, etnia. O propósito aqui empreendido não é, nem jamais poderia ser, oferecer soluções ou aplicabilidade a toda e qualquer situação educativa.",
        urlText: "O livro está disponível no site da Amazon, por R$46,99 reais.",
        url: "https://www.amazon.com.br/Educa%C3%A7%C3%A3o-DiversidadesAmaz%C3%B4nia-Nazare-Coelho/dp/8578612981"
    }
]

function displayModal() {
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

function setModalHTML(bookName) {
    const bookInformations = booksList.find(book => book.name === bookName);
    const modalBody = modal.querySelector(".modal #modal-content");

    modalBody.innerHTML = "";

    if (!bookInformations) return;

    modalBody.innerHTML = `
        <h2 class="book-title">${bookInformations.name}</h2>

        <div class="modal-body">
            <p>${bookInformations.text}</p>

            <small>${bookInformations.urlText}
                <a href="${bookInformations.url}" target="_blank">
                    clique aqui para acessar
                </a>
            </small>
        </div>
    `;

    displayModal();
}

const modalClose = document.querySelector(".modal .close-btn");
modalClose.addEventListener("click", closeModal);

books.forEach(book => {
    book.addEventListener("click", () => {
        setModalHTML(book.getAttribute("data-name"));
    });
})