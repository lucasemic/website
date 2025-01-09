// limite de noticias por layout
const layoutLimits = {
    'news-carousel': { min: 3, max: 20 },
    'news-grid': { min: 4, max: 12 }
};

// contagem de noticias por layout
const layoutProductCount = {
    'news-carousel': 0,
    'news-grid': 0
};

// função para adicionar noticias nos layouts
function addNews(imageUrl, title, description, newsId) {
    // paga o layout com menos noticias
    let layoutName = getLayoutWithLeastProducts();

    if (layoutProductCount[layoutName] < layoutLimits[layoutName].max) {
        const newsLayout = document.getElementById(layoutName);

        if (!newsLayout) {
            console.error(`Layout ${layoutName} não encontrado no DOM.`);
            return;
        }

        // se for carousel é necessario outras configurações
        let newsContainer;
        if (layoutName === 'news-carousel') {
            let carouselInner = newsLayout.querySelector('.carousel-inner');
            if (!carouselInner) {
                carouselInner = document.createElement('div');
                carouselInner.classList.add('carousel-inner');
                newsLayout.appendChild(carouselInner);
            }

            // cria a div do item no carousel
            newsContainer = document.createElement('div');
            newsContainer.classList.add('carousel-item');

            // o primeiro item do carousel deve conter a classe "active"
            if (carouselInner.querySelectorAll('.carousel-item').length === 0) {
                newsContainer.classList.add('active');
            }

            // adiciona o item no carousel
            carouselInner.appendChild(newsContainer);
        } else {
            newsContainer = newsLayout;
        }

        // cria a div da noticia
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news-card');

        // cria e adiciona imagem da noticia
        const newsImg = document.createElement('img');
        newsImg.src = imageUrl;
        newsImg.classList.add('news-image');
        newsDiv.appendChild(newsImg);

        // cria div de conteudo da noticia
        const newsContent = document.createElement('div');
        newsContent.classList.add('news-content');

        // cria e adiciona titulo da noticia
        const newsTitle = document.createElement('h2');
        newsTitle.textContent = title;
        newsTitle.classList.add('news-title');
        newsContent.appendChild(newsTitle);

        // cria e adiciona descrição da noticia
        const newsDescription = document.createElement('p');
        newsDescription.textContent = description;
        newsDescription.classList.add('news-description');
        newsContent.appendChild(newsDescription);

        // cria e adiciona botão com id da noticia
        const newsButton = document.createElement('button');
        newsButton.textContent = 'Ler Notícia';
        newsButton.classList.add('news-button');
        newsButton.addEventListener('click', () => {
            // redireciona para pagina de detalhes de noticia com id na url
            window.location.href = `newsDetails.html?id=${newsId}`;
        });
        newsContent.appendChild(newsButton);

        newsDiv.appendChild(newsContent);
        newsContainer.appendChild(newsDiv);

        //aumenta a contegem de noticias no layout
        layoutProductCount[layoutName]++;
    } else {
        console.log(`Layout ${layoutName} atingiu o número máximo de notícias.`);
    }
}

// função complementar para detectar qual o layout com menos noticias e quenão atingiu seu limite
function getLayoutWithLeastProducts() {
    let layoutWithLeastProducts = '';
    let minCount = Infinity;

    for (const layout in layoutProductCount) {
        if (layoutProductCount[layout] < layoutLimits[layout].max && layoutProductCount[layout] < minCount) {
            layoutWithLeastProducts = layout;
            minCount = layoutProductCount[layout];
        }
    }

    return layoutWithLeastProducts;
}