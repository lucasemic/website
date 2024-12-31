// Função para buscar produtos da API
async function fetchProducts() {

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = 'Todos'

    try {
        // Simulação de API
        const response = await fetch(`https://fakestoreapi.com/products`);
        const products = await response.json();

        // Adiciona os produtos retornados pela API
        products.forEach(product => {
            addProduct(product.image, product.title, product.description);
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}
fetchProducts()