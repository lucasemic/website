async function fetchAndAddProductsIndex() {
    try {
        // Simulação de API
        const response = await fetch(`https://fakestoreapi.com/products`);
        const products = await response.json();

        // Adiciona os produtos retornados pela API
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
