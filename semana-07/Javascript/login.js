document.addEventListener("DOMContentLoaded", function (event) {

    /* Email validation */
    var emailInputElement = document.getElementById("inputemail");
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
    };
    emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
        alertEmail.appendChild(alertMessageEmail);
        alertEmail.removeChild(alertMessageEmail);
    };

    /* Password validation */
    var passwordInputElement = document.getElementById("inputpass");
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
    };
    passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        alertPassword.appendChild(alertMessagePassword);
        alertPassword.removeChild(alertMessagePassword);
    };

    /* Agree event */
    var agreeLogin = document.getElementById("buttonC");
    var url = "https://basp-m2022-api-rest-server.herokuapp.com/login";

    function infoAgree() {
        if (validationEmail === true &&
            validationPassword === true) {
            fetch(url +
                "?email=" + emailInputElement.value +
                "&password=" + passwordInputElement.value)
                .then(function (response) {
                    return response.json();
                })
                .then(function (res) {
                    if (res.succes) {
                        alert("Email: " + emailInputElement.value +
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
    agreeLogin.onclick = function (e) {
        e.preventDefault();
        infoAgree();
    }
});

