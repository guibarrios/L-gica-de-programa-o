// Valor inicial do saldo
let saldo = 100.00;

// Função para realizar uma compra
function compra(valorCompra) {
    if (valorCompra <= saldo) {
        saldo -= valorCompra;
        console.log(`Compra de R$${valorCompra.toFixed(2)} realizada com sucesso!`);
        console.log(`Saldo restante: R$${saldo.toFixed(2)}`);
    } else {
        console.log('Saldo insuficiente para realizar a compra.');
    }
}

// Exemplo de uso
compra(25.50); // Compra de R$25.50 realizada com sucesso!
compra(50.00); // Saldo insuficiente para realizar a compra.