<<<<<<< HEAD
$(document).ready(function(){

  var $colorPicker = $("input"),
      activeColor = $colorPicker.val();
  
  $colorPicker.on("change", function(){
    activeColor = $colorPicker.val();
  })

  $("td").on("mouseenter", function(){
    $(this).css("background-color", activeColor);
  })
})
=======
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

>>>>>>> origin/gh-pages
