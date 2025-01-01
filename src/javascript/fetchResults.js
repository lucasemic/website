
// Função para buscar resultados
async function fetchResults() {
    const query = document.getElementById('searchInput').value
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = 'Pesquisa Personalizada'
    //zerando contagem de layouts usados com filtros 
    zerarFiltros()
    try {
        // URL da API com o parâmetro de pesquisa
        const response = await fetch(`https://fakestoreapi.com/products?search=${query}`);
        const product = await response.json();

        // Exibir os resultados
        if (product.length > 0) {
            // Adiciona os produtos retornados pela API
            addProduct(product.image, product.title, product.description);
        }
    } catch (error) {
        console.error('Erro ao buscar resultados:', error);
    }
}
