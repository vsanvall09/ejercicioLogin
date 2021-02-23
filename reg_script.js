function registerNewUser() {
    var reg_user = document.getElementById("user reg").value;
    var reg_password = document.getElementById("passw reg").value;
    var userArray = [];
    if (sessionStorage.getItem("wUserArray") !== null) {
        userArray = JSON.parse(sessionStorage.getItem("wUserArray"));
    }

    // alert(reg_user);


    var currentReg = {
        user: reg_user,
        password: reg_password

    };

    userArray.push(currentReg);

    sessionStorage.setItem("wUserArray", JSON.stringify(userArray));


}
function goToLogin() {

    window.location.href = "index.html";

}









