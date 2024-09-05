document.getElementById("login-form").addEventListener("submit", function(event) {
    let nombreUsuario = document.getElementById("nombre de usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (nombreUsuario === "" || contraseña === "") {
        alert("Porfavor ingrese su nombre de usuario y su contraseña.");
        event.preventDefault(); 
    }
});