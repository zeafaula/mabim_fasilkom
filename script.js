function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;

    if(username == "himasi" && password == "himasi"){
        if(confirm("Apakah ingin login?") == true){
            window.location.href = "https://github.com/zeafaula";
        } else{
            alert("Membatalkan login :");
        }
    } else{
        if(done == 0){
            alert("username/password salah :");
        }
    }
}