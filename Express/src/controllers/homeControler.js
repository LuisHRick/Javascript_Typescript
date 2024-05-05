// const HomeModel = require('../models/homeModel')

// HomeModel.create({
//     titulo: 'Um Título',
//     descricao: 'Uma descrição de testes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))


exports.paginaInicial = (req, res, next) => {
    res.render(
        'index', 
        {
            titulo: "Este é o título da página"
        }
    )
}

exports.trataPost = (req, res, next) => {
    res.send('Arquivo enviado')
}