(function () {

    var icons = {
        "clear-day":    'B',
        "clear-night":  'C',
        "rain":     'R',
        "snow":     'G',
        "sleet":    'X',
        "wind":     'S',
        "fog":      'N',
        'cloudy':   'Y',
        'partly-cloudy-day': 'H',
        'partly-cloudy-night': 'I'
    };

    var cities = {
        "sumy": {'coords':    {'latitude':  50.55,  'longitude':    34.45}},
        "kiev": {'coords':    {'latitude': 	48.18,  'longitude':    25.56}},
        "kharkov": {'coords':    {'latitude': 	50.00,  'longitude':    36.15}},
        "poltava": {'coords':    {'latitude': 	49.35,  'longitude':    34.34}},
    };

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

    function loadCity(city){

        $('#location').html(city);
        loadWeather(city.toLowerCase());
    }

    $(document).ready(function () {

        loadCity('Sumy');

        $("a.city").bind('click', function () {
            var city = $(this).html();
            loadCity(city);
        });
    });


})();

