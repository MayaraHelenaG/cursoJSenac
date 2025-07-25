let mostrandoA2_1 = false;
let mostrandoA2_2 = false;
let mostrandoA2_3 = false;
let mostrandoA2_4 = false;
let mostrandoA2_5 = false;
let mostrandoA2_6 = false;

function exercicioA2_1() {
  const div = document.getElementById("resultadoA2_1");
  if (!mostrandoA2_1) {
    let num = Number(prompt("Digite seu número aqui"));
    if (isNaN(num)) {
      div.innerHTML = "Valor inválido.";
    } else if (num % 2 === 0) {
      div.innerHTML = `Seu número ${num} é par.`;
    } else {
      div.innerHTML = `Seu número ${num} é ímpar.`;
    }
    mostrandoA2_1 = true;
  } else {
    div.innerHTML = "";
    mostrandoA2_1 = false;
  }
}

function exercicioA2_2() {
  const div = document.getElementById("resultadoA2_2");
  if (!mostrandoA2_2) {
    let num = Number(prompt("Digite seu número aqui"));
    if (isNaN(num)) {
      div.innerHTML = "Valor inválido.";
    } else if (num > 0) {
      div.innerHTML = "O número é positivo.";
    } else if (num < 0) {
      div.innerHTML = "O número é negativo.";
    } else {
      div.innerHTML = "O número é zero.";
    }
    mostrandoA2_2 = true;
  } else {
    div.innerHTML = "";
    mostrandoA2_2 = false;
  }
}

function exercicioA2_3() {
  const div = document.getElementById("resultadoA2_3");
  if (!mostrandoA2_3) {
    let turno = prompt("Digite M para manhã, T para tarde ou N para noite:").toUpperCase();
    if (turno === "M") {
      div.innerHTML = "Seu turno é manhã. Seja bem-vindo!";
    } else if (turno === "T") {
      div.innerHTML = "Seu turno é tarde. Boa aula!";
    } else if (turno === "N") {
      div.innerHTML = "Seu turno é noite. Bons estudos!";
    } else {
      div.innerHTML = "Turno inválido.";
    }
    mostrandoA2_3 = true;
  } else {
    div.innerHTML = "";
    mostrandoA2_3 = false;
  }
}

function exercicioA2_4() {
  const div = document.getElementById("resultadoA2_4");
  if (!mostrandoA2_4) {
    let num1 = Number(prompt("Digite o primeiro número"));
    let num2 = Number(prompt("Digite o segundo número"));
    if (isNaN(num1) || isNaN(num2)) {
      div.innerHTML = "Valor inválido.";
    } else if (num1 > num2) {
      div.innerHTML = "O primeiro número é maior.";
    } else if (num2 > num1) {
      div.innerHTML = "O segundo número é maior.";
    } else {
      div.innerHTML = "Os números são iguais.";
    }
    mostrandoA2_4 = true;
  } else {
    div.innerHTML = "";
    mostrandoA2_4 = false;
  }
}

function exercicioA2_5() {
  const div = document.getElementById("resultadoA2_5");
  if (!mostrandoA2_5) {
    let idade = Number(prompt("Digite sua idade"));
    if (isNaN(idade)) {
      div.innerHTML = "Valor inválido.";
    } else if (idade > 18 && idade < 61) {
      div.innerHTML = "É eleitor!";
    } else {
      div.innerHTML = "Não é eleitor por obrigação.";
    }
    mostrandoA2_5 = true;
  } else {
    div.innerHTML = "";
    mostrandoA2_5 = false;
  }
}

function exercicioA2_6() {
  let senha = prompt("Digite sua senha");
  let senhaCorreta = "MinhaSenhaAqui!";
  if (senha === senhaCorreta) {
    alert("Acesso permitido.");
  } else {
    alert("Acesso negado.");
  }
}

document.getElementById('btnExA2_1').addEventListener('click', exercicioA2_1);
document.getElementById('btnExA2_2').addEventListener('click', exercicioA2_2);
document.getElementById('btnExA2_3').addEventListener('click', exercicioA2_3);
document.getElementById('btnExA2_4').addEventListener('click', exercicioA2_4);
document.getElementById('btnExA2_5').addEventListener('click', exercicioA2_5);
document.getElementById('btnExA2_6').addEventListener('click', exercicioA2_6);
