//                                      Versão 2

//Estoque
let qtdcaneta = 30;
let qtdcaderno = 25;
let qtdlapis = 20;
let qtdborracha = 15;

//Valor
let valorCaneta = 2;
let valorCaderno = 10;
let valorLapis = 1;
let valorBorracha = 0.5;

//Cadastro
let caneta = `canetas`;
let caderno = `caderno`;
let lapis = `lapis`;
let borracha = `borracha`;

function compra(produto,quantidade) {
    switch (produto) {
        case caneta:
            if (qtdcaneta>=quantidade) {
                console.log(`Comprando ${quantidade} ${produto} pagar R$ ${(quantidade*valorCaneta).toFixed(2)}`);
                qtdcaneta -= quantidade;
                if (qtdcaneta<= 5) {
                console.log(`Estoque de ${produto} baixo, apenas ${qtdcaneta} restantes`);
            }
            } else {
                console.log(`Temos apenas ${qtdcaneta} ${produto} restantes`);
            }
            break;

        case caderno:
            if (qtdcaderno>=quantidade) {
                console.log(`Comprando ${quantidade} ${produto} pagar R$ ${(quantidade*valorCaderno).toFixed(2)}`);
                qtdcaderno -= quantidade;
                if (qtdcaderno<= 5) {
                console.log(`Estoque de ${produto} baixo, apenas ${qtdcaderno} restantes`);
            }
            } else {
                console.log(`Temos apenas ${qtdcaderno} ${produto} restantes`);
            }
            break;

        case lapis:
            if (qtdlapis>=quantidade) {
                console.log(`Comprando ${quantidade} ${produto} pagar R$ ${(quantidade*valorLapis).toFixed(2)}`);
                qtdlapis -= quantidade;
                if (qtdlapis<= 5) {
                console.log(`Estoque de ${produto} baixo, apenas ${qtdlapis} restantes`);
            }
            } else {
                console.log(`Temos apenas ${qtdlapis} ${produto} restantes`);
            }
            break;
    
        case borracha:
            if (qtdborracha>=quantidade) {
                console.log(`Comprando ${quantidade} ${produto} pagar R$ ${(quantidade*valorBorracha).toFixed(2)}`);
                qtdborracha -= quantidade;
                if (qtdborracha<= 5) {
                console.log(`Estoque de ${produto} baixo, apenas ${qtdborracha} restantes`);
            }
            } else {
                console.log(`Temos apenas ${qtdborracha} ${produto} restantes`);
            }
            break;
        
        default:
        console.log(`O que voce quer comparar?`);
        break;
    }
}

compra(caneta,20);
compra(caderno,10);
compra(lapis,5);
compra(borracha,2)
compra(caderno,12);
compra(caneta,11);

/*
//                                      Versão 1

//Quantidade da compra
let compracaneta = 2;
let compracaderno = 2;
let compralapis = 15;
let compraborracha = 1;

//Estoque
let qtdcaneta = 30;
let qtdcaderno = 25;
let qtdlapis = 20;
let qtdborracha = 15;

//Cadastro e valor
let caneta = 2;
let caderno = 10;
let lapis = 1;
let borracha = 0.5;

//Soma da compra
let totalcompra = compracaneta*caneta + compracaderno*caderno + compralapis*lapis + compraborracha*borracha;

console.log("Total R$ "+totalcompra); //Valor da compra
//Mostra estoque restante
//Exemplo de concatenar 1
console.log(`Estoque de caneta = ${qtdcaneta-compracaneta} unidades`);
console.log(`Estoque de caderno = ${qtdcaderno-compracaderno} unidades`);
console.log(`Estoque de lapis = ${qtdlapis-compralapis} unidades`);
console.log(`Estoque de borracha = ${qtdborracha-compraborracha} unidades`);

//Verificação de estoque baixo
//Exemplo de concatenar 2
if (qtdcaneta-compracaneta <= 5) {
    console.log("Estoque de caneta baixo",qtdcaneta-compracaneta,"unidades restantes");
}
if (qtdcaderno-compracaderno <= 5) {
    console.log("Estoque de caderno baixo",qtdcaderno-compracaderno,"unidades restantes");
}
if (qtdlapis-compralapis <= 5) {
    console.log("Estoque de lapis baixo",qtdlapis-compralapis,"unidades restantes");
}
if (qtdborracha-compraborracha <= 5) {
    console.log("Estoque de borracha baixo",qtdborracha-compraborracha,"unidades restantes");
}
*/