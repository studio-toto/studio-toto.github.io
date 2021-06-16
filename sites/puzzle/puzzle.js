// From W3school
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }

 $( function() {
    $( "*" ).draggable(); });

var slider = document.getElementById("slider");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
   var view =  document.body;
    var zoom = this.value/100;
    $("#outer").css("transform", "scale("+zoom+")");
    //view.style.zoom = zoom;
//   output.innerHTML = this.value;
}