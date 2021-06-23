  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCUD_SSvazS0SVuGwgmeImNLOd_zqtxhKs",
    authDomain: "kwitter-kp.firebaseapp.com",
    databaseURL: "https://kwitter-kp-default-rtdb.firebaseio.com",
    projectId: "kwitter-kp",
    storageBucket: "kwitter-kp.appspot.com",
    messagingSenderId: "420653790195",
    appId: "1:420653790195:web:155de8728976893ff01886",
    measurementId: "G-5NYMEPY5FV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id='+Room_name+' onclick='redrectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value ;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redrectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html";
}


