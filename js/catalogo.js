let carrito = [];

function agregarProducto(newImg, newName, newPrice) {
    const precioSinMoneda = newPrice.replace("PEN ", "");
    const precioNumerico = parseFloat(precioSinMoneda);
    const producto = { img: newImg, name: newName, price: precioNumerico };
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = "";

    let total = 0;

    carrito.forEach(producto => {
        // Crear una nueva fila
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row", "mb-3");

        // Columna para la imagen
        const imgCol = document.createElement("div");
        imgCol.classList.add("col");
        const img = document.createElement("img");
        img.src = producto.img;
        img.width = 100;
        imgCol.appendChild(img);
        rowDiv.appendChild(imgCol);

        // Columna para el nombre
        const nameCol = document.createElement("div");
        nameCol.classList.add("col");
        const name = document.createElement("p");
        name.textContent = producto.name;
        nameCol.appendChild(name);
        rowDiv.appendChild(nameCol);

        // Columna para el precio
        const priceCol = document.createElement("div");
        priceCol.classList.add("col");
        const price = document.createElement("p");
        price.textContent = `PEN ${producto.price.toFixed(2)}`;
        priceCol.appendChild(price);
        rowDiv.appendChild(priceCol);

        // Añadir la fila al modal
        modalBody.appendChild(rowDiv);

        // Sumar el precio al total
        total += producto.price;
    });

    // Actualizar el total en el footer del modal
    const totalPagar = document.getElementById("total-pagar");
    totalPagar.textContent = `Total a pagar: PEN ${total.toFixed(2)}`;
}
