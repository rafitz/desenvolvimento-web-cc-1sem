document.getElementById("op1").innerHTML = "Operadores e funções matemáticas:"
document.getElementById("calc1").innerHTML = "5 + 10 = " +  (5 + 10);
document.getElementById("calc2").innerHTML =  '5 - 10 = ' + (5 - 10);
document.getElementById("calc3").innerHTML = '5 * 10 = ' + (5 * 10);
document.getElementById("calc4").innerHTML = '5 / 10 = ' + (5 / 10);
document.getElementById("calc5").innerHTML = '2 ** 4 = ' + (2 ** 4);  
document.getElementById("calc6").innerHTML = '10 % 3 (resto da divisão) =' + (10 % 3);
document.getElementById("calc7").innerHTML = 'Quociente (10 / 3): ' + (Math.floor(10 / 3));  
document.getElementById("calc8").innerHTML = 'Quociente (10 / 3): ' + ((10 - 10 % 3) / 3);
document.getElementById("calc9").innerHTML = 'Quociente (10 / 3): ' + (~~(10 / 3));  // ~ : not binário
document.getElementById("calc10").innerHTML = 'Raiz quadrada de 25: ' + (Math.sqrt(25));
document.getElementById("calc11").innerHTML = 'Raiz quadrada de 25: ' + (25 ** 0.5);

document.getElementById("op2").innerHTML = "Contadores e acumuladores:"
let cont = 0;
document.getElementById("cont").innerHTML = 'Contador = ' + (cont);
cont++;  // aumenta 1 no valor de cont (cont = cont + 1
document.getElementById("cont1").innerHTML ='Contador = ' + (cont);
cont += 10;  // cont = cont + 10 
document.getElementById("cont2").innerHTML ='Contador = ' + (cont);
cont -= 10;  // cont = cont - 10 
cont--;  // cont = cont - 1 
document.getElementById("cont3").innerHTML ='Contador = ' + (cont);
x *= (cont - 10) / 2;
document.getElementById("cont4").innerHTML ='Valor de x = ' + ( x);

function mostrar() {
    alert(document.getElementById("valor").value)
}