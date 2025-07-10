// Estudando JavaScript 
// EPS = Entrada, Processamento e Saída
// var, let e const são formas de declarar variáveis em JavaScript.
// const é usada para valores fixos. let é a forma mais moderna e flexível mas no let a variável não pode ser redeclarado. 
// alert() exibe mensagem em pop-up.
// prompt() solicita dados do usuário (retorna string).
// Number() converte string em número real. 
// document.getElementById("texto")inner.HTML imprimir texto na tela

document.getElementById ("text1").innerHTML="Meu primeiro texto em <b>JS</b>!";
console.log("Oi isso é um console.log");

// declaração das variáveis com números

var a,b,c;

// atribuição dos valores das variáveis com números

a = 2;
b = 3;
c = a + b; 

alert(c); 
// No var é possível reatribuir valores como por exemplo
var a,b,c;
 var a = 2; 
 b = 3; 
 c = a + b;
  var a = 5; alert(a);

// declaração das variáveis com letras
var nome, sobrenome, nomeCompleto, idade, soma;

nome = "Dimitri";
sobrenome = "Teixeira";
idade = 30;
nomeCompleto =  nome + " " + sobrenome;

soma = idade + 10;
pessoa = nome + " " + soma;

document.getElementById("texto").innerHTML = pessoa; 

// prática comum é utilizar o LET para tudo. 
// O const significa constante. Algo que nunca pode mudar. É a regra mais estrita do JS de todas. Uma vez que se cria uma const, não muda em lugar nenhum. 
/* let x = 10; (aqui é 10)
{ let x = 2;} aqui o let é 2. Isso no mesmo código é permitido. Já o const, não é permitido mesmo dentro de chaves (bloco) {}.*/
