
// função responsavel por pegar produtos FILTRADOS POR NOME da api
async function fetchResultsSearch() {

    //zerando os layouts usados em presquisa ou filtragem
    const query = document.getElementById('searchInput').value
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = 'Pesquisa Personalizada'
    zerarFiltros()
    try {
        // exemplo de url (funcional)
        const response = await fetch(`https://fakestoreapi.com/products?search=${query}`);
        const product = await response.json();

        if (product.length > 0) {
            // manda para a função de preencher pagina com produtos
            addProduct(product.image, product.title, product.description);
        }
    } catch (error) {
        console.error('Erro ao buscar resultados:', error);
    }
}
