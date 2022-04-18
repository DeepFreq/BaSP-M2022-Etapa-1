// ARRAYS //
console.log('--ARRAYS--')

// (A) //
console.log('(A)');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(months[4], months[10]);

// (B) //
console.log('(B)');

months.sort((a, b) => {
    return a - b;
});
console.log(months);