//genearte the picture basedon the users click
//testing

$(".headshot").on("click", function(e){
    if(e.currentTarget.alt === "Brett") {
        $(".showerPic").empty();
        var pic = $("<img>");
        pic.attr("src", "Brett.png");
        pic.addClass("showerPic mainPic");
        $(".showerPic").append(pic);
    }
    else if (e.currentTarget.alt === "Daniel") {
        $(".showerPic").empty();
        var pic = $("<img>");
        pic.attr("src", "Daniel.png");
        pic.addClass("showerPic mainPic");
        $(".showerPic").append(pic);
    }
    else if(e.currentTarget.alt === "Shawn") {
        $(".showerPic").empty();
        var pic = $("<img>");
        pic.attr("src", "Shawn.png");
        pic.addClass("showerPic mainPic");
        $(".showerPic").append(pic);
    }
});

$(".showerPic").on("click", function(){
    $(".mainPic").remove();
})