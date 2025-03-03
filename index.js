'use strict'

let basket = []

const Basket = function() {
    this.products = []

    this.addProduct = (product) => {
        const findId = this.products.find((el) => el.name === product.name)?.id;

        if(findId) {
            this.products.forEach(el => {
                if(el.id == findId) {
                    el.count += product.count
                }
            })
        }
        else this.products.push(product)
    }

    this.removeProduct = (product, count) => {
        const findProduct = this.products.find((el) => el.id == product.id)
        if(findProduct.count <= count) {
            console.log('Удалить элемент')
            this.products = this.products.filter((el) => el.id != product.id)
        } else {
            console.log('Вычесть ' + count)
            findProduct.count -= count
        }
    }
}

Basket.prototype.manyTypesProducts = function() {
    return this.products.length
}

let korzina = new Basket();

const bread = {
    id: 1,
    name: 'Bread', 
    count: 2
}

const milk = {
    id: 2,
    name: 'Milk', 
    count: 3
}

korzina.addProduct(bread)
korzina.addProduct(bread)
korzina.addProduct(milk)
korzina.addProduct(milk)

korzina.removeProduct(bread, 7)
korzina.removeProduct(milk, 6)

console.log(korzina)