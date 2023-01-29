const formulario = document.querySelector('#formularioLogin');
const divErrors = document.querySelector ('#errors');

const procesarFormulario = (event) => {
    event.preventDefault();
    divErrors.innerHTML = '';

    const campoEmail= formulario.email
    const campoPassword= formulario.password;

    console.log(campoEmail.value)
    console.log(campoPassword.value)

    if (campoEmail.value == '') {
        divErrors.innerHTML += '<p> El campo email está vacío </p>'
    }

    if (campoPassword.value == '') {
        divErrors.innerHTML += '<p> El campo password está vacío </p>'
        }

    

    formulario.submit()
	}

formulario.addEventListener ('submit', procesarFormulario)