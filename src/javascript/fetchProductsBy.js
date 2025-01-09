// função responsavel por pegar produtos FILTRADOS POR CATEGORIA da api
async function fetchProductsBy(filter) {

    //zerando os layouts usados em presquisa ou filtragem
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    const filterTitle = document.getElementById('filterTitle');
    filterTitle.innerHTML = filter
    zerarFiltros()
    
    try {
        // exemplo de url (funcional)
        const response = await fetch(`https://fakestoreapi.com/products${filter}`);
        const products = await response.json();

        products.forEach(product => {
            // manda para a função de preencher pagina com produtos
            addProduct(product.image, product.title, product.description,  product.id);
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}