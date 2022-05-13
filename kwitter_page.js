//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCoMcJ4oQH2v7qb038Ql7pYSox12DIz_uM",
      authDomain: "let-chat-web-app-f83b8.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-f83b8-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-f83b8",
      storageBucket: "let-chat-web-app-f83b8.appspot.com",
      messagingSenderId: "265027543151",
      appId: "1:265027543151:web:a93f876834b67aab7eed9a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
    
function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
