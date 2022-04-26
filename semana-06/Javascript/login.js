// -Window.onload- es un evento para ejecutar codigo Javascript apenas la pagina haya cargado. De esta manera nos aseguramos que el navegador...
// ...está ejecutando JS correctamente.
window.onload = function () {
    const exprsLogin = {
        password: /^.{4,12}$/,
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
    emailInput[0].addEventListener('blur', onBlurEmail);
    emailInput[0].addEventListener('focus', onFocusEmail);

    passwordInput[0].addEventListener('focus', onFocusPass);
    passwordInput[0].addEventListener('blur', onBlurPass);

    button[0].addEventListener('click', clickButton);

    // Creamos variables para validaciones de error. Estas mismas son usadas luego dentro de las funciones a ejecutar.

    var errorValidationPass;
    var errorValidationEmail;

    // A continuación creamos las funciones de validaciones.
    function emailValidation(e) {
       if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value)) {
       errorValidationEmail = e.target.value;
    } else {
        errorMsj[0].innerHTML = 'Error en el email';
        errorMsj[0].style.display = "block";
        errorValidationEmail = 'Error en el email';
    }
    console.log(errorMsj);
}