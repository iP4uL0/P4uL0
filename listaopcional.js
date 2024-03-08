const entrada = require ('readline-sync')

// exer001
// let emprestimo = parseFloat(entrada.question('Digite o valor do emprestimo: '))
// let juros = parseFloat(entrada.question('Digite o valor do juros: '))
// let periodo = parseFloat(entrada.question('Digite o tempo de pagamento: '))
// let rendacliente = parseFloat(entrada.question('Digite sua renda mensal: '))
// let renda = rendacliente * 0.3
// let emprestimofinal = (emprestimo + ((juros / 100) * emprestimo)) / periodo

// if(emprestimofinal < renda){
   
//     console.log('Emprestimo aprovado')
//     console.log ('o valor é ' + emprestimofinal)
// }

// else{
//     console.log('Emprestimo negado')
// }
// exer002
// let ano = parseFloat(entrada.question('digite um ano: '))
// if(ano % 400 == 0){
//     console.log('bisexto')
// }
// else if((ano % 4 == 0 && ano % 100 != 0)){
// console.log('bisexto')
// }
// else{
// console.log('nao bisexto')
// }
// exer003
// let veiculo = (entrada.question('Digite seu veiculo: '))
// let eixos = parseFloat(entrada.question('digite o numero de eixos: '))

// if(veiculo=='carro' && eixos == 2){
//     console.log("o valor e 10.00")
// }
// else if(veiculo=='moto' && eixos == 2){
//     console.log("o valor e 5.00")
// }
// else if(veiculo=='caminhao' && eixos == 2){
//     console.log("o valor e 20.00")
// }
// else if(veiculo=='caminhao' && eixos == 3){
//     console.log("o valor e 30.00")
// }
// exer004
let LetraMaiuscula = /[A-Z]/
let LetraMinuscula = /[a-z]/
let numeros = /[0-9]/
let caracteresEspecial = /[!|@|#|$|%|^|&|*|(|)-|_]/

let senha = entrada.question('Digite a senha: ')
if(senha.search(LetraMaiuscula )){
    console.log('deve ter maiuscula')
}
if(senha.search(LetraMinuscula)){
    console.log('deve ter minuscula')
}
if(senha.search(numeros)){
    console.log('deve ter numero')
}
if(senha.search(caracteresEspecial)){
    console.log('deve ter caractere especial')
}
else if (senha==numeros || LetraMaiuscula ||){
    console.log('senha forte')
}