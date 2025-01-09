// função responsavel por pegar produtos da api por id e preencher pagina de detalhes
async function fetchProductDetails() {
    try {
        // exemplo de url (funcional)
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();

        //pega elemento por id e insere detalhe
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `R$${product.price}`;
        document.getElementById('product-category').textContent = `Categoria: ${product.category}`;

        document.getElementById('back-button').onclick = function() {
            window.history.back();
        };
    } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
    }
}

// responsavel por resgatar o id da url
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');