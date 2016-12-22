console.log("jQuery_Functions.js has loaded properly");

$( document ).ready(function() {
    console.log( "ready!" );

    $("#clickme").click(function() {
      console.log("We executed this guy on 12/30/06.");
      // alert("Handler for .click() called.");
    });

    $("#hideorshowsaddam").click(function() {
      $("#gaddafi").toggle();
      console.log("This guy was killed by his own people on 10/20/11.")
      // alert("Handler for .toggle() called.");
    });

    $("#hide").click(function() {
      $("#merica").hide();
      console.log("You don't want to cheer?");
      // alert("Handler for .hide() called.");
    });

    $("#show").click(function() {
      $("#merica").show();
      console.log("You want to cheer?")
      // alert("Handler for .show() called.");
    });

    $("#binladen").hide();
    $("#slidedown").click(function() {
      $("#binladen").slideDown( "slow");
      console.log("binladen sliding down");
      // alert("Handler for .slidedown() called.");
    });

    $("#slideup").click(function() {
      $("#gaddafi").slideUp("slow");
      console.log("gaddafi sliding up");
      // alert("Handler for .slideUp() called.");
    });

    $("#saddam").hide();
    $("#toggleslide").click(function(){
      $("#saddam").slideToggle("slow");
      console.log("saddam getting slid up or down");
      // alert("Handler for .slideToggle() called.");
    });

    $("#baghdad").hide();
    $("#fade_in").click(function(){
      $("#baghdad").fadeIn();
      console.log("baghdad getting faded in");
    });

    $("#fade_out").click(function(){
        $("#cave").fadeOut();
      console.log("cave fading out");
    });

    $("#add_class").click(function(){
      $(".wrapper").addClass("newbord")
      console.log("adding a new class -- border");
    });

    $("#before").click(function(){
      $("#merica").before("BOMBS");
      console.log("adding before");
    });

    $("#after").click(function(){
      $("#merica").after("AWAY!");
      console.log("adding after");
    });

    $("#attr").click(function(){
      $("#merica").attr("font-size");
      console.log("used .attr to find the attribute");
    });

    $("#val").click(function(){
      $("#merica").val();
      console.log("used .val to get the val");
    });

    $("#text").click(function(){
      $(".wrapper").text();
      console.log("printed out all the text contained within .wrapper");
    });

    $("#data").click(function(){
      $(".wrapper").data()
      console.log("printing out the data from .wrapper");
    });
});
