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

  var number = 900;

  database.ref().on("value", function(snapshot) {
    if(snapshot.val().personShowering === "") {
        var fbPerson = "open";
    } else {
        var fbPerson = snapshot.val().personShowering;
    }

    $(".showerPic").empty();
    var pic = $("<img>");
    pic.attr("src", "./pics/" + fbPerson + ".png");

    pic.addClass("showerPic mainPic");
    $(".showerPic").append(pic);

    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

function setFirebaseName(a) {
    database.ref().set({
    personShowering: a
    });
};

$(".headshot").on("click", function(e){
    if(e.currentTarget.alt === "Brett") {
        let personShowering = e.currentTarget.alt;
        setFirebaseName(personShowering);
        $(".showerPic").empty();
        var pic = $("<img>");
        pic.attr("src", "./pics/Brett.png");
        pic.addClass("showerPic mainPic");
        $(".showerPic").append(pic);
        showerTimeUp();
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
    database.ref().set({
        personShowering: ""
        });
    });

function decrement() {
    number--
    if(number === 0){
        database.ref().set({
        personShowering: ""
        });
    }
}

function showerTimeUp() {
    intervalId = setInterval(decrement, 1000);
  }