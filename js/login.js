function login(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value.indexof('@')==-1){
        email.className += 'is-invalid'
        email.classList.remove('is-valid')
        document.getElementById('invalidemail').innerHTML="please enter valid email"
    }
    else {
        email.className += ' is-valid'
        email.classList.remove('is-invalid')
        document.getElementById('invalidmail').innerHTML=""
    }
    if(password.value.length<6){
        password.className += ' is-invalid'
        password.classList.remove('is-valid')
        document.getElementById('invalidpassword').innerHTML="enter more than 6 caracters"
    }
    else {
        password.className += ' is-valid'
        password.classList.remove('is-invalid')
        document.getElementById('invalidpassword').innerHTML=""
    }
    var storage= JSON.parse(localStorage.getItem("USERS"));
    var server = storage.find((x) =>x.email==email.value && x.password==password.value)
    if(server!=undefined){
        window.location.href='register.html'
    }
    else{
        alert('verify your email or your password')
    }
}