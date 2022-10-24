let nombre, apellido, correo , contraseña 

let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerData()
})

function LeerData() {
    nombre = document.getElementById('Nombre').value
    apellido = document.getElementById('Apellido').value
    correo = document.getElementById('Correo').value
    contraseña = document.getElementById('Contraseña').value

 GuardarLocalStorage(nombre, apellido, correo, contraseña) 

}

function GuardarLocalStorage(nombre, apellido, correo, contraseña){
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Apellido', apellido)
    localStorage.setItem('Correo', correo)
    localStorage.setItem('Contraseña', contraseña)

}
