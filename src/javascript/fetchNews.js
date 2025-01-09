// função responsavel por pegar noticias da api
async function fetchNews() {
    try {
        // exemplo de url (funcional)
        const response = await fetch(`https://fakestoreapi.com/products`);
        const newss = await response.json();

        // manda para a função de preencher pagina com noticias
        newss.forEach(news => {
            addNews(news.image, news.title, news.description, news.id);
        });
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}