



    fetch("http://localhost:8088")
    .then(response => response.json())
    .then(data => {
        function renderProducts(products) {
            // Aquí va el código para mostrar los productos
        }

        renderProducts(data);
    })
    .catch(error => console.error("Error al cargar los productos:", error));