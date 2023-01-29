const formulario = document.querySelector('#formularioRegister');
const divErrors = document.querySelector ('#errors');

const procesarFormulario = (event) => {
    event.preventDefault();
    divErrors.innerHTML = '';

    const campoFull_name= formulario.full_name
    const campoEmail= formulario.email
    const campoPassword= formulario.password;

    console.log(campoFull_name.value)
    console.log(campoEmail.value)
    console.log(campoPassword.value)

    if (campoFull_name.value == '') {
        divErrors.innerHTML += '<p> El campo Nombre y Apellido está vacío </p>'
    }

    if (campoEmail.value == '') {
        divErrors.innerHTML += '<p> El campo email está vacío </p>'
    }

    if (campoPassword.value == '') {
        divErrors.innerHTML += '<p> El campo password está vacío </p>'
        }

    

    formulario.submit()
	}

formulario.addEventListener ('submit', procesarFormulario)


formulario.full_name.addEventListener ('keyup', (event) => {
    divErrors.innerHTML = '';

   const valorDeInput = event.target.value;
   if (valorDeInput < 2) {
    divErrors.innerHTML += '<p> El campo debe tener al menos 2 caracteres </p>'
        }

}
)


formulario.password.addEventListener ('keyup', (event) => {
    divErrors.innerHTML = '';

   const valorDeInput = event.target.value;
   if (valorDeInput < 8) {
    divErrors.innerHTML += '<p> La contraseña debe tener al menos 8 caracteres </p>'
        }
}
)

formulario.avatar.addEventListener ('onLoad', (event) => {
    divErrors.innerHTML = '';

   const valorDeInput = event.target.value;
   if (valorDeInput != jpg, jpeg, png, gif) {
    divErrors.innerHTML += '<p> La imagen debe subirse en un formato válido </p>'
        }
}
)