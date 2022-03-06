//$("h1").css("color","blue");
//OR
// jQuery("h1").css("color","red");

$("h1").addClass("big-title margin-50"); //two css implemented in one line //addClass and removeClass


//manupulating text
$("h1").text("Bye")  // this will change text of h1 which is "Hello" to "Bye"

$("button").html("<em>Hey<em>") // this include html tag inside button <em> to italic and <p> for para


//manupulating attributes
$("a").attr("href", "https://www.yahoo.com");  // ("getter", "setter")


//adding eventListner to jquery
$("h1").click(function(){
    //thing happing when click on h1
    $("h1").css("color","purple");
});

//adding eventlistner to all buttons we have to iterate to loop like below
// for(var i=0; i<3; i++){
//   document.querySelectorAll("button")[i].addEventListner("click", function(){
//     document.querySelectorAll("h1").style.color="purple";
//   });
// }

//    VS

$("button").click(function(){
  $("h1").css("color","purple")
});


$("input").keypress(function(event){
  $("textarea").text(event.key);
});

$("h1").on("mouseover", function(){
  $("h1").css("color","red");
});

// adding and remvoing html elements
//before after prepend append

$("h1").before("<button>New</button>");


//animating
$("button").on("click",function(){
  //$("h1").toggle();
  //("h1").fadeIn();
  //$("h1").fadeOut();
  $("h1").fadeToggle();

  //slideUp slideDown slideToggle
});


//creating our own animation rule

$("button").on("click", function(){
  //$("h1").animate({opacity: 0.5}); //works only with numeric values only.
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
