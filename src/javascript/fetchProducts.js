// Função para buscar produtos da API
async function fetchProducts() {
    alert("oifhdgoih")
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