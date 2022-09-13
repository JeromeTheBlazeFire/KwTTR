// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD8_1Oz6TUNANQPXx_mFFSud94ik5UwjPg",
      authDomain: "kwittr-b8328.firebaseapp.com",
      databaseURL: "https://kwittr-b8328-default-rtdb.firebaseio.com",
      projectId: "kwittr-b8328",
      storageBucket: "kwittr-b8328.appspot.com",
      messagingSenderId: "2185491142",
      appId: "1:2185491142:web:44838a0737151979551dc7"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row="<div class='room_name' id=" +Room_names+"onclick='redirectToRoomName(this.id)' >#"+Roomm_names  +"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function Logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter_login.html";
}