export default class Product {
    id
    title
    price
    thumbnail

    constructor({ id, title, price, thumbnail }) {
        this.id = id
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
    }

    get id() { return this.id }

    set id(id) {
        if (!id) throw new Error('"id" is a required field')
        this.id = id
    }

    get title() { return this.title }

    set title(title) {
        if (!title) throw new Error('"title" is a required field')
        this.title = title
    }

    get price() { return this.price }

    set price(price) {
        if (!price) throw new Error('"price" is a required field')
        this.price = price
    }

    get thumbnail() { return this.thumbnail }

    set thumbnail(thumbnail) {
        if (!thumbnail) throw new Error('"thumbnail" is a required field')
        this.thumbnail = thumbnail
    }
}