function message(){
    var Name = document.getElementById('fullname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password_confirmation = document.getElementById('password_confirmation');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || password.value === ''  || password_confirmation.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            password.value = '';
            password_confirmation.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}