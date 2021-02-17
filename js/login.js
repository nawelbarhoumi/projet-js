function login(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value.indexOf('@')==-1){
        email.className += 'is-invalid'
        email.classList.remove('is-valid')    
    }
    else {
        email.className += ' is-valid'
        email.classList.remove('is-invalid')
    }
    if(password.value.length<6){
        password.className += ' is-invalid'
        password.classList.remove('is-valid')
    }
    else {
        password.className += ' is-valid'
        password.classList.remove('is-invalid')
    }

    var storage= JSON.parse(localStorage.getItem("USERS"));
    var server = storage.find((x) =>x.email==email.value && x.password==password.value)
    var i=0;
    
    storage.map((x) => {if(document.getElementById('email')===x.email){
       i++
        
    }
    });
    if(server!=undefined){
        if(server.role==='admin'){
        window.location.href='index.html'
        }else  if(server.role==='user'){
            localStorage.setItem('connected',JSON.stringify(server))
            window.location.href='indexclient.html'
        } 
    }
    else{
        alert('verify your email or your password')
    }
}
function logout(){
    localStorage.removeItem('connected')
}
function userconnect(){
    var user= JSON.parse(localStorage.getItem('connected'))
    document.getElementById('useraccount').innerHTML=user.firstname+' '+user.lastname
}