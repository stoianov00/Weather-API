$(document).ready(function (){
    $("#submitWeather").click(function(){
        let city = $("#city").val();

        if (city != ""){
            // AJAX method
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=9858c5721b7ffe8c186483a0877a088e",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    let widget = show(data);
                    $("#show").html(widget);
                    $("#city").val("");
                }
                
                // TODO: function to success
            })

        }

        else{
            $("#error").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");

        }
		
    });

function show(data){
    let weatherData = "<h2 style='font-size:40px; font-weight: bold;'>Current Weather for " + data.name + ", " + data.sys.country  +"</h2>" +
           "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" + 
           "<h3><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> "+ data.weather[0].description +"</h3>" +
           "<h3><strong>Temperature</strong>: "+ data.main.temp +"&deg;C</h3>" +
           "<h3><strong>Pressure</strong>: "+ data.main.pressure +" hPa</h3>" +
           "<h3><strong>Humidity</strong>: "+ data.main.humidity +"%</h3>" +
           "<h3><strong>Min. Temperature</strong>: "+ data.main.temp_min +"&deg;C</h3>" +
           "<h3><strong>Max. Temperature</strong>: "+ data.main.temp_max +"&deg;C</h3>" +
           "<h3><strong>Wind-Direction</strong>: "+ data.wind.speed +" m/s</h3>" +
           "<h3><strong>Wind-Direction</strong>: "+ data.wind.deg +"&deg;</h3>";

    return weatherData;

}








})