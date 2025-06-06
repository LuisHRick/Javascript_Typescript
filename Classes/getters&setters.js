const _velocidade = Symbol('velocidade')

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }
}