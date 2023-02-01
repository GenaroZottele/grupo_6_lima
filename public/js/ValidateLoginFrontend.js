window.addEventListener('load',function(){
    const formulario = document.querySelector('#formularioRegister');
    // function submitForm(e) {

        let errores = {}
        const email = document.querySelector('#email');
        const emailError = document.querySelector('#emailError');
        const password = document.querySelector('#password');
        const passwordError = document.querySelector('#passwordError');

        email.addEventListener('blur',function(){
                let valor = email.value

                if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(valor)){
                    emailError.innerHTML = '<small>email aceptado</small>'
                    errores --
                } else {
                    errores ++
                    emailError.innerHTML = '<small>Debe tener formato email</small>'
                }
        })
        password.addEventListener('blur',function(){
            let contra = password.value
            if (/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(contra)) {
                passwordError.innerHTML = '<small>Password aceptada</small>'
                errores --
            }else{
                passwordError.innerHTML = '<small>Debe tener letras mayúsculas, minúsculas,un número y un carácter especial</small>'
                errores ++
            }
        })
        // e.preventDefault()
        console.log(errores);
        if (errores <= 0) {
            this.submit()
        }
    // }
    // formulario.addEventListener('submit',submitForm)
})






























// const formulario = document.querySelector('#formularioLogin');
// const divErrors = document.querySelector ('#errors');

// const procesarFormulario = (event) => {
//     event.preventDefault();
//     divErrors.innerHTML = '';

//     const campoEmail= formulario.email
//     const campoPassword= formulario.password;

//     console.log(campoEmail.value)
//     console.log(campoPassword.value)

//     if (campoEmail.value == '') {
//         divErrors.innerHTML += '<p> El campo email está vacío </p>'
//     }

//     if (campoPassword.value == '') {
//         divErrors.innerHTML += '<p> El campo password está vacío </p>'
//         }

    

//     formulario.submit()
// 	}

// formulario.addEventListener ('submit', procesarFormulario)