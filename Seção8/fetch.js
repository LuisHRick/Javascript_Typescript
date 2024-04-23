fetch('pagina.html')
    .then(response => {
        if(response.status !== 200) throw new Error('ERRO 404')
        return response.text
    })
    .then(html => {
        console.log(html)
    })