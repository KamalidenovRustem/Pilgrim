function loginRequest(emailvar, passwordvar,nicknamevar){
    let loginAjax = $.ajax({
        url: 'https://cordovaserver.sinners.be/login.php',
        method: 'POST',
        data: {
            login: 1,
            emailPHP: emailvar,
            passwordPHP: passwordvar
        },
        success: function (response){
            console.log(response);
            let sux = JSON.stringify(response);
            console.log(sux);
            if(sux === '"success"'){
                loginSuccess();
                _setLocalStorage();

                $('.nameField').text(nicknamevar);
                $('.emailField').text(emailvar);


            }
            else {
                loginFail();
                _userStat = 0;
                _setLocalStorage();
                emptyPasswords();
            }
        },
        dataType: 'text'
    });
}

function authenticate(){



    $("#login").on('click', function (){
        vibrate();
        const email = $('#email').val();
        const password = md5($('#password').val());
        //console.log(email, password);
        localStorage.setItem('emailStored',JSON.stringify(email));
        localStorage.setItem('passwordStored',JSON.stringify(password));



        if (email === "" || password === ""){
            alert("Please check your inputs");
        }
        else {
            let emailvar = email;
            let passwordvar = password;
            loginRequest(emailvar, passwordvar);


            $.ajax({
                url: 'https://cordovaserver.sinners.be/session.php',
                method: 'POST',
                data: {
                    login: 1,
                    emailPHP: email,
                    passwordPHP: password
                },
                success: function (response){
                    let sux2 = JSON.stringify(response);
                    console.log(sux2);

                    localStorage.setItem('nickname',JSON.stringify(sux2).slice(26, -9));
                    loginSuccess();

                },
                dataType: 'text'
            });
        }


    });

    $("#singup").on('click', function (){
        vibrate();
        const nicknameREG = $('#nicknameREG').val();
        const emailREG = $('#emailREG').val();
        const passwordREG = md5($('#passwordREG').val());
        if (emailREG === "" || passwordREG === ""){
            alert("Please check your inputs");

        }
        else {
            $.ajax({
                url: 'https://cordovaserver.sinners.be/register.php',
                method: 'POST',
                data: {
                    login: 1,
                    nicknamePHPRegister: nicknameREG,
                    emailPHPRegister: emailREG,
                    passwordPHPRegister: passwordREG
                },
                success: function (response){
                    let suxREG = JSON.stringify(response);
                    console.log(suxREG);



                    if(suxREG === '"successREG"'){
                        registerSuccess();

                    }
                    else if(suxREG === '"presentREG"'){
                        registerFail();
                    }

                },
                error: console.log("Error!"),
                dataType: 'text'
            });
        }
    });
}