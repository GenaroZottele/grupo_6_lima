


window.addEventListener('load',function(){
    const name = document.querySelector('#name');
    const nameError = document.querySelector('#nameError');
    const description = document.querySelector('#description');
    const descriptionError = document.querySelector('#descriptionError');

    name.addEventListener('blur',function(){
        let nameValue = name.value
        if (nameValue.length < 4) { // Aquí ponemos al menos 4 caracteres en vez de 5 porque tenemos ya una ensalada con nombre Cala (sepan entender profes jaja)
            nameError.innerHTML = '<small>Minimo 4 caracteres</small>'
            return
        }
    })
    description.addEventListener('blur',function(){
        let nameValue = name.value
        if (nameValue.length < 20) { 
            descriptionError.innerHTML = '<small>Minimo 20 caracteres</small>'
            return
        }
    })
})








// const formulario = document.querySelector('#formularioCreate');
// const divErrors = document.querySelector ('#errors');

// const procesarFormulario = (event) => {
//     event.preventDefault();
//     divErrors.innerHTML = '';

//     const campoName = formulario.name;
//     const campoDescription = formulario.description;
//     const campoImage = formulario.image;

//     console.log(campoName.value);
//     console.log(campoDescription.value);
//     console.log(campoImage.value);

//     if (campoName.value == '') {
//         divErrors.innerHTML += '<p> El campo nombre está vacío </p>'
//     }

//     if (campoDescription.value == '') {
//         divErrors.innerHTML += '<p> El campo descripción está vacío </p>'
//     }

//     if (campoImage.value == '') {
//         divErrors.innerHTML += '<p> No has ingresado ninguna imagen </p>'
//         }

    

//     formulario.submit()
//     }

// formulario.addEventListener ('submit', procesarFormulario);

// formulario.name.addEventListener ('keyup', (event) => {
//     divErrors.innerHTML = '';
// // Aquí ponemos al menos 4 caracteres en vez de 5 porque tenemos ya una ensalada con nombre Cala (sepan entender profes jaja)
//    const valorDeInput = event.target.value;
//    if (valorDeInput < 4) {
//     divErrors.innerHTML += '<p> El campo debe tener al menos 4 caracteres </p>'
//         }

// }
// );

// formulario.description.addEventListener ('keyup', (event) => {
//     divErrors.innerHTML = '';

//    const valorDeInput = event.target.value;
//    if (valorDeInput < 20) {
//     divErrors.innerHTML += '<p> La descripción debe tener al menos 20 caracteres </p>'
//         }
// }
// );

// formulario.image.addEventListener ('onLoad', (event) => {
//     divErrors.innerHTML = '';

//    const valorDeInput = event.target.value;
//    if (valorDeInput != jpg, jpeg, png, gif) {
//     divErrors.innerHTML += '<p> La imagen debe subirse en un formato válido </p>'
//         }
// }
// );