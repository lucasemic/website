// Função para buscar produtos da API
async function fetchAndAddNewsIndex() {
    try {
        // Simulação de API
        const response = await fetch(`https://fakestoreapi.com/products`);
        const newss = await response.json();

        // Adiciona os produtos retornados pela API
        let num = 1
        newss.forEach(news => {
            if (num <= 5) {
                document.getElementById(`news${num}`).src = news.image;
                num = num + 1
            }
        });
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}
