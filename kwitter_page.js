//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
like=message_data['like']
message=message_data['message'] 
name_with_tag="<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+ message + "</h4>";
like_button="<button class='btn btn warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:" +like+"<span><button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function Logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter_login.html";
}
function Send()
{
      msg= document.getElementById("Sender").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("Sender").value="";
}
function updateLike(message_id)
{
      console.log("clicked on the like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}