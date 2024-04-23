function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })
}

esperaAi('Frase 1', 1000)
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 2', 1000)
    })
    .then(resposta => {
        console.log(resposta)
    })



const promises = [
    esperaAi('Promise 1', 1000),
    esperaAi('Promise 2', 3000),
    esperaAi('Promise 3', 500)
]

// entrega todos ao mesmo tempo
Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })

// entrega só o primeiro a passar
Promise.race(promises)
    .then(function(valor) {
        console.log(valor)
    })