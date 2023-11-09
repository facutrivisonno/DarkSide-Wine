window.onload = function () {

    // Obtén referencias a los elementos HTML relevantes
    const searchInput = document.getElementById("search-input");
    const products = document.querySelectorAll(".product");

    // Agrega un evento de entrada (input) al campo de búsqueda
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase(); // Obtén el texto del campo de búsqueda en minúsculas

        // Itera sobre los productos y muestra u oculta los contenedores según el término de búsqueda
        products.forEach(function (product) {
            const productDesc = product.querySelector(".desc-product").textContent.toLowerCase(); // Descripción del producto en minúsculas

            // Compara el término de búsqueda con la descripción del producto
            if (productDesc.includes(searchTerm)) {
                product.style.display = "block"; // Muestra el producto si coincide
            } else {
                product.style.display = "none"; // Oculta el producto si no coincide
            }
        });
    });

}