// Sorteando um número entre 0 e 5
const numero = parseInt(Math.random() * 6)
console.log(numero);

// switch (numero) {
//     case 0:
//         console.log('O número sorteado é o ZERO');
//         break;
//     case 1:
//         console.log('O número sorteado é o UM');
//         break
//     case 2:
//         console.log('O número sorteado é o DOIS');
//         break
//     case 3:
//         console.log('O número sorteado é o TRÊS');
//         break
//     case 4:
//         console.log('O número sorteado é o QUATRO');
//         break
//     default:
//         console.log('O número sorteado é o CINCO');

// }

// COM IF

if (numero === 0) {
    console.log('O número é ZERO');
} else if (numero === 1) {
    console.log('O número é UM');
} else if (numero === 2) {
    console.log('O número é DOIS');
} else if (numero === 3) {
    console.log('O número é TRÊS');
} else if (numero === 4) {
    console.log('O número é QUATRO');
}
if (numero === 5) {
    console.log('O número é CINCO');
}

const NovoNumero = parseInt(Math.random() * 101)
console.log(`Novo número sorteado= ${NovoNumero}`);

if (NovoNumero <= 20){
    console.log(`O número está no intervalo entre 0 e 20`);
}
else if (NovoNumero > 20)
console.log(`O número não está no intervalo entre 0 e 20`);

 