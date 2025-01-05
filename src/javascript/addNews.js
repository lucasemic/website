
// Definindo limites para cada layout
const layoutLimits = {
    'news-carousel': { min: 3, max: 20 },
    'news-grid': { min: 4, max: 12 }
};

// Contador de produtos por layout
const layoutProductCount = {
    'news-carousel': 0,
    'news-grid': 0
};

function addNews(imageUrl, title, description, newsId) {
    // Determina o layout atual (inicialmente definido como 'news-carousel')
    let layoutName = getLayoutWithLeastProducts();

    // Verifica se o layout tem espaço para mais notícias
    if (layoutProductCount[layoutName] < layoutLimits[layoutName].max) {
        const newsLayout = document.getElementById(layoutName);

        // Valida se o container do layout existe
        if (!newsLayout) {
            console.error(`Layout ${layoutName} não encontrado no DOM.`);
            return;
        }

        // Obtém ou cria a `carousel-inner` dentro do carrossel
        let newsContainer;
        if (layoutName === 'news-carousel') {
            let carouselInner = newsLayout.querySelector('.carousel-inner');
            if (!carouselInner) {
                carouselInner = document.createElement('div');
                carouselInner.classList.add('carousel-inner');
                newsLayout.appendChild(carouselInner);
            }

            // Cria o container do item do carrossel
            newsContainer = document.createElement('div');
            newsContainer.classList.add('carousel-item');

            // Verifica se é o primeiro item (adiciona a classe 'active')
            if (carouselInner.querySelectorAll('.carousel-item').length === 0) {
                newsContainer.classList.add('active');
            }

            carouselInner.appendChild(newsContainer);
        } else {
            newsContainer = newsLayout;
        }

        // Cria a estrutura do card da notícia
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news-card');

        // Imagem da notícia
        const newsImg = document.createElement('img');
        newsImg.src = imageUrl;
        newsImg.classList.add('news-image');
        newsDiv.appendChild(newsImg);

        // Conteúdo da notícia
        const newsContent = document.createElement('div');
        newsContent.classList.add('news-content');

        const newsTitle = document.createElement('h2');
        newsTitle.textContent = title;
        newsTitle.classList.add('news-title');
        newsContent.appendChild(newsTitle);

        const newsDescription = document.createElement('p');
        newsDescription.textContent = description;
        newsDescription.classList.add('news-description');
        newsContent.appendChild(newsDescription);

        const newsButton = document.createElement('button');
        newsButton.textContent = 'Ler Notícia';
        newsButton.classList.add('news-button');
        newsButton.addEventListener('click', () => {
            window.location.href = `newsDetails.html?id=${newsId}`;
        });
        newsContent.appendChild(newsButton);

        newsDiv.appendChild(newsContent);
        newsContainer.appendChild(newsDiv);

        // Atualiza o contador
        layoutProductCount[layoutName]++;
    } else {
        console.log(`Layout ${layoutName} atingiu o número máximo de notícias.`);
    }
}



// Função para encontrar o layout com menos produtos
function getLayoutWithLeastProducts() {
    // Encontrando o layout com menos produtos (que ainda não atingiu o limite máximo)
    let layoutWithLeastProducts = '';
    let minCount = Infinity;

    // Verificando todos os layouts e seus contadores de produtos
    for (const layout in layoutProductCount) {
        if (layoutProductCount[layout] < layoutLimits[layout].max && layoutProductCount[layout] < minCount) {
            layoutWithLeastProducts = layout;
            minCount = layoutProductCount[layout];
        }
    }

    return layoutWithLeastProducts;
}