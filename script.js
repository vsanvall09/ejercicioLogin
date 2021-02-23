function checkLogin() {

    //obtener usuario
    var user = document.getElementById("user").value;
    var password = document.getElementById("passw").value;

    var userArray = JSON.parse(sessionStorage.getItem("wUserArray"));
    //alert("in form-> " + user);
    //alert("in session-> " + userArray[0].user);


    if (user !== null && user !== "") {
        if (password !== null && password !== "") {

            //login es correcto o esta aprobado
            //enviarme al dashboard
            //if(user ==="bal" && password==="123"){
            var canLogin = checkLoginInfo(user, password, userArray);
            if (canLogin === true) {
                window.location.href = "dashboard.html";
            } else {
                alert("user or password are not correct");
            }

        } else {
            alert("password must not be empty");
        }
    } else {
        alert("user must not be empty");
    }
}

function checkLoginInfo(user, password, userArray) {
    if (userArray !== null && userArray.length > 0) {
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].user === user && userArray[i].password === password) {
                return true;
            }
        }

    }
    return false;
}




function goToRegistration() {
    window.location.href = "registration.html";
}