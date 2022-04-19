// ARRAYS //
console.log('--ARRAYS--')

// (A) //
console.log('(A)');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(months[4], months[10]);

// (B) //
console.log('(B)');

console.log(months.sort());

// (C) //
console.log('(C)');

months.unshift('Start');
months.push('End');
console.log(months);

// (D) //
console.log('(D)');

months.pop();
months.shift();
console.log(months);

// (E) //
console.log('(E)');

months.reverse();
console.log(months);

// (F) //
console.log('(F)');

console.log(months.join('-'));

// (G) //
console.log('(G)');

var newArray = months.slice(3,10);
console.log(newArray);