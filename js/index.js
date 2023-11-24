const productos = [
    { nombre: "Teclado", precio: 10, cantidad: 1 },
    { nombre: "Pantalla", precio: 20, cantidad: 1 },
    { nombre: "Mouse", precio: 30, cantidad: 1 },
];

let productosSeleccionados = [];

for (let producto of productos) {
    const seleccion = prompt(`Desea llevar el/la ${producto.nombre}? (Si/No)`).toLowerCase();
    if (seleccion === "si") {
        let cantidad = parseInt(prompt(`¿Cuántos ${producto.nombre} desea llevar?`)) || 1;
        producto.cantidad = cantidad;
        productosSeleccionados.push(producto);
    }
}

function calcularTotal(productosSeleccionados) {
    let costoTotal = 0;

    for (let producto of productosSeleccionados) {
        costoTotal += producto.precio * producto.cantidad;
    }

    return costoTotal;
}

const totalCosto = calcularTotal(productosSeleccionados);

let mensaje = `Gracias por su compra.\n\nProductos seleccionados:\n`;

for (let producto of productosSeleccionados) {
    mensaje += `${producto.nombre} - ${producto.cantidad} unidades - $${producto.precio * producto.cantidad}\n`;
}

mensaje += `\nEl total a pagar por los productos es: $${totalCosto}`;

alert(mensaje);

