// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
    $('#usuarios').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.2/i18n/es-ES.json'
        }
    });
});

async function cargarUsuarios() {
    const request = await fetch('api/v1/usuarios', {
        method: 'GET',
    });
    const usuarios = await request.json();
    // console.log(usuarios);

    let listadoHTML = '';
    for (let usuario of usuarios) {
        let btnEliminar = `<button class="btn btn-danger btn-circle btn-sm" onclick="eliminarUsuario(${usuario.id})"><i class="fas fa-trash"></i></button>`;
        let telefono = usuario.telefono == null ? '' : usuario.telefono;
        let usuarioHTML = `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nombre} ${usuario.apellido}</td>
                <td>${usuario.email}</td>
                <td>${telefono}</td>
                <td>
                    <button class="btn btn-warning btn-circle btn-sm">
                        <i class="fas fa-edit"></i>
                    </button>
                    |
                    ${btnEliminar}
                </td>
            </tr>
        `;
        listadoHTML += usuarioHTML
    }

    document.querySelector('#usuarios tbody').outerHTML = listadoHTML;
}

async function eliminarUsuario(id) {
    if (!confirm('Está seguro que quiere eliminar a este usuario?')) {
        return;
    }
    const request = await fetch(`api/v1/usuarios/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    window.location.reload();
}