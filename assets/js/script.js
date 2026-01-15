const btnEnviar = document.getElementById('btnEnviar')
btnEnviar.addEventListener('click', function(){
    const txtNombre = document.getElementById('txtNombre').value;
    const txtEmail = document.getElementById('txtEmail').value;
    const txtMensaje = document.getElementById('txtMensaje').value;
    if (txtNombre === '' || txtEmail === '' || txtMensaje === '') {
        const msgSalida = document.getElementById('msgSalida')
        msgSalida.innerHTML = 'Todos los campos deben ser llenados';
    } else {
        const msgSalida = document.getElementById('msgSalida');
        msgSalida.innerHTML = 'Mensaje enviado!';
    }    
    

    console.log(btnEnviar.innerHTML);
    btnEnviar.innerHTML = 'Enviado'

})