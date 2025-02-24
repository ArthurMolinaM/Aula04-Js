// Sorteando 10 números
let numerofor = 0;
for (let i = 0; i <= 9; i++) {
    numerofor = parseInt(Math.random() * 101)
    console.log(numerofor);
}
console.log('-----------------');
console.log('-----------------');

// fazer uma contagem entre 0 e 20
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

console.log('-----------------');
console.log('-----------------');
// fazer uma contagem entre 0 e 100 pulando de 5 em 5
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}
console.log('-----------------');
console.log('-----------------');

// Fazer uma contagem regressiva entre 20 e 0
for (let i = 20; i >= 0; i --) {
    console.log(i);
}
console.log('-----------------');
console.log('-----------------');

// Sortear um número entre 0 e 10 - Exibir na tela:
// O número sorteado
// Tabuada desse número

let numeroTabuada = parseInt(Math.random()*11)
for(let i = 0; i <=10; i ++){
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
    
}



