// ex001

const entrada = require('readline-sync')

let num1 = parseFloat(entrada.question("diga um numero:"))
if ( num1 == 0)
{
    console.log("zero")
}
if (num1 <= -1)
{
    console.log("negativo")
}
if (num1 >= 1)
{
    console.log("positivo")
}

//ex002

const valor1 = parseFloat(entrada.question('digite um valor:'))
const valor2 = parseFloat(entrada.question('digite um valor:'))
const valor3 = parseFloat(entrada.question('digite um valor:'))
let maior = 0
let menor = 0
let medio = 0
if (valor1 > valor2 && valor1 > valor3)
{
    maior = valor1
}
else if(valor1 < valor2 && valor1 < valor3)
{
    menor = valor1
}
else
{
    medio = valor1
}

if (valor2 > valor1 && valor2 > valor3)
{
    maior = valor2
}
else if(valor2 < valor1 && valor2 < valor3)
{
    menor = valor2
}
else
{
    medio = valor2
}
if (valor3 > valor2 && valor3 > valor1)
{
    maior = valor3
}
else if(valor3 < valor2 && valor3 < valor2)
{
    menor = valor3
}
else
{
    medio = valor3
}
console.log('menor', menor)
console.log('medio', medio)
console.log('maior', maior)

//ex003

const time1 = entrada.question('Qual seu time:')
const ponto1 = parseFloat(entrada.question('Quantos gols:'))
const time2 = entrada.question('Qual o oponente:')
const ponto2 = parseFloat(entrada.question('Quantos gols:'))
if (ponto1 == ponto2)
{
    console.log('empate')
}
else if (ponto1 > ponto2)
{
    console.log(`o vencedor é ${time1} com ${ponto1} gols`)
}
else
{
    console.log(`o vencedor é ${time2} com ${ponto2}`)
}

//ex004

let homem1 = parseFloat(entrada.question('Digite sua idade:'))
let homem2 = parseFloat(entrada.question('Digite sua idade:'))
let mulher1 = parseFloat(entrada.question('Digite sua idade:'))
let mulher2 =  parseFloat(entrada.question('Digite sua idade:'))
if(homem1 > homem2 && mulher2 > mulher1 )
{
    console.log('homem mais velho mais mulher mais nova', homem1 + mulher11)
    console.log('homem mais novo vezes mulher mais velha', homem2 * mulher22)
}
else if (homem2 > homem1 && mulher1 > mulher2 )
{
    console.log('homem mais velho mais mulher mais nova', homem2 + mulher2)
    console.log('homem mais novo vezes mulher mais velha', homem1 * mulher1)
}

//ex005

let nome = parseFloat(entrada.question('Informe seu nome:'))
let salario = (entrada.question('Informe seu salario:'))
let tempo = parseFloat(entrada.question('Ha quantos nos voce trabalha aqui?:'))
if (tempo <= 3)
{
    let aumento = (salario * 0.03)
    console.log(`Seu novo salario é de ${salario} mais ${aumento} de aumento`)
}
else if ((tempo > 3) && (tempo < 10))
{
    let aumento = (salario * 0.125)
    console.log(`Seu novo salario é de ${salario} mais ${aumento} de aumento`)
}
else if (tempo >= 10)
{
    let aumento = (salario * 0.2)
    console.log(`Seu novo salario é de ${salario} mais ${aumento} de aumento`)
}