// -Window.onload- es un evento para ejecutar codigo Javascript apenas la pagina haya cargado. De esta manera nos aseguramos que el navegador...
// ...está ejecutando JS correctamente.
window.onload = function () {
    var exressionsRegex = {
        password: /[a-z0-9]/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    // Crear variables usando selectores DOM para acceder a los nodos. Por ejemplo con...
    //... -getElementsByName- seguido del nombre del elemento.
    var errorMsj = document.querySelectorAll('p');
    var confirm = document.getElementById('continue');
    var emailInput = document.querySelectorAll('input');
    var passwordInput = document.querySelectorAll('input');
    var buttonC = document.getElementById('buttonC');
    console.log(errorMsj);
    console.log(emailInput);
    console.log(passwordInput);
    console.log(errorMsj);
    console.log(buttonC);
    // Agregamos los eventos a las variables creadas. En este caso los eventos 'blur' y 'focus' a traves de...
    // la propiedad -addEventListener-. Seleccionamos el tipo de evento seguido de una función.
    emailInput[0].addEventListener('blur', emailV);
    emailInput[0].addEventListener('focus', cleanV);

    passwordInput[1].addEventListener('focus', passV);
    passwordInput[1].addEventListener('blur', cleanV);

    buttonC[0].addEventListener('click', clickButton);

    // Creamos variables para validaciones de error. Estas mismas son usadas luego dentro de las funciones a ejecutar.

    var errorValidationEmail;
    var errorValidationPass;

    // A continuación creamos las funciones de validaciones.
    function emailV(e) {
       if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value)) {
       errorValidationEmail = e.target.value;
    } else {
        errorMsj[1].innerHTML = 'Error en el email';
        errorMsj[1].style.display = 'flex';
        errorMsj[1].style.color = 'red';
        errorValidationEmail = 'Error en el email';
        }
    }
    function passV(e) {
        if (/[a-z0-9]/.test(e.target.value)) {
          errorValidationPass = e.target.value;
        } else {
          errorMsj[2].style.display = "block";
          errorMsj[2].style.color = 'red';
          errorMsj[2].innerHTML = "Error en el password";
          errorValidationPass = "Error en el password";
        }
    }

    function clickButton() {
        alert(
            'Email: ' + errorValidationEmail + '\n Password: ' + errorValidationPass
        );
    }

    function cleanV(e) {
        e.path[0].nextElementSibling.style.display = "none";
    }



    // var login = document.getElementById('form');
    // login.addEventListener('submit', emailsubmit);

    // function emailsubmit(e) {
    //     e.preventDefault();
    //     var form = new FormData(login);
    //     var formEmail = form.get('inputemail');
    //     var formPassword = form.get('inputpassword');

    //     if (formPassword.match(passwordRegex) && formEmail.match(emailRegex)) {
    //         errorMsj.style.display = 'none';
    //         inputpass.style.borderColor = '#0F0';
    //         inputemail.style.borderColor = '#0F0';
    //         alert('Email: ' + formEmail + '\n' + 'Password: ' + formPassword);
    //     } else {
    //         inputpass.style.borderColor = '#f00';
    //         inputemail.style.borderColor = '#f00';
    //         errorMsj.style.display = 'block';
    //         alert('Email or password incorrect');
    //     }
    // }
}

