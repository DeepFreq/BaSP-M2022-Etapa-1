// -Window.onload- es un evento para ejecutar codigo Javascript apenas la pagina haya cargado. De esta manera nos aseguramos que el navegador...
// ...está ejecutando JS correctamente.
window.onload = function () {
    var exprsLogin = {
        password: /[a-z0-9]/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    // Crear variables usando selectores DOM para acceder a los nodos. Por ejemplo con...
    //... -getElementsByName- seguido del nombre del elemento.
    var errorMsj = document.getElementsByClassName('errorMsj');
    var confirm = document.getElementById('continue');
    var emailInput = document.getElementById('inputemail');
    var passwordInput = document.getElementById('inputpass');
    var butonC = document.getElementById('buttonC');
    console.log(errorMsj);
    // Agregamos los eventos a las variables creadas. En este caso los eventos 'blur' y 'focus' a traves de...
    // la propiedad -addEventListener-. Seleccionamos el tipo de evento seguido de una función.
    emailInput[0].addEventListener('blur', emailV);
    emailInput[0].addEventListener('focus', cleanV);

    passwordInput[0].addEventListener('focus', passV);
    passwordInput[0].addEventListener('blur', cleanV);

    button[0].addEventListener('click', clickButton);

    // Creamos variables para validaciones de error. Estas mismas son usadas luego dentro de las funciones a ejecutar.

    var errorValidationEmail;
    var errorValidationPass;

    // A continuación creamos las funciones de validaciones.
    function emailV(e) {
       if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value)) {
       errorValidationEmail = e.target.value;
    } else {
        errorMsj[0].innerHTML = 'Error en el email';
        errorMsj[0].style.display = "block";
        errorValidationEmail = 'Error en el email';
        }
    }
    function passV(e) {
        if (/[a-z0-9]/.test(e.target.value)) {
          errorValidationPass = e.target.value;
        } else {
          errorMsj[0].style.display = "block";
          errorMsj[0].innerHTML = "Error en el password";
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
}