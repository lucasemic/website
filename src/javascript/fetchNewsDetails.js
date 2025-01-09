// função responsavel por pegar noticia da api por id e preencher pagina de detalhes
async function fetchNewsDetails() {
    try {
        // exemplo de url (funcional)
        const response = await fetch(`https://fakestoreapi.com/products/${newsId}`);
        const product = await response.json();

        //pega elemento por id e insere detalhe
        document.getElementById('news-title').textContent = product.title;
        document.getElementById('news-image').src = product.image;
        document.getElementById('news-description').textContent = product.description;
        document.getElementById('#news-date#').textContent = product.date;
        document.getElementById('#news-autor#').textContent = product.autor;
        document.getElementById('#news-font#').textContent = product.font;

        document.getElementById('back-button').onclick = function() {
            window.history.back();
        };
    } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
    }
}

// responsavel por resgatar o id da url
const urlParams = new URLSearchParams(window.location.search);
const newsId = urlParams.get('id');