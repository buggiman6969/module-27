document.getElementById('submit-id'),addEventListener('click',function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-pass');
    const password = userPassword.value;

    if(email === 'abdullaapon12@gmail.com' && password === '123456789'){
        console.log('valid user')
        window.location.href = "bank.html";
    }
    else{
        alert('please check your email & password ');
    }
})
