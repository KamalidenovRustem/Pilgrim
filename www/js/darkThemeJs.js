function darkThemeScript(){

    let darkTheme ;


    function setDarkTheme(){
    $('.body').addClass("darkThemeCss");
}

function unsetDarkTheme(){
    $('.body').removeClass("darkThemeCss");
}


darkTheme = $(".darkThemeStat");


    const userStatus = parseInt(localStorage.getItem('userStatus'));

    if(userStatus === 0) {
        emptyPasswords();
    }
    if(userStatus === 1) {
        const darkThemeStatus = localStorage.getItem('darkTheme').toString().slice(1, -1);


        if (darkThemeStatus === "") {
            $('.darkThemeStat').attr('checked', false);
            unsetDarkTheme();
        }
        if(darkThemeStatus === "True") {
            $('.darkThemeStat').attr('checked', true);
            setDarkTheme();
        }


    }

    darkTheme.on('change', function() {
        if ($(this).is(':checked')) {
            localStorage.setItem('darkTheme',JSON.stringify("True"));
            setDarkTheme();
        }
        else {
            localStorage.setItem('darkTheme',JSON.stringify(""));
            unsetDarkTheme();
        }
    });



}