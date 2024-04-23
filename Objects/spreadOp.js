const produto = { nome: 'Caneca', preco: 1.8}

const caneca = { ...produto, material: "papel"} // cópia
const caneca2 = produto // produto e caneca2 são a msm coisa, logo, alterar um altera o outro