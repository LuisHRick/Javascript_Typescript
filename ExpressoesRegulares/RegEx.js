
// g -> global (encontra todas as ocorrências, caso contrário, parará na primeira)
// i -> insensitive (case insensitive)
// m -> multiple lines
// () -> grupos
// | -> ou

// [] -> conjunto
// [^] -> negação do conjunto (diferente de ^)

// ^ -> começa com
// $ -> termina com

// {m,M} -> minimo e Máximo

text = `João`

const regExp1 = /(joão|maria|luiz)/gi

// .text retorna um valor booleano verificando se a regEx existe no text
// .index retorna o index em que apareceu
// .match retorna partes do text que batem com a regEx passada em um conjunto
console.log(regExp1.test(text))


// $1 representa o grupo 1, assim como $2 representa o 2 e assim vai...
// (...) (...) (...)
console.log(text.replace(regExp1, `<b>$1</b>`))

// * (opcionais) 0 ou n
// + (obrigatório) 1 ou +
// ? (opcionais) 0 ou n (usamos ? após um caractere que é opcional, por exemplo: (jpe?g pode retornar jpeg ou jpg))

// . -> um caractere qualquer, menos quebra de linha (se usado com .+, pode ser mais que 1 caractere, somando com ? para não ir até o final)
// \ -> escape (ou seja, ja que . é um metacaractere do regEx, se quisermos achar um .jpg, usamos \.jpg)

// lookahead, lookbehind e lookaround
// uma forma de usar .match para verificar coisas na string e retornar valores relacionados e dependentes do valor da regEx mas sem retornar a regEx
// ex: retorna objetos em uma lista se houver o atributo ACTIVE

