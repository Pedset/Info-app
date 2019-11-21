//AJAS
// API
var mycities =["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
var myObj = {};
var city = "";
var cityIp;
var lat1 = 1;
var lon1 = 1;
var mapGoogle;
const proxy = "https://cors-anywhere.herokuapp.com/";

$(document).ready(function(){

    var req0 = function(){
        
        $.getJSON("http://localhost:3000/posts", function(json) {
        console.log(json); // this will show the info it in firebug console
        myObj.fromCountry = json[0].country;
        myObj.event = json[0].event;
        myObj.from = json[0].from;
        myObj.ourTime = json[0].time;
        });
        }
        req0();

    $("#input1").keyup(function(event1){
        if(event1.keyCode == 13){
            $("#btn").click();
        }         
    });


    $("#input1").autocomplete({
        source: mycities
    },{
        autofocus: true,
    });


    var req1 = function(){
        $.ajax({
            type: "GET",
            async: false,
            url: "http://ip-api.com/json/" + cityIp + "?fields=53247",
            success: function(data){
                lat1 = data.lat;
                lon1 = data.lon;
                myObj.city = data.city;
                myObj.regionName = data.regionName;
                myObj.timezone = data.timezone;
                console.log(data);
            }
        });
    }

        var req2 = function(){
            $.ajax({
                type: "GET",
                async: false,
                url: proxy + "https://api.darksky.net/forecast/df9589f13905bde2f60be7d1952c77e6/" + lat1 + "," + lon1 ,
                success: function(data0){
                    
                    console.log(data0);
                    myObj.temperature = data0.currently.temperature;
                    myObj.humidity = data0.currently.humidity;
                    myObj.summary = data0.currently.summary;
                    myObj.windSpeed = data0.currently.windSpeed;
                    myObj.minutelySummary = data0.minutely.summary;
                    myObj.hourlySummary = data0.hourly.summary;
                    myObj.dailySummary = data0.daily.summary;

                }
            });
        };

           var loadingFunc = function(){

                document.getElementById("img1").src = "pic/loading.gif";
                document.getElementById("imgc").style.display = "block";

                setTimeout(function() {
                    $('#imgc').fadeOut('fast');
                }, 14500);
                
           };

           var loadingError = function(){

            document.getElementById("img1").src = "pic/loadingError.gif";
            document.getElementById("imgc").style.display = "block";
        
            setTimeout(function() {
             document.getElementById("imgc").style.display = "none";
            }, 5660);
           };

           var createMap = function(){
            mapGoogle = '<iframe src="https://maps.google.com/maps?q=' + lat1 + ',' + lon1 + '&z=11&output=embed&iwloc=0" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
            $("#mapGoogle").append(mapGoogle);

           };

           var createInfo = function(){



                $("#info").append('<h3>Searched City: ' + myObj.city + ', ' + myObj.regionName + '</h3> <h1>' + myObj.temperature + ' ºF</h1> <h4> Humidity: ' + myObj.humidity + '</h4><h4> WindSpeed: ' + myObj.windSpeed + ' mph</h4> <h5> Currently ' + myObj.summary + ' It is going to be ' + myObj.minutelySummary + ' </h5> <h6> ' + myObj.hourlySummary + ' ' + myObj.dailySummary + ' </h6> <h6> Time zone: ' + myObj.timezone + ' </h6>');
                $("#lastInfo").append('<p> You are in ' + myObj.fromCountry + ' , in a ' + myObj.from + ' during a ' + myObj.event + ' and the time is: ' + myObj.ourTime + ' </p>');

           };



            var task = function(){
           
            loadingFunc();
            req1();
            req2();
            createMap();
            createInfo();
             };

        
        $('#btn').click(function(){

            if ($("#input1").val() !== ''){
                
                city = $("#input1").val();

                $("#input1").val("");
                $("#mapGoogle").html("");
                $("#info").html("");
                $("#lastInfo").html("");
                $("#idc123").html("");



                switch (city){
                    case "New York": {
                        cityIp = "72.229.28.185";
                        task();
                        break;
                    };
                    case "Los Angeles": {
                        cityIp = "104.148.105.5";
                        task();
                        break;
                    };
                    case "El Paso": {
                        cityIp = "24.28.170.150";
                        task();
                        break;
                    };
                    case "Phoenix": {
                        cityIp = "148.167.2.30";
                        task();
                        break;
                    };
                    default: {
                        loadingError();
                        $("#idc123").text("Sorry, We couldn't retrieve data from the server.");
                    };
                }

            }
            else{
                $("#input1").val("");
                $("#mapGoogle").html("");
                $("#info").html("");
                $("#lastInfo").html("");
                $("#idc123").html("");
                $("#idc123").text("Well, you need to type in something...");
            }
        });


});