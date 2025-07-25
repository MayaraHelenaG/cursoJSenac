function calculadora() {
    alert("calculadora");


// Exercício 1 – Par ou ímpar
alert("Vamos verificar pares e ímpares");
let num = Number(prompt("Digite seu número aqui"));

if (num % 2 === 0) {
    alert(`Seu número ${num} é par`);
} else {
    alert(`Seu número ${num} é ímpar`);
}

// Exercício 2 – Número positivo, negativo ou zero
alert("Vamos verificar positivos e negativos");
let num1 = Number(prompt("Digite seu número aqui"));
if (num1 > 0) {
  alert("O número é positivo");
} else if (num1 < 0) {
  alert("O número é negativo");
} else {
  alert("O número é zero");
}

// Exercício 3 – Verificar o turno
alert("Vamos verificar o turno do seu curso");
let turno = prompt("Me conta aqui o turno que você estuda sendo M para manhã, T para tarde e N para noite.");

turno = turno.toUpperCase();

if (turno === "M") {
  alert("Seu turno é o da manhã. Seja bem vindo, espero que tenha dormido bem!");
} else if (turno === "T") {
  alert("Seu turno é o da tarde. Espero que tenha almoçado bem! Se não, temos uma boa cantina para lhe servir!");
} else if (turno === "N") {
  alert("Seu turno é o da noite. Espero que tenha tido um bom dia. Bons estudos!");
} else {
  alert("Turno inválido. Por favor, digite M, T ou N.");
}

// Exercício 4 - Comparar dois números
alert("Vamos comparar qual o maior e menor entre dois números");
let num4 = Number(prompt("Digite um número aqui"));
let num5 = Number(prompt("Digite outro número aqui"));

if (num4 > num5) {
    alert("O primeiro número é maior"); 
} else if (num5 > num4){
    alert("O segundo número é maior");
} else {
    alert("Os números são iguais");
}

// Exercício 5 – Verificar se pode votar
alert("Vamos verificar se você pode votar");
let num6 = Number(prompt("Digite um número aqui"));

if (num6 > 18 && num6 < 61){
alert("É eleitor!");
} else {
alert("Não é eleitor por obrigação.");
}

// Exercício 6 - Verificar senha
alert("Vamos verificar sua senha");
let senha = prompt("Digite sua senha aqui.");
let senhaCorreta = "MinhaSenhaAqui!"
if (senha === senhaCorreta){
alert("Acesso permitido");
} else{
alert("Acesso negado");
}


}

document.getElementById('btnCalc').addEventListener('click', calculadora);