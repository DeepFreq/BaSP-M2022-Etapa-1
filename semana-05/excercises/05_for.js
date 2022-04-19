// FOR //
console.log('(--FOR--)');

// (A) //
console.log('(A)');

var bucleX = ['GUY J', 'HERNAN CATTANEO', 'ALEX ORION', 'MARSH', 'DIGWEED'];

for (let index = 0; index < bucleX.length; index++) {
    alert(bucleX[index]);  
}

// (B) //
console.log('(B)');

for (let index = 0; index < bucleX.length; index++) {
    alert(bucleX[index].substring(0, 1).toUpperCase() + bucleX[index].substring(1));
}

// (C) //
console.log('(C)');

var sentence = '';

for (let index = 0; index < bucleX.length; index++) {
    sentence = sentence + ' ' + bucleX[index];
}
console.log(sentence);

// (D) //
console.log('(D)');

var otherArray = [];

for (let index = 0; index < 10; index++) {
    otherArray[index] = index;
}

console.log(otherArray);
