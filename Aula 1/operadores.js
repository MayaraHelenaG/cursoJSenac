/* aula sobre operadores, que em javascript são utilizados para atribuir valores, comparar valores, executar operações aritméticas e muito mais 
{

São os sinais que usamos: + - * / = ++ += -+ & || etc


+= = (valor1 += valor2;) Aqui eu quero valor1 + valor2 e o igual significa que a variável valor1 vai receber o valor2. É uma forma de reatribuir valor para uma variável utilizando menos espaço. É uma maneira mais simples.)
& = comparação
|| = ou 
&& = E. Ele retorna true apenas se ambos os operandos forem true. Caso contrário, retorna false.
}

1. Operadores Aritméticos (matemáticos)
2. Operadores de Atribuição
3. Operadores de Sequência
4. Operadores de Comparação
5. Operador Condicional (Ternário) (atribuir valor e)m uma variável com uma condição)
6. Operadores Lógicos 
*/ 

//Operadores aritméticos
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = valor1 + valor2; // +, -, *, /
alert(' Resultado é: ' + total);

//Incremento com o ++
var valor3, valor4, total;
valor3 = 5;
valor4 = 2;
total = ++valor3; // ++ = soma +1 na variável indicada 
alert('O valor ficou: ' + valor3);

//Decremento com o -- 
var valor3, valor4, total;
valor3 = 5;
valor4 = 2;
total = --valor3; // -- = subtrai -1 na variável indicada
alert('O valor ficou: ' + valor3);

/* Operadores de atribuição. 
O sinal de igual serve para atribuir valor em uma variável.  */
var valor1, valor2, total;
valor7= 5;
valor8 = 2;
valor7 += valor8; //Aqui eu quero valor1 + valor2 e o igual significa que a variável valor1 vai receber o valor2. É uma forma de reatribuir valor para uma variável utilizando menos espaço.

// Operador de concatenação/sequência. 
var nome, othername, total;
nome = "Mayara ";
othername = "Helena";
total = nome + othername; //Quando se quer usar strings (texto) o operador + vai servir para exibir as duas variáveis em texto. 


// Operador de comparação

var valor1, valor2, total;
valor1 = 8;
valor2 = "8";
total = (valor1 == valor2); // Quando se quer realizar uma comparação entre duas variáveis utilizamos dois sinais de igual (==). Se o valor1 é igual a valor2 retornará verdadeiro. Se quiser comparar entre número e texto utilizar três sinais de igual (===)*/
alert ('O valor é: ' + total);

//Outro operador de comparação é o !=. Significa diferente ou não igual. 
var valor1, valor2, total;
valor1 = 8;
valor2 = 8;
total = (valor1 != valor2); // aqui será falso pois ambos são iguais. true (verdadeiro) ou false (falso)
alert('O valor é: ' + total);

//Para verificar se é diferente ou não igual utilizar !==. 

var valor1, valor2, total;
valor1 = 8;
valor2 = "12";
total = (valor1 !== valor2); // aqui será true, pois são diferentes em valor e texto. 
alert ('O valor é: ' + total);

//Comparando utilizando símbolo de maior e menor.

var valor1, valor2, total;
valor1 = 8;
valor2 = 8;
total = (valor1 < 4); // false, pois 8 é maior que 4. 
alert ('O valor é: ' + total);

// Operador ternário

var idade, eleitor;
idade = 17;
eleitor = (idade < 18) ? "Não é eleitor," : "Sim, é eleitor"; // é uma forma curta de escrever um if...else na linha eleitor. sintaxe: (condição <, >, ==, ===, &&, ||, !=, !) ? valor_se_verdadeiro : valor_se_falso;

alert (' A resposta é: ' + eleitor + ' a idade dele é de: ' + idade); 

// Operador lógico && (significa E)

var idade, resultado; 
idade = 25; 
resultado = (idade > 16 && idade < 65);  /* ou você pode fazer o seguinte: 
resultado = (idade === 65 OU ||iidade === 72);*/ 
alert ('A resposta é: ' + resultado + ' A idade dele é de: ' + idade);


//true, false 
//25 anos é maior que 60 e menor que 70? 
//true e false &&. Ou ||. Negação !. 