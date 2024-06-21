document.getElementById('miFormulario').addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    const usuario = document.getElementById('name').value.trim();
    const usuarioError = document.getElementById('usuarioError');

    const contrasena = document.getElementById('password').value.trim();
    const contrasenaError = document.getElementById('contrasenaError');

    let esValido = true;

    const usuarioRegex = /^[a-zA-Z0-9_]{4,16}$/;
    const passRegex = /^[a-zA-Z0-9]{8,16}$/;

    usuarioError.textContent = '';
    contrasenaError.textContent = '';

    // Validar Usuario
    if (usuario === '') {
        usuarioError.textContent = 'El nombre de usuario vacío es obligatorio';
        esValido = false;
    } else if (!usuarioRegex.test(usuario)) {
        usuarioError.textContent = 'El nombre de usuario debe tener entre 4 y 16 caracteres y solo puede contener letras, números y guion bajo.';
        esValido = false;
    }
    
    // Validar Contraseña
    if (contrasena === '') {
        contrasenaError.textContent = 'La contraseña es obligatoria, completar';
        esValido = false;
    } else if (!passRegex.test(contrasena)) {
        contrasenaError.textContent = 'La contraseña debe tener entre 8 y 16 caracteres y debe contener números y letras.';
        esValido = false;
    }

    if (esValido) {
        alert("Usuario y contraseña correctos");
        window.location.href = 'catalogo.html';
    }
}

// Para la entrega final se tiene pensado tener el modo de registrar para crear nuevos usuarios y el login principal.
