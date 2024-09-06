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