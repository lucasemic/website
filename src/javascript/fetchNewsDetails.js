// Função para buscar detalhes do produto da API
async function fetchNewsDetails() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${newsId}`);
        const product = await response.json();

        // Preenchendo os detalhes do produto
        document.getElementById('news-title').textContent = product.title;
        document.getElementById('news-image').src = product.image;
        document.getElementById('news-description').textContent = product.description;
        document.getElementById('news-date').textContent = product.date;
        document.getElementById('news-autor').textContent = product.autor;
        document.getElementById('news-font').textContent = product.font;

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
const newsId = urlParams.get('id');