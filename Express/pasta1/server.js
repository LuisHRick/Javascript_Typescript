const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/contato', (req, res) => {
    res.send('Você está em Contatos')
})

app.listen(3000, () => {
    console.log('Executando servidor')
})