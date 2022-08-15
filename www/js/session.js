
let _userStat = 0;


function loginSuccessStore(){
    _userStat = 1;
}

const _setLocalStorage = function() {
    localStorage.setItem('userStatus', _userStat);  // localStorage.setItem('key', 'value')

};

function emptyPasswords(){
    localStorage.setItem('userStatus',JSON.stringify(""));
    localStorage.setItem('emailStored',JSON.stringify(""));
    localStorage.setItem('passwordStored',JSON.stringify(""));
    localStorage.setItem('nickname',JSON.stringify(""));
    localStorage.setItem('darkTheme'," ");
}

function logOut(){


    $(document).ready(function () {
        //logOut
        $("#logOut").on('click', function(){
            vibrate();
            emptyPasswords();
            window.location.reload(true);
        })
    })
}



function init(){
    const userStatus = parseInt(localStorage.getItem('userStatus'));

    if(userStatus === 0) {
        notLoggedIn();
        emptyPasswords();
        goToRegister();
    }
    if(userStatus === 1) {
        const emailStatus = localStorage.getItem('emailStored').toString().slice(1, -1);
        const passwordStatus = localStorage.getItem('passwordStored').toString().slice(1, -1);
        const nicknameStatus = localStorage.getItem('nickname').toString();

        let nicknamevar = nicknameStatus;
        let emailvar = emailStatus;
        let passwordvar = passwordStatus;
        loginRequest(emailvar, passwordvar , nicknamevar);

        const darkThemeStatus = localStorage.getItem('darkTheme').toString().slice(1, -1);


        if (darkThemeStatus === "") {
            $('.darkThemeStat').attr('checked', false);

        }
        if(darkThemeStatus === "True") {
            $('.darkThemeStat').attr('checked', true);

        }

    }





    //Check if login is pulled
    //console.log(emailStatus, passwordStatus);








    return {
        init: init,
        _setLocalStorage: _setLocalStorage
    };


}