if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p) {
        var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        var mapOptions = {
            center: LatLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
        });
        google.maps.event.addListener(marker, "click", function (e) {
            var infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(marker.title);
            infoWindow.open(map, marker);
        });
    });
} else {
    alert('Geo Location feature is not supported in this browser.');
}
// ----------------------------------------------------------------------------------
function getUsers(){
    users = localStorage.getItem("users");
    if(!users)
        users = [];
    else
        users = JSON.parse(users);
    return users;
}
function saveUsers(users){
    localStorage.setItem("users" ,JSON.stringify(users));
}
function isUserExist(newUser, users){
    let userExists = false;
    users.forEach(user => {
        if(user.email == newUser.email)
            userExists = true;
    });
    return userExists;
}
function register(){
    let newUser = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }
    let users = getUsers();
    if(isUserExist(newUser, users))
        console.log("This email already exists.");
    else
        users.push(newUser);
    saveUsers(users);
}
document.getElementById("register-btn").addEventListener('click', (event)=>{
    event.preventDefault();
    register();
});
// -------------------------------------------------------------------------------------
var canvas = document.getElementById("avatar-canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(145, 40, 40, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(145, 200, 120, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.stroke();//stroke width
