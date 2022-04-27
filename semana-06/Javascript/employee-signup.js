window.onload = function () {

    var form = document.getElementById('form');
    var inputsSignUp = document.querySelectorAll('#form input');

    console.log(inputsSignUp);

    var exprsSignUp = {

        // Expresions
        nameRegex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        lastnameRegex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        passwordRegex: /[a-z0-9]/,
        emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phoneRegex: /^\d{7,14}$/,
        numericRegex: /^[0-9-.]+$/,
        adressRegex: /^(?![\s.]+$)[a-zA-Z0-9\s.]*$/,
        locationRegex: /[A-Za-z0-9? ,_-]/,
    }

    var formValidation = (e) => { // No se ejecuta el codigo 19-30
       switch (e.target.name) {
           case 'name':
                
           break;
           case 'name':
                
           break;
           case 'last-name':
                
           break;
           case 'id-number':
                
           break;
           case 'date':
                
           break;
           case 'phone':
                
           break;
           case 'adress':
                
           break;
           case 'location':
                
           break;
           case 'postalCode':
                
           break;
           case 'email':
                
           break;
           case 'password':
                
           break;
           case 'repeatPass':
                
           break;
       }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', formValidation);
        input.addEventListener('blur', formValidation);
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    




}