var gMap;

var favoritePlaces = [
    {content:'<strong>#1:Chicago, Illinois <strong>', coordinates:{lat:41.8781,lng:-87.62981}, iconImagePath:"one.png"},
    {content:'<strong>#2:Rome, Italy<strong>', coordinates:{lat:41.9028,lng:12.4964}, iconImagePath:"two.png"},
    {content:'Dublin, Ireland', coordinates:{lat:53.3498,lng:6.2603}, iconImagePath:"flag.png"},
    {content:'Kerry, Ireland', coordinates:{lat:52.1545,lng:9.5669}, iconImagePath:"flag.png"},
    {content:'Toronto, Canada', coordinates:{lat:43.6532,lng:79.3832}, iconImagePath:"flag.png"},
    {content:'Puerto Plata, Dominican', coordinates:{lat:19.7808,lng:70.6871}, iconImagePath:"flag.png"},
    {content:'Westminster Abbey, England', coordinates:{lat:51.4993,lng:0.1273}, iconImagePath:"flag.png"},
    {content:'Cocoa Beach, Florida', coordinates:{lat:28.3200,lng:80.6076}, iconImagePath:"flag.png"},
    {content:'Tokyo, Japan', coordinates:{lat:35.6895,lng:139.6917}, iconImagePath:"flag.png"},
    {content:'Stockholm, Sweden', coordinates:{lat:59.3293,lng:18.0686}, iconImagePath:"flag.png"}
]; 

var currentPlaceIndex = 9;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 10;

function initApplication() {
    console.log('Map Mania Lite - Starting!');
}

map.getBounds().contains(loc)

var mapObject = new google.maps.Map(document.getElementById("map"), _mapOptions);

mapObject.getZoom();

function initMap(){
    var marker = new google.maps.Marker({position:{lat:41.8781,lng:-87.62981}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:41.9028,lng:12.4964}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:53.3498,lng:6.2603}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:52.1545,lng:9.5669}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:43.6532,lng:79.3832}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:19.7808,lng:70.6871}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:51.4993,lng:0.1273}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:28.3200,lng:80.6076}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:35.6895,lng:139.6917}, map:gMap});
    var marker = new google.maps.Marker({position:{lat:59.3293,lng:18.0686}, map:gMap});

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()

    SetHint("Hint 1");
    SetScore(score);
    });
}


function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    // Check if Canoe Bay, WI is in the currently displayed map
    if (gMap.getBounds().contains({lat:45.3306,lng:-91.4918})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function SetHint(hint) {
    document.getElementById("hint-id").value = hint;  
}

function SetScore() {
    document.getElementById("score-id").value = score; 
}