var config = {
    apiKey: "AIzaSyBIXkdszLkvjfd6FWnUQVYkU5aS9Ek4Ri8",
    authDomain: "shower-thyme.firebaseapp.com",
    databaseURL: "https://shower-thyme.firebaseio.com",
    projectId: "shower-thyme",
    storageBucket: "shower-thyme.appspot.com",
    messagingSenderId: "282570418702"
  };

  firebase.initializeApp(config);

  var database = firebase.database();


//if the JSON name changes then display a different picture
//Set the default value of "personShowering" to "nothing"

//on click of a picture, update firebase and pull that down for the picture



  database.ref().on("value", function(snapshot) {

    let fbPerson = snapshot.val().personShowering;
    $(".showerPic").empty();
    var pic = $("<img>");
    // pic.attr("src", "./pics/Brett.png");
    pic.attr("src", "./pics/" + fbPerson + ".png");

    pic.addClass("showerPic mainPic");
    $(".showerPic").append(pic);

    // Change the HTML
    // $("#displayed-data").text(snapshot.val().name + " | " + snapshot.val().age + " | " + snapshot.val().phone);

    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });



function setFirebaseName(a) {
    database.ref().set({
    personShowering: a
    });
}


$(".headshot").on("click", function(e){
    if(e.currentTarget.alt === "Brett") {
        let personShowering = e.currentTarget.alt;
        setFirebaseName(personShowering);
        $(".showerPic").empty();
        var pic = $("<img>");
        pic.attr("src", "./pics/Brett.png");
        pic.addClass("showerPic mainPic");
        $(".showerPic").append(pic);
    }
    else if (e.currentTarget.alt === "Daniel") {
        let personShowering = e.currentTarget.alt;
        setFirebaseName(personShowering);
        $(".showerPic").empty();
        var pic = $("<img>");
        pic.attr("src", "./pics/Daniel.png");
        pic.addClass("showerPic mainPic");
        $(".showerPic").append(pic);
    }
    else if(e.currentTarget.alt === "Shawn") {
        let personShowering = e.currentTarget.alt;
        setFirebaseName(personShowering);
        $(".showerPic").empty();
        var pic = $("<img>");
        pic.attr("src", "./pics/Shawn.png");
        pic.addClass("showerPic mainPic");
        $(".showerPic").append(pic);
    }
});

$(".showerPic").on("click", function(){
    $(".mainPic").remove();
})