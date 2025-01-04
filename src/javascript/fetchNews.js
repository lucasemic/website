// Função para buscar produtos da API
async function fetchNews() {
    try {
        // Simulação de API
        const response = await fetch(`https://fakestoreapi.com/products`);
        const newss = await response.json();

        // Adiciona os produtos retornados pela API
        newss.forEach(news => {
            addNews(news.image, news.title, news.description, news.id);
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}
fetchNews()