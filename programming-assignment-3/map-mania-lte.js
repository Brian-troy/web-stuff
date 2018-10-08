var gMap; 

function initApllication(){
    console.log('Map mania lte -starting!');
}


function SetHint(hint){}


google.maps.event.addListener(gMap, 'idle', function() {
    updateGame()
});

function updateGame(){
    console.log("updategame()");
}

function SetHint(hint){
    document.getElementById("hint-id").value = hint;
}

/// markers are going to appear using if statements when at zoom level 8 , using call backs for different ifs and adding to a global scorebaord*******************************************************
;

var favoritePlaces = [
    {content:'<strong>#1:Chicago, Illinois <strong>', coordinates:{lat:41.8781,lng:87.62981}, iconImagePath:"one.png"},
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



  var marker = new google.maps.Marker({position:{lat:45.3306,lng:-91.4918}, map:gMap});