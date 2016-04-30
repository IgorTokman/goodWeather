(function () {

    function loadWeather(city) {

        var latitude = cities[city]['coords']['latitude'];
        var longitude = cities[city]['coords']['longitude'];

        var forecastURL = "https://api.forecast.io/forecast/479687434865efa533338ce2376b8153/" + latitude + "," + longitude;

        $.ajax({
            url: forecastURL,
            jsonpCallback: 'jsonCallback',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function (json) {
                var temp = (json.currently.temperature - 32)*(5/9);
                $('#current_temp').html(Math.round(temp) + '&#176;C');
                $('#current_summary').html(json.currently.summary);
                $('#current_temp').attr('data-icon', icons[json.currently.icon]);


            },
            error: function (json) {

            }
        });
    }

    $(document).ready(function () {

        loadWeather('sumy');
    });


})();

