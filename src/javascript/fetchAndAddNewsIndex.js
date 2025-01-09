// função para adicionar algumas noticias na pagina principar
async function fetchAndAddNewsIndex() {
    try {
        // exemplo de url (funcional)
        const response = await fetch(`https://fakestoreapi.com/products`);
        const newss = await response.json();

        // adiciona até chegar ou limite de 5 noticias
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
