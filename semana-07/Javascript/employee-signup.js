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


    // Focus & Blur events



    // Validations 

    var formValidation = (e) => {
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

    var validationAll = (exressionsRegex, input, fields) => {
        if(exressionsRegex.test(input.value)) {
            document.getElementById(`${fields}-form`).classList.remove('form-incorrect-group');
            document.getElementById(`${fields}-form`).classList.add('form-correct-group');
            document.getElementById(`${fields}-form`.errorMessage).classList.remove('form-msj-active-success');
            fields[fields] = true;
           }    else {
               document.getElementById(`${fields}-form`).classList.add('form-incorrect-group');
               document.getElementById(`${fields}-form`).classList.remove('form-correct-group');
               document.getElementById(`${fields}-form`.errorMessage).classList.add('form-msj-active-success');
               fields[fields] = false;
           }
    }


    var validationAll2 = () => {
        var inputPassword1 = document.getElementById('password');
        var inputPassword2 = document.getElementById('repeatPass');
    
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`grupo__password2`).classList.add('form-incorrect-group');
            document.getElementById(`grupo__password2`).classList.remove('form-correct-group');
            document.querySelector(`#grupo__password2 .errorMessage`).classList.add('form-msj-active-success');
            fields['password'] = false;
        } else {
            document.getElementById(`grupo__password2`).classList.remove('form-incorrect-group');
            document.getElementById(`grupo__password2`).classList.add('form-correct-group');
            document.querySelector(`#grupo__password2 .errorMessage`).classList.remove('form-msj-active-success');
            fields['password'] = true;
        }
    }

    /* Name validation */
    var nameInputElement = document.getElementById("name");
    var alertName = document.getElementById("alert-fname");
    var alertMessageName = document.createTextNode("Insert a valid name format.");

    nameInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < nameInputElement.value.length; i++) {
            if (isNaN(nameInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        if (nameInputElement.value.length > 3 && numberSum == false) {
            nameInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            nameInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertName.appendChild(alertMessageName);
        }
    }
    nameInputElement.onfocus = function () {
        nameInputElement.style = "border-color: none";
        alertName.removeChild(alertMessageName);
    }

    /* Surname validation */
    var surnameInputElement = document.getElementById("last-name");
    var alertSurname = document.getElementById("alert-surname");
    var alertMessageSurname = document.createTextNode("Insert a valid surname format.")

    surnameInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < surnameInputElement.value.length; i++) {
            if (isNaN(surnameInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        if (surnameInputElement.value.length > 3 && numberSum == false) {
            surnameInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            surnameInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertSurname.appendChild(alertMessageSurname);
        }
    }
    surnameInputElement.onfocus = function () {
        surnameInputElement.style = "border-color: none";
        alertSurname.removeChild(alertMessageSurname);
    }

    /* DNI validation */
    var dniInputElement = document.getElementById("id-number");
    var alertDNI = document.getElementById("alert-dni");
    var alertMessageDNI = document.createTextNode("Insert a valid DNI format.")

    dniInputElement.onblur = function () {
        if (dniInputElement.value.length > 7 && isNaN(dniInputElement.value) == false) {
            dniInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            dniInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDNI.appendChild(alertMessageDNI);
        }
    }
    dniInputElement.onfocus = function () {
        dniInputElement.style = "border-color: none";
        alertDNI.removeChild(alertMessageDNI);
    }

    /* Date validation */
    var dateInputElement = document.getElementById("date");
    var alertDate = document.getElementById("alert-date");
    var alertMessageDate = document.createTextNode("Insert a valid date format.")

    dateInputElement.onblur = function () {
        var day = dateInputElement.value.substring(0, 2);
        var month = dateInputElement.value.substring(2, 2);
        var year = dateInputElement.value.substring(4, 6);
        var date = dateInputElement.value.replace(/[/]/g, '');
        var slash = 0;
        for (var i = 0; i < dateInputElement.value.length; i++) {
            if (dateInputElement.value[i] == '/') {
                slash++;
            }
        }
        if (slash == 2 && isNaN(date) == false) {
            dateInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            dateInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDate.appendChild(alertMessageDate);
        }
    }
    dateInputElement.onfocus = function () {
        dateInputElement.style = "border-color: none";
        alertDate.removeChild(alertMessageDate);
    }

    /* Phone validation */
    var phoneInputElement = document.getElementById("phone");
    var alertPhone = document.getElementById("alert-phone");
    var alertMessagePhone = document.createTextNode("Insert a valid phone format.")

    phoneInputElement.onblur = function () {
        if (phoneInputElement.value.length == 10 && isNaN(phoneInputElement.value) == false) {
            phoneInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            phoneInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPhone.appendChild(alertMessagePhone);
        }
    }
    phoneInputElement.onfocus = function () {
        phoneInputElement.style = "border-color: none";
        alertPhone.removeChild(alertMessagePhone);
    }

    /* Address validation */
    var addressInputElement = document.getElementById("address");
    var alertAddress = document.getElementById("alert-address");
    var alertMessageAddress = document.createTextNode("Insert a valid address format.")

    addressInputElement.onblur = function () {
        var addressSpaces = addressInputElement.value.replaceAll(' ', '');
        var number = false;
        for (var i = 0; i < addressSpaces.length; i++) {
            if (isNaN(addressSpaces[i]) == false) {
                number = true;
            }
        }
        var letter = false;
        for (var i = 0; i < addressSpaces.length; i++) {
            if (isNaN(addressSpaces[i]) == true) {
                letter = true;
            }
        }
        if (addressInputElement.value.length > 5 && number == true && letter == true &&
            addressInputElement.value.indexOf(' ') > 0 &&
            addressInputElement.value.indexOf(' ') < addressInputElement.value.length - 1 &&
            addressInputElement.value.length > addressInputElement.value.lastIndexOf(' ')) {
            addressInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            addressInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertAddress.appendChild(alertMessageAddress);
        }
    }
    addressInputElement.onfocus = function () {
        addressInputElement.style = "border-color: none";
        alertAddress.removeChild(alertMessageAddress);
    }

    /* Location validation */
    var locationInputElement = document.getElementById("location");
    var alertLocation = document.getElementById("alert-town");
    var alertMessageLocation = document.createTextNode("Insert a valid town format.")

    locationInputElement.onblur = function () {
        if (locationInputElement.value.length > 3) {
            locationInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            locationInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertLocation.appendChild(alertMessageLocation);
        }
    }
    locationInputElement.onfocus = function () {
        locationInputElement.style = "border-color: none";
        alertLocation.removeChild(alertMessageLocation);
    }

    /* Postal code validation */
    var codeInputElement = document.getElementById("postalCode");
    var alertCode = document.getElementById("alert-pcode");
    var alertMessageCode = document.createTextNode("Insert a valid postal code format.")

    codeInputElement.onblur = function () {
        if (codeInputElement.value.length >= 4 && codeInputElement.value.length <= 5 && isNaN(codeInputElement.value) == false) {
            codeInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            codeInputElement.style = "border: solid 2px red; border-radius: 5px";
            /* Agregar mensaje de error en este espacio*/
            alertCode.appendChild(alertMessageCode);
        }
    }
    codeInputElement.onfocus = function () {
        codeInputElement.style = "border-color: none";
        alertCode.removeChild(alertMessageCode);
    }

    /* Email validation */
    var emailInputElement = document.getElementById("email");
    var alertEmail = document.getElementById("alert-email");
    var alertMessageEmail = document.createTextNode("Insert a valid email format.");

    emailInputElement.onblur = function () {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
            emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            emailInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertEmail.appendChild(alertMessageEmail);
        }
    }
    emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
        alertEmail.removeChild(alertMessageEmail);
    }

    /* Password validation */
    var passwordInputElement = document.getElementById("password");
    var alertPassword = document.getElementById("alert-password");
    var alertMessagePassword = document.createTextNode("Insert a valid password format.");

    passwordInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < passwordInputElement.value.length; i++) {
            if (isNaN(passwordInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        var letterSum = false;
        for (var i = 0; i < passwordInputElement.value.length; i++) {
            if (isNaN(passwordInputElement.value[i]) == true) {
                letterSum = true;
            }
        }
        if (passwordInputElement.value.length > 8 && numberSum == true && letterSum == true) {
            passwordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            passwordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPassword.appendChild(alertMessagePassword);
        }
    }
    passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        alertPassword.removeChild(alertMessagePassword);
    }

    /* Repeat password validation */
    var repPasswordInputElement = document.getElementById("repeatPass");
    var alertRepPassword = document.getElementById("alert-reppassword");
    var alertMessageRepPassword = document.createTextNode("Insert a valid password format.");

    repPasswordInputElement.onblur = function () {
        if (passwordInputElement.value == repPasswordInputElement.value) {
            repPasswordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validation++;
        } else {
            repPasswordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertRepPassword.appendChild(alertMessageRepPassword);
        }
    }
    repPasswordInputElement.onfocus = function () {
        repPasswordInputElement.style = "border-color: none";
        alertRepPassword.removeChild(alertMessageRepPassword);
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

        if (formFullName.match(nameRegex) && formdni.match(numericRegex) && formbirthday && formtel.match(numericRegex) && formadress.match(adressRegex) && formlocation.match(locationRegex) && formcp.match(numericRegex) && formEmail.match(emailRegex) && formPassword.match(passwordRegex) && formconfirmp === formPassword) {
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
    console.log(signup);
}