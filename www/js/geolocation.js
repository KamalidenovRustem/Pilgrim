const Weather = function () {
    const openweatherKey = '0ddcd1dbe2b7bac0ddfb7d54a0fafe14';
    const openweatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    const openstreetUrl = 'https://nominatim.openstreetmap.org/reverse';
    const loadingMsg = 'Loading forecast...';
    const myLocation = {    // default location: Thomas More Campus Geel
        lat: 51.160946,
        lon: 4.959205
    }



    const init = function (){
        $('#weather').empty().hide();
        navigator.geolocation.getCurrentPosition(_geolocationSuccess, _geolocationError, {
            timeout: 5000,
            enableHighAccuracy: true
        });
    }

    const _geolocationSuccess = function (position) {
        console.log(position);
        myLocation.lat = position.coords.latitude;
        myLocation.lon = position.coords.longitude;
        console.log(`latitude: ${myLocation.lat} \nlongitude: ${myLocation.lon}`);
        _getWeather();
        _getCity();
    };

    const _geolocationError = function (error) {
        console.log(error);
        alert(`code: ${error.code}
		message: ${error.message}
		Please turn on your GPS`);
        _getWeather();
        _getCity();
    };



    let _getWeather = function (lat, lon) {
        // Create a object literal with all the query parameters
        const pars = {
            lat: myLocation.lat,
            lon: myLocation.lon,
            lang: 'en',  // or en
            units: 'metric',
            exclude: 'minutely,hourly',
            appid: openweatherKey
        }

        // Display the URL with query parameters in console
        console.log('API call:', `${openweatherUrl}?${$.param(pars)}`);

        // $.getJSON(url, [queryParameters], [successCallback]).done().fail().always()
        $.getJSON(openweatherUrl, pars, function (data) {
            console.log('weather', data);
            console.log('description', data.current.weather[0].description);
            try {
                const forecast = data.daily;
                $.each(forecast, function (index) {
                        const description = this.weather[0].description;
                        const icon = this.weather[0].icon;
                        const iconId = this.weather[0].id;
                        const day = new Date(this.dt * 1000).getDay();
                        const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        const min = Math.round(this.temp.min);
                        const max = Math.round(this.temp.max);
                        $('#weather').append(
                            `<div class="card horizontal">
                                    <div class="card-image">
                                    <div class="row">
                                    <div class="col-4">
                                    <img  src="https://openweathermap.org/img/w/${icon}.png" alt="">
                                    </div>
                                    
                                    <div class="col-8 pt-3 left-align m-0">
                                    <p class="mb-0"><span >${min}&#176;</span>-<span>${max}&#176;</span></p>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="card-stacked">
                                       <div class="card-content m-0 p-0 pb-4">
                                          <h5>${dayArray[day]}</h5>
                                          <p>${description}</p>
                                       </div>
                                    </div>
                                </div>`
                        );
                        return forecast < 1;
                    }
                );
            } catch (err) {
                console.error(err.message);
                $('#city').text(err.message);
            }
        }).done(function () {
            // successCallback is over: show the weather forecast
            $('#weather').show();
        }).fail(function (jqxhr, textStatus, error) {
            // Something went wrong: successCallback and done() were not executed
            console.error(error);
            $('#city').text(error);
        }).always(function () {
            // After successCallback, done() or fail(): hide preloader
            $('.progress').hide();
        })
    };


    const _getCity = function () {
        const pars = {
            format: 'json',
            lat: myLocation.lat,
            lon: myLocation.lon
        };
        $.getJSON(openstreetUrl, pars, function (data) {
            console.log(data);
            const location = data.address.municipality || data.address.village || data.address.city_district || data.address.city || data.address.town || data.address.state;
            $('#city').html(location);
        });
    };


    return {
        loadingMsg: loadingMsg,     // public property
        init: init                  // public methode
    };
}();
