if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position_) {
        var LatLng = new google.maps.LatLng(position_.coords.latitude, position_.coords.longitude);
        var mapOptions = {
            center: LatLng,
            zoom: 15
        };
        var map = new google.maps.Map(document.getElementById("map-div"), mapOptions);
        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            title: "<div<b>Your location:</b><br />Latitude: " + position_.coords.latitude + "<br />Longitude: " + position_.coords.longitude
        });
    });
} else {
    console.log();("location is not supported");
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
