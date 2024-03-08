const  entrada = require ('readline-sync')

// exer001
let capital = parseFloat(entrada.question('digite seu capital: '))
let taxa = parseFloat(entrada.question('digite sua taxa: '))
let tempo = parseFloat(entrada.question('digite seu tempo: '))
let juro = (capital*taxa*tempo)
console.log(juro)
// // exer002
let fv = entrada.question(("Qual e o valor final?: "))
 let pv = entrada.question(("Qual e o valor normal?: "))
let n = entrada.question(("Qual o número de prestações?: "))
let taxa_juros
taxa_juros = Math.pow((fv/pv),(1/n)) - 1
console.log(taxa_juros)
// // exer003
let valor_real = parseFloat(entrada.question('digite o valor em real: '))
let valor_dolar = 4.93
let valor_final = valor_real * valor_dolar
console.log(valor_final)
exer004
let valor_original = parseFloat(entrada.question('Digite o preco: '))
let desconto = parseFloat(entrada.question('digite o valor do desconto: '))
let valor_descontado = (desconto/100) * valor_original
console.log(valor_descontado)
// exer005
let numero = Math.random(0 && 11)
let c1 = parseFloat(entrada.question('Descubra o numero:'))
if (c1 > numero)
{
    console.log(parseFloat(entrada.question('esse numero é menor do que ${c1}, vc tem somente mais duas chances:')))
}
else if(c1 < numero)
{
    console.log(parseFloat(entrada.question('esse numero é maior do que ${c1}, vc tem somente mais duas chances:'))
}
else if(c1 == num)
{
    console.log('Você acertou!')
}
// exer006
let jogador1 =  (entrada.question('Pedra, papel ou tesoura?!:'))
let jogador2 = (entrada.question('Pedra, papel ou tesoura?!:'))
if (jogador1 == 'pedra' && jogador2 == 'papel')
{
    console.log('Vitoria pra ${jogador1}')
}
else if(jogador2 == 'pedra' && jogador1 == 'papel')
{
    console.log('Vitoria pra ${jogador1}')
}
else if (jogador1 == 'pedra' && jogador2 == 'pedra')
{
    console.log('Empate')
}
else if (jogador1 == 'papel' && jogador2 == 'papel')
{
    console.log('Empate')
}
else if (jogador2 == 'tesoura' && jogador1 == 'pedra')
{
    console.log('Vitoria para ${jogador1}')
}
else if (jogador1 == 'tesoura' && jogador2 == 'tesoura')
{
    console.log('Empate')
}

else if (jogador1 == 'tesoura' && jogador2 == 'pedra')
{
    console.log('Vitoria para ${jogador2}')
}
else if (jogador1 == 'papel' && jogador2 == 'tesoura')
{
    console.log('Vitoria para ${jogador2}')
}
else if (jogador2 == 'papel' && jogador1 == 'tesoura')
{
    console.log('Vitoria para ${jogador1}')
}   