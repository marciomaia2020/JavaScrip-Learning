//VARIÁVEIS

var nome = "João";
let idade = 25;
const cidade = "São Paulo";


//LAÇO FOR
for (let i = 0; i < 10; i++) {
    console.log(i);
}


//CONDICIONAIS
let hora = 12;

        if (hora <= 12) {
            console.log("Bom dia!");
        } else if (hora < 18) {
            console.log("Boa tarde!");
        } else {
            console.log("Boa noite!");
        }


//FUNÇÕES
function saudacao(nome) {
            return "Olá, " + nome + "!";
        }

        console.log(saudacao("Maria"));



//FUNÇÕES COM ARGUMENTOS
function soma(a, b) {
            return a + b;
        }

        console.log(soma(5, 3));