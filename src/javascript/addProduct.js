// Definindo limites para cada layout
const layoutLimits = {
    'product-carousel': { min: 10, max: 10 },
    'product-list': { min: 2, max: 5 },
    'product-grid': { min: 4, max: 12 }
};

// Contador de produtos por layout
const layoutProductCount = {
    'product-carousel': 0,
    'product-list': 0,
    'product-grid': 0
};

// Função para adicionar produtos dinamicamente
function addProduct(imageUrl, title, description, productId) {

    // Encontrando o layout com menos produtos
    let layoutName = getLayoutWithLeastProducts();

    // Verifica se o layout tem espaço para mais produtos
    if (layoutProductCount[layoutName] < layoutLimits[layoutName].max) {
        // Adicionando produto no layout
        const productContainer = document.getElementById(layoutName);

        // Criando a div do produto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Criando e adicionando a imagem
        const productImg = document.createElement('img');
        productImg.src = imageUrl;
        productImg.classList.add('product-img');
        productDiv.appendChild(productImg);

        // Criando e adicionando o título
        const productTitle = document.createElement('h3');
        productTitle.textContent = title;
        productTitle.classList.add('product-title');
        productDiv.appendChild(productTitle);

        // Criando e adicionando a descrição
        const productDescription = document.createElement('p');
        productDescription.textContent = description;
        productDescription.classList.add('product-description');
        productDiv.appendChild(productDescription);

        // Criando e adicionando o botão
        const productButton = document.createElement('button');
        productButton.textContent = 'Ver Produto';
        productButton.classList.add('product-button');

        // Redireciona para a página de detalhes ao clicar
        productButton.addEventListener('click', () => {
            // Use um identificador único (como productId) no URL
            window.location.href = `productDetails.html?id=${productId}`;
        });
        productDiv.appendChild(productButton);


        // Adicionando o produto ao container
        productContainer.appendChild(productDiv);

        // Atualizando o contador de produtos no layout
        layoutProductCount[layoutName]++;
    } else {
        console.log(`Layout ${layoutName} atingiu o número máximo de produtos.`);
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

function zerarFiltros() {
    layoutProductCount['product-list'] = 0;
    layoutProductCount['product-grid'] = 0;

    return
}

