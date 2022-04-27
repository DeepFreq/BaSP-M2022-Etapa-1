window.onload = function () {

    var form = document.getElementById('form');
    var inputsSignUp = document.querySelectorAll('#form input');

    console.log(inputsSignUp);

    // Expresions

    var exprsSignUp = {

        nameRegex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        lastnameRegex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        passwordRegex: /[a-z0-9]/,
        emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phoneRegex: /^\d{7,14}$/,
        numericRegex: /^[0-9-.]+$/,
        adressRegex: /^(?![\s.]+$)[a-zA-Z0-9\s.]*$/,
        locationRegex: /[A-Za-z0-9? ,_-]/,
    }

    var fields = {
        name: false,
        lastName: false,
        password: false,
        idNumber: false,
        phone: false,
        date: false,
        adress: false,
        location: false,
        postal: false,
        email: false,
        repeatpass: false,
    }

    // Validations 

    var formValidation = (e) => { // No se ejecuta el codigo 
       switch (e.target.name) {
           case 'name':
               validationAll(exprsSignUp.nameRegex, e.target, 'name');
                
           break;

           case 'last-name':
                validationAll(exprsSignUp.nameRegex, e.target, 'lastName');
           break;

           case 'id-number':
            validationAll(exprsSignUp.numericRegex, e.target, 'idNumber');
           break;

           case 'date':
            validationAll(exprsSignUp.numericRegex, e.target, 'date');
           break;

           case 'phone':
            validationAll(exprsSignUp.numericRegex, e.target, 'phone');
           break;

           case 'adress':
            validationAll(exprsSignUp.adressRegex, e.target, 'adress');
           break;

           case 'location':
            validationAll(exprsSignUp.locationRegex, e.target, 'location');
           break;

           case 'postalCode':
            validationAll(exprsSignUp.locationRegex, e.target, 'postalCode');
           break;

           case 'email':
            validationAll(exprsSignUp.emailRegex, e.target, 'email');
           break;

           case 'password':
            validationAll(exprsSignUp.passwordRegex, e.target, 'password');
           break;

           case 'repeatPass':
            validationAll(exprsSignUp.passwordRegex, e.target, 'repeatPass');
           break;
       }
    }

    var validationAll = (exprsLogin, input, fields) => {
        if(exprsSignUp.test(input.value)) {
            document.getElementById(`${fields}-form`).classList.remove('form-incorrect-group');
            document.getElementById(`${fields}-form`).classList.add('form-correct-group');
            document.getElementById(`${fields}-form`.errorMessage).classList.remove('form-msj-active-success');
            campos[fields] = true;
           }    else {
               document.getElementById(`${fields}-form`).classList.add('form-incorrect-group');
               document.getElementById(`${fields}-form`).classList.remove('form-correct-group');
               document.getElementById(`${fields}-form`.errorMessage).classList.add('form-msj-active-success');
               campos[campo] = false;
           }
    }


    var validationAll2 = () => {
        var inputPassword1 = document.getElementById('password');
        var inputPassword2 = document.getElementById('repeatPass');
    
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`grupo__password2`).classList.add('form-incorrect-group');
            document.getElementById(`grupo__password2`).classList.remove('form-correct-group');
            document.querySelector(`#grupo__password2 .errorMessage`).classList.add('form-msj-active-success');
            campos['password'] = false;
        } else {
            document.getElementById(`grupo__password2`).classList.remove('form-incorrect-group');
            document.getElementById(`grupo__password2`).classList.add('form-correct-group');
            document.querySelector(`#grupo__password2 .errorMessage`).classList.remove('form-msj-active-success');
            campos['password'] = true;
        }
    }

    inputsSignUp.forEach((input) => {
        input.addEventListener('keyup', formValidation);
        input.addEventListener('blur', formValidation);
    })
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    
    // Alerts

    var signup = document.getElementById('form');
    signup.addEventListener('submit', signupsubmit);

    function signupsubmit(e) {
        e.preventDefault();
        var form = new FormData(signup);
        var formFullName = form.get('name');
        var formdni = form.get('id-number');
        var formbirthday = form.get('date');
        var formtel = form.get('phone');
        var formadress = form.get('adress');
        var formlocation = form.get('location');
        var formcp = form.get('postalCode');
        var formEmail = form.get('email');
        var formPassword = form.get('password');
        var formconfirmp = form.get('repeatPass');
        console.log(form, formFullName)

        if (formFullName.match(fullnameRegex) && formdni.match(numericRegex) && formbirthday && formtel.match(numericRegex) && formadress.match(adressRegex) && formlocation.match(locationRegex) && formcp.match(numericRegex) && formEmail.match(emailRegex) && formPassword.match(passwordRegex) && formconfirmp === formPassword) {
            error.style.display = 'none';
            alert('Full Name: ' + formFullName + '\n' + 'DNI: ' + formdni + '\n' + 'Birthday: ' + formbirthday + '\n' +
                'Tel.: ' + formtel + '\n' + 'Adress: ' + formadress + '\n' + 'Location: ' + formlocation + '\n' +
                'C.P.: ' + formcp + '\n' + 'E-mail: ' + formEmail + '\n' + 'Password' + formPassword + '\n' +
                'Confirm Password: ' + formconfirmp);
        } else {
            error.style.display = 'block';
            alert('Wrong Inputs');
        }
    }
}