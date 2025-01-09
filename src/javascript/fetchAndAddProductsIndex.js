// função para adicionar alguns produtos na pagina principal
async function fetchAndAddProductsIndex() {
    try {
        // exemplo de url (funcional)
        const response = await fetch(`https://fakestoreapi.com/products`);
        const products = await response.json();

        // adiciona até chegar ou limite de 3 produtos
        let num = 1
        products.forEach(productss => {
            if (num <= 3) {
                document.getElementById(`product-image${num}`).src = productss.image;
                document.getElementById(`product-description${num}`).textContent = productss.description;
                num = num + 1
            }
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}
