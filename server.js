// Estudando JavaScript 
// EPS = Entrada, Processamento e Saída
// var, let e const são formas de declarar variáveis em JavaScript.
// const é usada para valores fixos. let é a forma mais moderna e flexível.
// alert() exibe mensagem em pop-up.
// prompt() solicita dados do usuário (retorna string).
// Number() converte string em número real. 

alert("Calculadora");

let num1 = Number(prompt("Digite um número aqui para somar"));
let num2 = Number(prompt("Digite outro número para somar"));
let soma = num1 + num2;

alert("A soma é: " + soma);

//Subtração

let num3 = Number(prompt("Digite um número aqui para subtrair"));
let num4 = Number(prompt("Digite outro número para subtrair"));

let subtracao = num3 - num4;

alert("A subtração é: " + subtracao);

// Multiplicação


let num5 = Number(prompt("Digite um número aqui para multiplicar"));
let num6 = Number(prompt("Digite outro número para multiplicar"));

let multiplicacao = num5 * num6;

alert("A multiplicação é: " + multiplicacao);

// Divisão
let num7 = Number(prompt("Digite um número aqui para dividir"));
let num8 = Number(prompt("Digite o divisor"));
let divisao = num7 / num8;

alert("A divisão é: " + divisao); 


// Área de um quadrado

let lado = Number(prompt("Digite o valor do lado do quadrado"));
let area = lado ** 2;

alert("A area do quadrado é: " + area);

// Área de um retângulo

let base = Number(prompt("Digite o valor da base do retângulo"));
let altura = Number(prompt("Digite o valor da altura do retângulo"));
let areaRetangulo = base * altura;

alert("A área do retângulo é: " + areaRetangulo);

// Área de um losango

let diag1 = Number(prompt("Digite a medida da diagonal maior do Losango"));
let diag2 = Number(prompt("Digite a medida da diagonal menor do Losango"));
let areaLosango = diag1 * diag2 / 2;

alert("A área do Losango é: " + areaLosango);

// Área de um Triângulo

let tria1 = Number(prompt("Digite a medida da base do triângulo"));
let tria2 = Number(prompt("Digite a medida da altura do triângulo"));
let areaTriangulo = tria1 * tria2 / 2;

alert("A área do Triângulo é: " + areaTriangulo);

// Área de um círculo


let raio = Number(prompt ("Digite a medida do raio do círculo"));
let areaRaio = Math.PI * Math.pow(raio, 2);

alert("A área do círculo é: " + areaRaio.toFixed(2));

// área de um trapézio 

let baseMaior = Number(prompt("Digite a medida da base maior"));
let baseMenor = Number(prompt("Digite a medida da base menor"));
let altura1 = Number(prompt("Digite a altura do trapézio"));
let areaTrapezio = baseMaior + baseMenor * altura1 / 2;

alert("A área do trapézio é: " + areaTrapezio);
// inserindo comentários// 

