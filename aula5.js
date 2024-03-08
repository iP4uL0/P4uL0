const entrada = require ('readline-sync')

let senha = entrada.question('Digite sua senha: ')
    if (senha ==123){
        console.log('Bem-vindo! seu saldo atual é de 100 reais\n1-Saque\n2-Deposito\n3-sair' )
        let opcao = parseFloat(entrada.question('Digite sua opcao: '))
        if(opcao == 1)
        {
            let saldo_atual = 100
            let saque = parseFloat(entrada.question('Digite o valor do saque: '))
                if(saque > saldo_atual || saque <= 0 || saque == null ){
                    console.log('valor indisponivel')
                }
                else{
                    let valor_final = saldo_atual - saque
                    console.log('valor retirado com sucesso! o valor atual é de '+valor_final)
                    console.log('encerrando o programa')
                }
        } 
        else if(opcao==2) 
        {
            let deposito = parseFloat(entrada.question('Digite o valor do deposito: '))
            let novo_saldo = deposito + saldo_atual
            console.log('valor adicionado com sucesso +o valor atual é de' +novo_saldo)
        } 
        else if(opcao==3)
        {
            console.log('encerrando o programa')
        }
        else{
            console.log('encerrando o programa')
        }
    }
    else    
    {
        console.log('senha incorreta :(')
    }