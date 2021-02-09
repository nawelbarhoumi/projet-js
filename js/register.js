function register(){
    var first=document.getElementById('1st')
    var last=document.getElementById('last')
    var email=document.getElementById('email')
    var password=document.getElementById('password')
    var storage=JSON.parse(localStorage.getItem('USERS')) || []

    if(first.value=="" ){
        first.className +=' is-invalid'
      return; 
    }
    else { 
        first.classList.remove('is-invalid')
        first.className +=' is-valid'
    }
    if(last.value=="" ){
        last.className +=' is-invalid'
       return;
    }
    else { 
        last.classList.remove('is-invalid')
        last.className +=' is-valid'
    }
    if(email.value.indexOf('@')==-1){
        email.className +=' is-invalid'
       return;
    }
    else { 
        email.classList.remove('is-invalid')
        email.className +=' is-valid'
    }
    if(password.value.length<6){
        password.classList.remove('is-valid')
        password.className +=' is-invalid' 
        document.getElementById("warning").innerHTML="6 or more caracters long"
        return;
    }
    else{
        password.classList.remove('is-invalid')
        password.className+= ' is-valid' 
        document.getElementById('warning').innerHTML=""
    }
    storage.push(
        {
            firstname: first.value,
            lastname:last.value,
            email:email.value,
            password:password.value
        }
    )
    window.location.href='account.html'
        localStorage.setItem('USERS',JSON.stringify(storage))
}
