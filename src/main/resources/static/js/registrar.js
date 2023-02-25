async function registrarUsuario() {
    let datos = {};
    datos.nombre = document.querySelector('#nombre').value;
    datos.apellido = document.querySelector('#apellido').value;
    datos.email = document.querySelector('#email').value;
    datos.telefono = document.querySelector('#telefono').value;
    datos.password = document.querySelector('#password').value;
    datos.confirm_password = document.querySelector('#confirm_password').value;

    if (datos.password != datos.confirm_password) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const request = await fetch('api/v1/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert('La cuenta fue creada con éxito!');
    window.location.href = 'login.html';
}