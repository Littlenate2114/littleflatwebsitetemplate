$(function() {
  $("#thep").hide();
  $("#fade").click(function(){
    $("#thep").toggle("800", function(){ //removing paragraph and at same time removing opacity
            opacity: '0'
        });
    });

      $(".footer").click(function() {
        if (window.confirm('would you like to be re-directed to wishingwelldevelopments.com'))
        {
            window.open("https://www.google.com");
        }
        else{}
      });

});
