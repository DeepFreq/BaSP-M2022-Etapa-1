// IF ELSE //
console.log('(--IF ELSE--)');

// (A) //
console.log('(A)');

var num = Math.random();
if (num >= 0,5) {
    alert('Greater than 0,5')
} else {
    alert('Lower than 0,5')
}
console.log(num);

// (B) //
console.log('(B)');

var age = Math.round((Math.random() * 100));
if (age <= 2) {
    alert('Baby')
} else if (age >= 2 && age <= 12) {
    alert('Child')
} else if (age >= 13 && age <= 19) {
    alert('Teenager')
} else if (age >= 20 && age <=30) {
    alert('Young')
} else if (age >= 31 && age <= 60) {
    alert('Adult')
} else if (age >= 61 && age <= 75) {
    alert('Old Adult')
} else (age >= 75); {
    alert('Elderly')
}
console.log(age);