const currentPage = document.body.dataset.page; // Identifica a página atual

let scriptsToExecute = [];

if (currentPage === 'home') {
    scriptsToExecute = [fetchAndAddNewsIndex, fetchAndAddProductsIndex];
} else if (currentPage === 'newsDetails') {
    scriptsToExecute = [fetchNewsDetails];
} else if (currentPage === 'news') {
    scriptsToExecute = [fetchNews];
} else if(currentPage === 'productDetails') {
    scriptsToExecute = [fetchProductDetails];
} else if(currentPage === 'products') {
    scriptsToExecute = [fetchProducts];
}


// Espera a execução de todos os scripts
Promise.all(scriptsToExecute.map(script => script()))
    .then(() => {
    // Quando todos os scripts terminarem, ocultamos o loader
    document.getElementById('loader').style.display = 'none';

    // Exibe o conteúdo da página
    document.querySelectorAll('nav, .content, footer').forEach(el => {
        el.style.display = 'hidden';
    });
});