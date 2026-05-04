var nome = prompt("Qual o seu nome ?");
var RendaMensal = Number(prompt("Qual é sua renda mensal ?"));
while(isNaN(RendaMensal)){
RendaMensal = Number(prompt("Valor Inválido ! Digite outro valor"));
}
var QuantidadeDespesa = Number(prompt("Qual a quantidade de despesas ?"));
while(isNaN(QuantidadeDespesa)){
    QuantidadeDespesa = Number(prompt("Valor Inválido ! Informe outro"));
}

if (QuantidadeDespesa < 1){
 QuantidadeDespesa = 1;
}
if(QuantidadeDespesa > 5){
    QuantidadeDespesa = 5;
}
var SomaDespesas = 0;
for(let i = 0 ; i < QuantidadeDespesa ; i++){
    var despesa = Number(prompt("Informe o valor da despesa"));
    while(isNaN(despesa)){
        despesa = Number(prompt("Valor Inválido! Informe outro"));
    }
    SomaDespesas+=despesa;
}
var sobra;
var mensagem;
if(SomaDespesas > RendaMensal){
    sobra = RendaMensal - SomaDespesas;
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
}
else{

    sobra = RendaMensal - SomaDespesas;
    if(sobra >= RendaMensal*0.30){
        mensagem = "✅ Ótimo: boa margem de sobra.";
    }
    else
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
}
var resultado = 
`Nome: ${nome}
Renda Mensal: ${RendaMensal.toFixed(2)}
Despesas Totais: ${SomaDespesas.toFixed(2)}
Sobras: ${sobra.toFixed(2)}
Classificação: ${mensagem}`;


alert(resultado);

console.log("Nome:",nome);
console.log("Renda Mensal:",RendaMensal.toFixed(2));
console.log("Despesas Totais:",SomaDespesas.toFixed(2));
console.log("Sobras:",sobra.toFixed(2));
console.log("Classificação:", mensagem);
        





