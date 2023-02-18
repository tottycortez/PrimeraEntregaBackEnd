class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts() {
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock){

        
        
        const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1

        const producto = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(producto)
    }
}
const manager = new ProductManager
manager.addProduct('Arroz', 'Arroz Económico', '$230', 'Sin imagen', '123', '500')

manager.addProduct('Arroz', 'Arroz Económico', '$230', 'Sin imagen', '555', '500')

console.log(manager)
