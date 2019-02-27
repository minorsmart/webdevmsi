// Initialize Firebase
var config = {
apiKey: "AIzaSyAehAyrs62Vpdjr8fdNa8qappI821bqu-A",
authDomain: "smart-start-10a9a.firebaseapp.com",
databaseURL: "https://smart-start-10a9a.firebaseio.com",
projectId: "smart-start-10a9a",
storageBucket: "smart-start-10a9a.appspot.com",
messagingSenderId: "397921623434"
};
firebase.initializeApp(config);

var db = firebase.firestore();

var button = document.getElementById("submitMessage");

writeDB = (val1, val2) => {
    console.log("Button clicked and received", val1, val2)
    db.collection("users").add({
        email: val1,
        message: val2
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

button.onclick = () => {
    var address = document.getElementById("inputEmail").value
    var body = document.getElementById("textMessage").value
    writeDB(address, body)
    document.getElementById("contactForm").reset();
}