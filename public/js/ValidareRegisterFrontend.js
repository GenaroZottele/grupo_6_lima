
window.addEventListener('load',function(){

        let errores = {}
        
        const nameFull = document.querySelector('#full_name');
        const nameError = document.querySelector('#nameError');
        const email = document.querySelector('#email');
        const emailError = document.querySelector('#emailError');
        const password = document.querySelector('#password');
        const passwordError = document.querySelector('#passwordError');
        const adressId = document.querySelector('#adress_id');
        const adressIdError = document.querySelector('#adressIdError');
        const userType = document.querySelector('#user_type_id');
        const userTypeError = document.querySelector('#userTypeError');
        
        nameFull.addEventListener('focus',function(){
            let i = nameFull.value.length
                if (i <= 4) {
                    errores ++
                    nameError.innerHTML = '<small>Minimo 4 caracteres</small>'
                }
        })
        nameFull.addEventListener('blur',function(){
            let i = nameFull.value.length
            if (i > 4) {
                nameError.style.display = "none"
                errores --
            }
        })

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

})

