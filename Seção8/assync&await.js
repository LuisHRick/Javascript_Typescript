esperaAi('Frase 1', 1000)
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 2', 1000)
    })
    .then(resposta => {
        console.log(resposta)
    })


async function executa() {
    const fase1 = await esperaAi('Frase 1', 1000)
    console.log(fase1)
    const fase2 = await esperaAi('Frase 2', 300)
    console.log(fase2)
    const fase3 = await esperaAi('Frase 3', 500)
    console.log(fase3)
}