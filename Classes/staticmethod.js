class Televisao {
    constructor(cor, marca) {
        this.cor = cor
        this.marca = marca
    }

    // Acessiveis fora da classe
    aumentarVolume() {
        console.log('Aumentando volume')
    }
    
    abaixarVolume() {
        console.log('Abaixando volume')
    }

    // Acessíveis somente dentro da classe
    static trocarPilha() {
        console.log('Trocando Pilha')
    }
    
}