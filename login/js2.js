function login(){
    let user, password
    user = document.getElementById("usuario"). value;
    password = document.getElementById("contraseña"). value;

    if (user == "michael" && password == "1234"){
        window.location = "http://127.0.0.1:5500/index.html/index.html";
    } else {
            alert("no tienes acceso.");
        }
}
