console.log("this is a sanity check");
var currentColor;

$(document).ready(function(){
  console.log("Let's get coding!")

  $( "td" ).mouseover(function() {
  	
  	// currentColor = document.getElementById("myColor").value;
  	currentColor = $("input").val();
  	// currentColor = $("#myColor").val();

  	$(this).css("background-color", currentColor);
  	
});

})

