var firebaseConfig = {
      apiKey: "AIzaSyDMg_T5y4ge7qukqUJjRBZ9v-epyuwySaQ",
      authDomain: "kwitter-b6a77.firebaseapp.com",
      databaseURL: "https://kwitter-b6a77-default-rtdb.firebaseio.com",
      projectId: "kwitter-b6a77",
      storageBucket: "kwitter-b6a77.appspot.com",
      messagingSenderId: "454000615713",
      appId: "1:454000615713:web:c670755f1f08a2e3d5de60"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
