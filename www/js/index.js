/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


document.addEventListener('deviceready', onDeviceReady, false);


let userLoggedIn = 0;


//Initializing variables for Jquery selector
let spinPageVar;
let registerFormVar;
let loginFormVar;

let picturesPagevar;
let mapsPagevar;
let homePagevar;
let profilePagevar;
let aboutPagevar;

const vibrate = function (){
    navigator.vibrate(1000);
};


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    navigator.vibrate(1000);

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);


    $(document).ready(function (){

        if(navigator.connection.type === 'none') {
            connectionFailed();

        }

        document.addEventListener("offline", function(e){
            connectionFailed();
        }, false);

        //updating variables for Jquery selector
        spinPageVar = $(".spinPage");
        registerFormVar =  $(".registerform");
        loginFormVar = $(".loginform");

        profilePagevar = $(".accountPage");
        aboutPagevar = $(".aboutPage");
        picturesPagevar = $(".cameraPage");
        mapsPagevar = $(".mapsPage");
        homePagevar = $(".homePage");


        $('#profile')
            .click(function () {
                $('#city').text(Weather.loadingMsg);
                Weather.init();
            })
            .click();   // trigger click event on a#renew



        authenticate();

        naviagtionMenuJs();

        init();

        logOut();

        darkThemeScript();

        cameraFunction();



    });


}

