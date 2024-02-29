const contenedor_productos = document.getElementById("contenedor-productos");
document.addEventListener("DOMContentLoaded", cargar_productos);

function cargar_productos() {
    fetch("articulos.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
                const card = `<div class="producto">
                                    <img src="${producto.imagen}" class="imagen-prod">
                                    <h2>${producto.nombre}</h2>
                                    <p>Marca: ${producto.marca}</p>
                                    <p>Precio: ${producto.precio}$</p>
                                    <button class= "btn btn-dark" onclick="calcular_mas_IVA(${producto.precio}, this);">Valuar</button>
                                    <p class="resultado"></p>
                                </div>`;
                contenedor_productos.innerHTML += card;
            });
        })
        .catch((error) => console.error("Hubo un error trayendo los datos", error));
}

function calcular_mas_IVA(precio, button) {
    const IVA = 0.23;
    const mas_iva = precio + (IVA * precio);
    mostrar_precio_mas_iva(mas_iva, button);
}

function mostrar_precio_mas_iva(precio, button) {
    const resultadoElement = button.parentElement.querySelector('.resultado');
    resultadoElement.textContent = "Precio con IVA: " + precio; // Actualizar el contenido del elemento resultado
}
