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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}