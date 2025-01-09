// limite de produtos por layout
const layoutLimits = {
    'product-carousel': { min: 10, max: 10 },
    'product-list': { min: 2, max: 5 },
    'product-grid': { min: 4, max: 12 }
};

// contagem de produtos por layout
const layoutProductCount = {
    'product-carousel': 0,
    'product-list': 0,
    'product-grid': 0
};

// função para adicionar produtos nos layouts
function addProduct(imageUrl, title, description, productId) {
    // paga o layout com menos produtos
    let layoutName = getLayoutWithLeastProducts();

    if (layoutProductCount[layoutName] < layoutLimits[layoutName].max) {

        // paga a div do layout
        const productContainer = document.getElementById(layoutName);

        // cria a div do produto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // cria e adiciona imagem no produto
        const productImg = document.createElement('img');
        productImg.src = imageUrl;
        productImg.classList.add('product-img');
        productDiv.appendChild(productImg);

        // cria e adiciona titulo no produto
        const productTitle = document.createElement('h3');
        productTitle.textContent = title;
        productTitle.classList.add('product-title');
        productDiv.appendChild(productTitle);

        // cria e adiciona descrição no produto
        const productDescription = document.createElement('p');
        productDescription.textContent = description;
        productDescription.classList.add('product-description');
        productDiv.appendChild(productDescription);

        // cria e adiciona botão com id do produto
        const productButton = document.createElement('button');
        productButton.textContent = 'Ver Produto';
        productButton.classList.add('product-button');

        productButton.addEventListener('click', () => {
            // redireciona para pagina de detalhes de produto com id na url
            window.location.href = `productDetails.html?id=${productId}`;
        });
        productDiv.appendChild(productButton);

        // adiciona produto no layout
        productContainer.appendChild(productDiv);

        // soma a contagem de produtos no layout
        layoutProductCount[layoutName]++;
    } else {
        console.log(`Layout ${layoutName} atingiu o número máximo de produtos.`);
    }
}

// função complementar para detectar qual o layout com menos produtos e quenão atingiu seu limite
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

// função complementar usada para zerar layouts ao realizar pesquisa ou filtragem
function zerarFiltros() {
    layoutProductCount['product-list'] = 0;
    layoutProductCount['product-grid'] = 0;

    return
}

