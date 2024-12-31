// Função para buscar produtos da API
async function fetchProductsBy(filter) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = filter
    
    try {
        // Simulação de API
        const response = await fetch(`https://fakestoreapi.com/products${filter}`);
        const products = await response.json();

        // Adiciona os produtos retornados pela API
        products.forEach(product => {
            addProduct(product.image, product.title, product.description);
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}