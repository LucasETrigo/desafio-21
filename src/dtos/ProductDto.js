export default class ProductDto {
    constructor({ _id, title, price, thumbnail }) {
        this.id = _id
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
    }
}

export function asDto(prod) {
    if (Array.isArray(prod))
        return prod.map(p => new ProductDto(p))
    else
        return new ProductDto(prod)
}