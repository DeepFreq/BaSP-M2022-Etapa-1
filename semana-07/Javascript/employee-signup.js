document.addEventListener("DOMContentLoaded", function (event) {



    /* Name validation */
    var nameInputElement = document.getElementById("name");
    var alertName = document.getElementById("alert-fname");
    var alertMessageName = document.createTextNode("Insert a valid name format.");
    var validationName;

    nameInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < nameInputElement.value.length; i++) {
            if (isNaN(nameInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        if (nameInputElement.value.length > 3 && numberSum == false) {
            nameInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationName = true;
        } else {
            nameInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertName.appendChild(alertMessageName);
            validationName = false;
        }
    }
    nameInputElement.onfocus = function () {
        nameInputElement.style = "border-color: none";
        alertName.appendChild(alertMessageName);
        alertName.removeChild(alertMessageName);
    }

    /* Surname validation */
    var surnameInputElement = document.getElementById("last-name");
    var alertSurname = document.getElementById("alert-surname");
    var alertMessageSurname = document.createTextNode("Insert a valid surname format.")
    var validationSurname;

    surnameInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < surnameInputElement.value.length; i++) {
            if (isNaN(surnameInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        if (surnameInputElement.value.length > 3 && numberSum == false) {
            surnameInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationSurname = true;
        } else {
            surnameInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertSurname.appendChild(alertMessageSurname);
            validationSurname = false;
        }
    }
    surnameInputElement.onfocus = function () {
        surnameInputElement.style = "border-color: none";
        alertSurname.appendChild(alertMessageSurname);
        alertSurname.removeChild(alertMessageSurname);
    }

    /* DNI validation */
    var dniInputElement = document.getElementById("id-number");
    var alertDNI = document.getElementById("alert-dni");
    var alertMessageDNI = document.createTextNode("Insert a valid DNI format.")
    var validationDni;

    dniInputElement.onblur = function () {
        if (dniInputElement.value.length > 7 && isNaN(dniInputElement.value) == false) {
            dniInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationDni = true;
        } else {
            dniInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDNI.appendChild(alertMessageDNI);
            validationDni = false;
        }
    }
    dniInputElement.onfocus = function () {
        dniInputElement.style = "border-color: none";
        alertDNI.appendChild(alertMessageDNI);
        alertDNI.removeChild(alertMessageDNI);
    }

    /* Date validation */
    var dateInputElement = document.getElementById("date");
    var alertDate = document.getElementById("alert-date");
    var alertMessageDate = document.createTextNode("Insert a valid date format.")
    var validationDate;

    dateInputElement.onblur = function () {
        var date = dateInputElement.value.replace(/[/]/g, '');
        var slash = 0;
        for (var i = 0; i < dateInputElement.value.length; i++) {
            if (dateInputElement.value[i] == '/') {
                slash++;
            }
        }
        if (slash == 2 && isNaN(date) == false) {
            dateInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationDate = true;
        } else {
            dateInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDate.appendChild(alertMessageDate);
            validationDate = false;
        }
    }
    dateInputElement.onfocus = function () {
        dateInputElement.style = "border-color: none";
        alertDate.appendChild(alertMessageDate);
        alertDate.removeChild(alertMessageDate);
    }

    /* Phone validation */
    var phoneInputElement = document.getElementById("phone");
    var alertPhone = document.getElementById("alert-phone");
    var alertMessagePhone = document.createTextNode("Insert a valid phone format.")
    var validationPhone;

    phoneInputElement.onblur = function () {
        if (phoneInputElement.value.length == 10 && isNaN(phoneInputElement.value) == false) {
            phoneInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationPhone = true;
        } else {
            phoneInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPhone.appendChild(alertMessagePhone);
            validationPhone = false;
        }
    }
    phoneInputElement.onfocus = function () {
        phoneInputElement.style = "border-color: none";
        alertPhone.appendChild(alertMessagePhone);
        alertPhone.removeChild(alertMessagePhone);
    }

    /* Address validation */
    var addressInputElement = document.getElementById("address");
    var alertAddress = document.getElementById("alert-address");
    var alertMessageAddress = document.createTextNode("Insert a valid address format.")
    var validationAddress;

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
            validationAddress = true;
        } else {
            addressInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertAddress.appendChild(alertMessageAddress);
            validationAddress = false;
        }
    }
    addressInputElement.onfocus = function () {
        addressInputElement.style = "border-color: none";
        alertAddress.appendChild(alertMessageAddress);
        alertAddress.removeChild(alertMessageAddress);
    }

    /* Location validation */
    var locationInputElement = document.getElementById("location");
    var alertLocation = document.getElementById("alert-town");
    var alertMessageLocation = document.createTextNode("Insert a valid town format.")
    var validationLocation;

    locationInputElement.onblur = function () {
        if (locationInputElement.value.length > 3) {
            locationInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationLocation = true;
        } else {
            locationInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertLocation.appendChild(alertMessageLocation);
            validationLocation = false;
        }
    }
    locationInputElement.onfocus = function () {
        locationInputElement.style = "border-color: none";
        alertLocation.appendChild(alertMessageLocation);
        alertLocation.removeChild(alertMessageLocation);
    }

    /* Postal code validation */
    var codeInputElement = document.getElementById("postalCode");
    var alertCode = document.getElementById("alert-pcode");
    var alertMessageCode = document.createTextNode("Insert a valid postal code format.")
    var validationCode;

    codeInputElement.onblur = function () {
        if (codeInputElement.value.length >= 4 && codeInputElement.value.length <= 5 && isNaN(codeInputElement.value) == false) {
            codeInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationCode = true;
        } else {
            codeInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertCode.appendChild(alertMessageCode);
            validationCode = false;
        }
    }
    codeInputElement.onfocus = function () {
        codeInputElement.style = "border-color: none";
        alertCode.appendChild(alertMessageCode);
        alertCode.removeChild(alertMessageCode);
    }

    /* Email validation */
    var emailInputElement = document.getElementById("email");
    var alertEmail = document.getElementById("alert-email");
    var alertMessageEmail = document.createTextNode("Insert a valid email format.");
    var validationEmail;

    emailInputElement.onblur = function () {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
            emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationEmail = true;
        } else {
            emailInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertEmail.appendChild(alertMessageEmail);
            validationEmail = false;
        }
    }
    emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
        alertEmail.appendChild(alertMessageEmail);
        alertEmail.removeChild(alertMessageEmail);
    }

    /* Password validation */
    var passwordInputElement = document.getElementById("password");
    var alertPassword = document.getElementById("alert-password");
    var alertMessagePassword = document.createTextNode("Insert a valid password format.");
    var validationPassword;

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
        if (passwordInputElement.value.length >= 8 && numberSum == true && letterSum == true) {
            passwordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationPassword = true;
        } else {
            passwordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPassword.appendChild(alertMessagePassword);
            validationPassword = false;
        }
    }
    passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        alertPassword.appendChild(alertMessagePassword);
        alertPassword.removeChild(alertMessagePassword);
    }

    /* Repeat password validation */
    var repPasswordInputElement = document.getElementById("repeatPass");
    var alertRepPassword = document.getElementById("alert-reppassword");
    var alertMessageRepPassword = document.createTextNode("Insert a valid password format.");
    var validationRepPassword;

    repPasswordInputElement.onblur = function () {
        if (passwordInputElement.value == repPasswordInputElement.value) {
            repPasswordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationRepPassword = true;
        } else {
            repPasswordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertRepPassword.appendChild(alertMessageRepPassword);
            validationRepPassword = false;
        }
    }
    repPasswordInputElement.onfocus = function () {
        repPasswordInputElement.style = "border-color: none";
        alertRepPassword.appendChild(alertMessageRepPassword);
        alertRepPassword.removeChild(alertMessageRepPassword);
    }

    /* Agree event */
    var agreeSignup = document.getElementById("buttonSign");
    var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";

    function myStorage() {
        localStorage.setItem("name", nameInputElement.value);
        localStorage.setItem("lastName", surnameInputElement.value);
        localStorage.setItem("dni", dniInputElement.value);
        localStorage.setItem("dob", dateInputElement.value);
        localStorage.setItem("phone", phoneInputElement.value);
        localStorage.setItem("address", addressInputElement.value);
        localStorage.setItem("city", locationInputElement.value);
        localStorage.setItem("zip", codeInputElement.value);
        localStorage.setItem("email", emailInputElement.value);
        localStorage.setItem("password", passwordInputElement.value);
    }

    function infoAgree() {
        if (validationName === true &&
            validationSurname === true &&
            validationDni === true &&
            validationDate === true &&
            validationAddress === true &&
            validationLocation === true &&
            validationPhone === true &&
            validationCode === true &&
            validationEmail === true &&
            validationPassword === true) {
            fetch(url +
                "?name=" + nameInputElement.value +
                "&lastName=" + surnameInputElement.value +
                "&dni=" + dniInputElement.value +
                "&dob=" + dateInputElement.value +
                "&phone=" + phoneInputElement.value +
                "&address=" + addressInputElement.value +
                "&city=" + locationInputElement.value +
                "&zip=" + codeInputElement.value +
                "&email=" + emailInputElement.value +
                "&password=" + passwordInputElement.value)
                .then(function (response) {
                    return response.json();
                })
                .then(function (res) {
                    if (res.succes) {
                        myStorage();
                        alert("Name: " + nameInputElement.value +
                            "Last Name: " + surnameInputElement.value +
                            "DNI: " + dniInputElement.value +
                            "DoB: " + dateInputElement.value +
                            "Phone: " + phoneInputElement.value +
                            "&Address: " + addressInputElement.value +
                            "City: " + locationInputElement.value +
                            "Zip: " + codeInputElement.value +
                            "Email: " + emailInputElement.value +
                            "Password: " + passwordInputElement.value);
                    } else {
                        alert(res.msg);
                    }
                })
                .catch(function (err) {
                    alert(err.errors[0].msg);
                });
        } else {
            alert("error");
        }
    }
    agreeSignup.onclick = function (e) {
        e.preventDefault();
        infoAgree();
    }
});

