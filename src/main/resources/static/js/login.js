async function iniciarSesion() {
    let datos = {};
    datos.email = document.querySelector('#email').value;
    datos.password = document.querySelector('#password').value;

    const request = await fetch('api/v1/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    const respuesta = await request.text();
    if (respuesta == "OK") {
        window.location.href = 'usuarios.html';
    } else {
        alert('Las credenciales son incorrectas');
    }
}