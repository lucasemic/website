// Função para buscar detalhes do produto da API
async function fetchProductDetails() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();

        // Preenchendo os detalhes do produto
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `$${product.price}`;
        document.getElementById('product-category').textContent = `Categoria: ${product.category}`;

        // Função para voltar à página anterior
        document.getElementById('back-button').onclick = function() {
            window.history.back();
        };
    } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
    }
}

// Obtendo o ID do produto da URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
fetchProductDetails(productId)