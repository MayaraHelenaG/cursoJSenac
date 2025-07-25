// Exercícios com if, else e for

let mostrandoEx1 = false;
let mostrandoEx2 = false;
let mostrandoEx3 = false;

function exercicio1() {
  const div = document.getElementById("resultado1");
  if (!mostrandoEx1) {
    div.innerHTML = ""; // 
    for (let i = 1; i <= 30; i++) {
      if (i % 3 === 0) {
        div.innerHTML += i + "<br>";
      }
    }
    mostrandoEx1 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx1 = false;
  }
}

function exercicio2() {
  const div = document.getElementById("resultado2");
  if (!mostrandoEx2) {
    div.innerHTML = "";
    for (let i = 0; i <= 50; i++) {
      if (i % 2 === 0) {
        div.innerHTML += i + " - Este número é par<br>";
      } else {
        div.innerHTML += i + " - Este número é ímpar<br>";
      }
    }
    mostrandoEx2 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx2 = false;
  }
}

function exercicio3() {
  const div = document.getElementById("resultado3");
  if (!mostrandoEx3) {
    div.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      div.innerHTML += "6 x " + i + " = " + (6 * i) + "<br>";
    }
    mostrandoEx3 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx3 = false;
  }
}

let mostrandoEx4 = false;

function exercicio4() {
  const div = document.getElementById("resultado4");
  if (!mostrandoEx4) {
    div.innerHTML = "";
    for (let i = 10; i >= 0; i--) {
      div.innerHTML += i + "<br>";
    }
    mostrandoEx4 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx4 = false;
  }
}

let mostrandoEx5 = false;

function exercicio5() {
  const div = document.getElementById("resultado5");
  if (!mostrandoEx5) {
    div.innerHTML = "";
    for (let i = 5; i <= 50; i += 5) {
      div.innerHTML += i + "<br>";
    }
    mostrandoEx5 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx5 = false;
  }
}

let mostrandoEx6 = false;

function exercicio6() {
  const div = document.getElementById("resultado6");
  if (!mostrandoEx6) {
    div.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
      if (i < 10) {
        div.innerHTML += `Número ${i} é menor que 10<br>`;
      } else if (i === 10) {
        div.innerHTML += `Número ${i} é igual a 10<br>`;
      } else {
        div.innerHTML += `Número ${i} é maior que 10<br>`;
      }
    }
    mostrandoEx6 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx6 = false;
  }
}


let mostrandoEx7 = false;

function exercicio7() {
  const div = document.getElementById("resultado7");
  if (!mostrandoEx7) {
    div.innerHTML = "";
    let i = 0;
    while (i <= 20) {
      if (i % 2 === 0) {
        div.innerHTML += i + "<br>";
      }
      i++;
    }

    mostrandoEx7 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx7 = false;
  }
}

let mostrandoEx8 = false;

function exercicio8() {
  const div = document.getElementById("resultado8");
  if (!mostrandoEx8) {
    div.innerHTML = "";
    let i = 1;
    while (i <= 25) {
      if (i % 5 === 0) {
        div.innerHTML += i + " é múltiplo de 5<br>";
      } else {
        div.innerHTML += i + " não é múltiplo de 5<br>";
      }
      i++;
    }
    mostrandoEx8 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx8 = false;
  }
}

let mostrandoEx9 = false;

function exercicio9() {
  const div = document.getElementById("resultado9");
  if (!mostrandoEx9) {
    div.innerHTML = "";
    let i = 2;
    while (i <= 20) {
      div.innerHTML += i + "<br>";
      i += 2;
    }
    mostrandoEx9 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx9 = false;
  }
}

let mostrandoEx10 = false;

function exercicio10() {
  const div = document.getElementById("resultado10");
  if (!mostrandoEx10) {
    div.innerHTML = "";
    let i = 15;
    while (i >= 5) {
      div.innerHTML += i + "<br>";
      i--;
    }
    mostrandoEx10 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx10 = false;
  }
}

let mostrandoEx11 = false;

function exercicio11() {
  const div = document.getElementById("resultado11");
  if (!mostrandoEx11) {
    div.innerHTML = "";
    let i = 1;
    let soma = 0;
    while (i <= 10) {
      soma += i;
      i++;
    }
    div.innerHTML = "A soma de 1 a 10 é: " + soma;
    mostrandoEx11 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx11 = false;
  }
}

let mostrandoEx12 = false;

function exercicio12() {
  const div = document.getElementById("resultado12");
  if (!mostrandoEx12) {
    div.innerHTML = "";
    let num = parseInt(prompt("Digite um número:"));
    if (isNaN(num) || num < 1) {
      div.innerHTML = "Número inválido. Por favor, digite um número inteiro maior ou igual a 1.";
    } else {
      let i = 1;
      while (i <= num) {
        div.innerHTML += i + "<br>";
        i++;
      }
    }
    mostrandoEx12 = true;
  } else {
    div.innerHTML = "";
    mostrandoEx12 = false;
  }
}


document.getElementById("btnEx1").addEventListener("click", exercicio1);
document.getElementById("btnEx2").addEventListener("click", exercicio2);
document.getElementById("btnEx3").addEventListener("click", exercicio3);
document.getElementById("btnEx4").addEventListener("click", exercicio4);
document.getElementById("btnEx5").addEventListener("click", exercicio5);
document.getElementById("btnEx6").addEventListener("click", exercicio6);
document.getElementById("btnEx7").addEventListener("click", exercicio7);
document.getElementById("btnEx8").addEventListener("click", exercicio8);
document.getElementById("btnEx9").addEventListener("click", exercicio9);
document.getElementById("btnEx10").addEventListener("click", exercicio10);
document.getElementById("btnEx11").addEventListener("click", exercicio11);
document.getElementById("btnEx12").addEventListener("click", exercicio12);

