function getUsers(){return users=localStorage.getItem("users"),users?users=JSON.parse(users):users=[],users}function saveUsers(e){localStorage.setItem("users",JSON.stringify(e))}function isUserExist(e,t){let s=!1;return t.forEach((t=>{t.email==e.email&&(s=!0)})),s}function register(){let e={email:document.getElementById("email").value,password:document.getElementById("password").value},t=getUsers();isUserExist(e,t)?console.log("This email already exists."):t.push(e),saveUsers(t)}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t=new google.maps.LatLng(e.coords.latitude,e.coords.longitude),s={center:t,zoom:15},o=new google.maps.Map(document.getElementById("map-div"),s);new google.maps.Marker({position:t,map:o,title:"<div<b>Your location:</b><br />Latitude: "+e.coords.latitude+"<br />Longitude: "+e.coords.longitude})})):console.log(),document.getElementById("register-btn").addEventListener("click",(e=>{e.preventDefault(),register()}));var canvas=document.getElementById("avatar-canvas"),ctx=canvas.getContext("2d");ctx.beginPath(),ctx.arc(145,40,40,0,2*Math.PI),ctx.lineWidth=5,ctx.stroke(),ctx.beginPath(),ctx.arc(145,200,120,0,2*Math.PI),ctx.lineWidth=5,ctx.stroke();