
function naviagtionMenuJs() {
    $(document).ready(function () {
        //NAVIGATION BELOW for Menu
        ////Navigation work
        $("#pictures").on('click', function () {
            goToCamera();
        })
        $("#maps").on('click', function () {
            goToMaps();
        })
        $("#home").on('click', function () {
            goToHome();
        })
        $("#profile").on('click', function () {
            goToProfile();
        })
        $("#about").on('click', function () {
            goToAbout();
        })
    })
}



function  registerSuccess(){
    registerFormVar.fadeOut(300);
    const myTimeout = setTimeout(loadLoginPage, 1400);
    function loadLoginPage(){
        loginFormVar.fadeIn(600);
        $(".successAlertMain").fadeIn(600);
    }
}

async function registerFail(){
    registerFormVar.fadeOut(300);
    const myTimeout = setTimeout(loadSpinPage, 400);
    function loadSpinPage(){
        spinPageVar.fadeIn(600);
    }
    const myTimeout2=setTimeout(loadFailedPage, 4400);
    async function loadFailedPage(){
        await(spinPageVar.fadeOut(300));
        $(".registerFailed").fadeIn(600);
    }
    const myTimeout3=setTimeout(loadLoginPage, 12400);
    async function loadLoginPage(){
        await($(".registerFailed").fadeOut(300));
        registerFormVar.fadeIn(600);
    }
}



const list1 = document.querySelectorAll('.list');
list1.forEach((item) => item.addEventListener('click', activateLink));
function activateLink(){
    list1.forEach((item)=>
        item.classList.remove('active')
    )
    this.classList.add('active');
}



async function loginFail(){
    userLoggedIn = 0;
    loginFormVar.fadeOut(300);
    const myTimeout = setTimeout(loadSpinPage, 400);
    function loadSpinPage(){
        spinPageVar.fadeIn(600);
    }
    const myTimeout2=setTimeout(loadFailedPage, 4400);
    async function loadFailedPage(){
        await(spinPageVar.fadeOut(300));
        $(".loginFailed").fadeIn(600);
    }
    const myTimeout3=setTimeout(loadLoginPage, 8400);
    async function loadLoginPage(){
        await($(".loginFailed").fadeOut(300));
        loginFormVar.fadeIn(600);
    }
}

async function connectionFailed(){
    userLoggedIn = 0;
    loginFormVar.fadeOut(300);
    const myTimeout = setTimeout(loadSpinPage, 400);
    function loadSpinPage(){
        spinPageVar.fadeIn(600);
    }
    const myTimeout2=setTimeout(loadFailedPage, 4400);
    async function loadFailedPage(){

        await(spinPageVar.fadeOut(300));
        $(".connectionFailed").fadeIn(600);
    }
    const myTimeout3=setTimeout(refresh, 1200);
    async function refresh(){

        window.location.reload(true);
    }

}

function notLoggedIn(){
    registerFormVar.fadeIn(600);
}


async function loginSuccess(){

    userLoggedIn = 1;
    loginSuccessStore();
    _setLocalStorage();
    await loginFormVar.fadeOut(300);
    await registerFormVar.fadeOut(300);
    const myTimeout = setTimeout(loadSpinPage, 400);
    function loadSpinPage(){
        spinPageVar.fadeIn(600)
    }
    const myTimeout2 = setTimeout(fadeSpinPage, 500);
    function fadeSpinPage(){
        spinPageVar.fadeOut(300)
    }

    const myTimeout3 = setTimeout(loadPages, 1000);
    function loadPages(){
        $(".navigationSection").fadeIn(1000);
        goToHome();
    }
}


function goToLogin(){
    registerFormVar.fadeOut(300);
    const myTimeout = setTimeout(loadLoginPage, 400);
    function loadLoginPage(){
        loginFormVar.fadeIn(600);
    }

    //Below is the old but working way written in JS. Replaced with JQuery fade alternative.
    //const registerPage= document.querySelector('.registerform');
    // registerPage.classList.add('hidden');
    // const loginPage= document.querySelector('.loginform');
    // loginPage.classList.remove('hidden');

}

function goToRegister(){

    loginFormVar.fadeOut(300);
    const myTimeout = setTimeout(loadRegisterPage, 400);
    function loadRegisterPage(){
        registerFormVar.fadeIn(600);
    }

    //Below is the old but working way written in JS. Replaced with JQuery fade alternative.
    //const loginPage= document.querySelector('.loginform');
    //loginPage.classList.add('hidden');
    //const registerPage= document.querySelector('.registerform');
    //registerPage.classList.remove('hidden');
}


function goToHome(){
    aboutPagevar.fadeOut(200);
    profilePagevar.fadeOut(200);
    picturesPagevar.fadeOut(300);
    mapsPagevar.fadeOut(300);

    const myTimeout = setTimeout(loadHomePage, 300);
    function loadHomePage(){
        $(".mainPage").fadeIn(200);
        homePagevar.fadeIn(300);
    }
}

function goToMaps(){
    aboutPagevar.fadeOut(200);
    profilePagevar.fadeOut(200);
    picturesPagevar.fadeOut(300);
    homePagevar.fadeOut(300);

    const myTimeout = setTimeout(loadMapPage, 300);
    function loadMapPage(){
        $(".mainPage").fadeIn(200);
        mapsPagevar.fadeIn(300);
    }
}

function  goToAbout(){
    mapsPagevar.fadeOut(300);
    profilePagevar.fadeOut(200);
    picturesPagevar.fadeOut(300);
    homePagevar.fadeOut(300);


    const myTimeout = setTimeout(loadAboutPage, 300);
    function loadAboutPage(){
        $(".mainPage").fadeIn(200);
        aboutPagevar.fadeIn(300);
    }
}


function  goToProfile(){
    aboutPagevar.fadeOut(200);
    picturesPagevar.fadeOut(300);
    homePagevar.fadeOut(300);
    mapsPagevar.fadeOut(300);

    const myTimeout = setTimeout(loadAboutPage, 300);
    function loadAboutPage(){
        $(".mainPage").fadeIn(200);
        profilePagevar.fadeIn(300);
    }
}

function goToCamera(){
    aboutPagevar.fadeOut(200);
    profilePagevar.fadeOut(200);
    homePagevar.fadeOut(300);
    mapsPagevar.fadeOut(300);

    const myTimeout = setTimeout(loadAboutPage, 300);
    function loadAboutPage(){
        $(".mainPage").fadeIn(200);
        picturesPagevar.fadeIn(300);
    }

}