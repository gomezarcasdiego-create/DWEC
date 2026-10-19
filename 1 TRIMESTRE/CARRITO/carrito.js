
// LÓGICA DEL CARRITO
// Esta clase NO conoce el HTML ni el DOM: solo guarda datos y calcula.

class Carrito {
    constructor(productos, moneda = "€") {
        this.moneda = moneda;
        this.productos = new Map();

        productos.forEach(p => {
            const sku = p.sku ?? p.SKU;
            this.productos.set(sku, {
                sku: sku,
                title: p.title,
                // Guardamos el precio en céntimos para evitar errores de decimales (0.1 + 0.2)
                precioCentimos: Math.round(parseFloat(p.price) * 100),
                quantity: 0
            });
        });
    }

    // Actualiza las unidades que se quieren comprar de un producto.
    // Devuelve las unidades finales (nunca negativas ni decimales).
    actualizarUnidades(sku, unidades) {
        const producto = this.productos.get(sku);
        if (!producto) {
            throw new Error(`Producto no encontrado: ${sku}`);
        }
        const n = Math.floor(Number(unidades));
        producto.quantity = Number.isFinite(n) && n > 0 ? n : 0;
        return producto.quantity;
    }

    // Devuelve los datos de un producto además de las unidades seleccionadas
    obtenerInformacionProducto(sku) {
        const producto = this.productos.get(sku);
        if (!producto) {
            return null;
        }
        return this._crearInformacion(producto);
    }

    // Devuelve TODOS los productos de la tienda con sus unidades (para pintar la tabla)
    obtenerProductos() {
        return [...this.productos.values()].map(p => this._crearInformacion(p));
    }

    // Devuelve los productos añadidos al carrito (unidades > 0) y el total calculado
    obtenerCarrito() {
        const seleccionados = [...this.productos.values()].filter(p => p.quantity > 0);
        const totalCentimos = seleccionados.reduce(
            (suma, p) => suma + p.precioCentimos * p.quantity, 0
        );

        return {
            total: totalCentimos / 100,
            currency: this.moneda,
            products: seleccionados.map(p => this._crearInformacion(p))
        };
    }

    // Método auxiliar interno
    _crearInformacion(producto) {
        return {
            sku: producto.sku,
            title: producto.title,
            price: producto.precioCentimos / 100,
            quantity: producto.quantity,
            total: (producto.precioCentimos * producto.quantity) / 100
        };
    }
}