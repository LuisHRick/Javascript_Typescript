function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let _estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        get: function(){
            return estoque
        },
        set: function(valor) {
            _estoque = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
p1.estoque = 3
console.log(p1)
console.log(p1.estoque)