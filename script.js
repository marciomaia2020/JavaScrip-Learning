

//!ESTA É A ESTRUTURA DE UM OBJETO - SEM PAREMETROS
/*
const person = {}
console.log(person);
*/

//!ESTA É A ESTRUTURA DE UM OBJETO - COM PAREMETROS E SUAS PROPRIEDADES
const pessoas = {
    primeiroNome: "Marcio",
    segundoNome: "Fernando",
    ultimoNome: "Maia",
    idade: 53,
    cpf: 11752400879,
    rg: 18833323,
    escolaridade: ["2º grau completo", "Graduação em Analise de Sistemas", "Certificação Microsoft"],
    ativo: "true"
}

//! VIZUALIZANDO AS INFORMAÇÕES DO OBJETO CRIADO (pessoas)
//! Note que exitem VARIÁVEIS COM O MESMO NOME
/*
const primeiroNome = pessoas.primeiroNome;
const segundoNome = pessoas.segundoNome;
const ultimoNome = pessoas.ultimoNome;
const idade = pessoas.idade;
const cpf = pessoas.cpf;
const rg = pessoas.rg;
const escolaridade = pessoas.escolaridade[0];
const ativo = pessoas.ativo;
*/

//!PARA A QUANTIDADE DE CÓDIGO ACIMA FAÇA ou seja um *******************CONSTRUCTOR*******************
const saida = { primeiroNome, segundoNome, ultimoNome, idade, cpf, rg, escolaridade, ativo } = pessoas;
console.log('O seu nome é ' + saida.primeiroNome + ' e vc tem ' + saida.idade +' anos' + '.');
console.log('Sua escolaridade é, o ' + saida.escolaridade[0] + '.');


//* APENAS PARA SAIR NA CONSOLE
/*
console.log(primeiroNome); 
console.log(segundoNome);
console.log(ultimoNome);
console.log(idade);
console.log(cpf);
console.log(rg);
console.log(escolaridade);
console.log(ativo);
*/
