// Initialize Firebase
var config = {
apiKey: "<YOUR KEY HERE>",
authDomain: "smart-start-10a9a.firebaseapp.com",
databaseURL: "https://smart-start-10a9a.firebaseio.com",
projectId: "smart-start-10a9a",
storageBucket: "smart-start-10a9a.appspot.com",
messagingSenderId: "397921623434"
};
firebase.initializeApp(config);

var db = firebase.firestore();

// Select buttons
var postbtn = document.getElementById("submitMessage");
var getbtn = document.getElementById("getData");

// Function for writing to DB
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

// Function for reading from DB
readDB = () => {
    console.log("Data button pushed")
    db.collection("users")
    .get()
    .then( (querySnapshot) => {
        querySnapshot.forEach( (doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

// Prevent page scroll after form submit
postbtn.addEventListener("click", function(event){
    event.preventDefault()
  });
getbtn.addEventListener("click", function(event){
    event.preventDefault()
  });

// Send and retrieve data on button clicks
postbtn.onclick = () => {
    var address = document.getElementById("inputEmail").value
    var body = document.getElementById("textMessage").value
    writeDB(address, body)
    document.getElementById("contactForm").reset();
}

getbtn.onclick = () => readDB()
