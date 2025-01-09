// responsavel pela tela de carregamento de todos as paginas que possuem js

//pega id da pagina
const currentPage = document.body.dataset.page;

let scriptsToExecute = [];

//descobre quais scripts executar baseado na pagina
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

//espera todos os scripts terminarem para liberar a pagina
Promise.all(scriptsToExecute.map(script => script()))
    .then(() => {
    // retira o loader
    document.getElementById('loader').style.display = 'none';

    // mostra o conteudo
    document.querySelectorAll('nav, .content, footer').forEach(el => {
        el.style.display = 'hidden';
    });
});