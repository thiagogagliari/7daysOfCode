//DAY 1 ------------------------------------------------------------------------

// let numeroUm = 1
// let stringUm = '1'
// let numeroTrinta = 30
// let stringTrinta = '30'
// let numeroDez = 10
// let stringDez = '10'

// if(numeroUm == stringUm){
//   console.log('As variáveis ' + numeroUm + ' e ' + stringUm + ' tem o mesmo valor mais tipos diferentes')
// }  else{
//   console.log('As variáveis ' + numeroUm + ' e ' + stringUm + 'não tem o mesmo valor')
// }

// if(numeroTrinta == stringTrinta){
//   console.log('As variáveis ' + numeroTrinta + ' e ' + stringTrinta + ' tem o mesmo valor mais tipos diferentes')
// }  else{
//   console.log('As variáveis ' + numeroTrinta + ' e ' + stringTrinta + 'não tem o mesmo valor')
// }

// if(numeroDez == stringDez){
//   console.log('As variáveis ' + numeroDez + ' e ' + stringDez + ' tem o mesmo valor mais tipos diferentes')
// }  else{
//   console.log('As variáveis ' + numeroTrinta + ' e ' + stringTrinta + 'não tem o mesmo valor')
// }

//DAY 2 --------------------------------------------------------------------------

let nome = prompt("Qual o seu nome?")
let idade = +prompt("Quantos anos você tem?")
let linguagem = prompt("Qual a linguagem de programação você está estudando?")

console.log(`Olá ${nome} , você tem ${idade} anos e já está aprendendo ${linguagem}!`)

let opcional = prompt(`Você gosta de estudar ${linguagem}? Responda com o número: \n 1 - Para Sim \n 2 - Para Não` )

if(opcional == 1){
  console.log("Muito bom! Continue estudando e você terá muito sucesso.")
}  else{
  console.log("Ahh que pena... Já tentou aprender outras linguagens?")
};
