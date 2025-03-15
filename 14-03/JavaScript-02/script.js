// let name = prompt("Qual s   eu nome?") 
// document.getElementById("name").innerHTML = `<h1>Bem-vindo ${name} </h1> `;

function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2

    return media
}

var resultado1 = media(10,8); 
var resultado2 = media(6,9)

console.log(resultado1 + " e " + resultado2)