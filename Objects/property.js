function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false
    })
}

const p1 = new Produto('Camiseta', 20, 3)