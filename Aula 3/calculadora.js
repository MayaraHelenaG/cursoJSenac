function calculadora() {
    alert("Calculadora");
    
// Imprime números de 0 até 1
    var i = 0;
    for (i ; i <= 10; i++) {
    console.log(i);
    }

 // Mostra os números pares de 0 até 20 
     for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
       console.log(i);}
 } 

 // soma os números de 1 até 100 e imprime na tela
    for ( let i = 1; i <=100; i++){
         console.log("A soma é:", i);

    }
   
    // tabuada do 5 

      let num = Number(prompt("Digite o número 5 para ver a tabuada"));
      for ( let i = 0; i <=10; i++) {
       alert(num * i)    
        }

}
document.getElementById('btnCalc').addEventListener('click', calculadora);