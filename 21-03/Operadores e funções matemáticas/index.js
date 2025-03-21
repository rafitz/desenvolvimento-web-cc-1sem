console.log('Operadores e funções matemáticas:');
console.log('5 + 10 =', 5 + 10);
console.log('5 - 10 =', 5 - 10);
console.log('5 * 10 =', 5 * 10);
console.log('5 / 10 =', 5 / 10);
console.log('2 ** 4 =', 2 ** 4);  // potência
console.log('10 % 3 (resto da divisão) =', 10 % 3);
console.log('Quociente (10 / 3):', Math.floor(10 / 3));  // Inteiro abaixo
console.log('Quociente (10 / 3):', (10 - 10 % 3) / 3);
console.log('Quociente (10 / 3):', ~~(10 / 3));  // ~ : not binário
console.log('Raiz quadrada de 25:', Math.sqrt(25));
console.log('Raiz quadrada de 25:', 25 ** 0.5);

console.log('Contadores e acumuladores:');
let cont = 0;
console.log('Contador =', cont);
cont++;  // aumenta 1 no valor de cont (cont = cont + 1)
console.log('Contador =', cont);
cont += 10;  // cont = cont + 10
console.log('Contador =', cont);
cont -= 10;  // cont = cont - 10
cont--;  // cont = cont - 1
console.log('Contador =', cont);
x = 5;
x *= (cont - 10) / 2;
console.log('Valor de x =', x);
