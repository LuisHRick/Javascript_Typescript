function Produto(preco, tamanho, nome) {
    this.preco = preco
    this.tamanho = tamanho
    this.nome = nome
}

const camisa = new Produto(10, 3, 'camisa')

console.log(camisa)
camisa.preco = 300
camisa.tamanho = 15

console.log(camisa)