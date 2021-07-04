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


  // Julia's part


  var currentel = $("#outer");

 $( function() {
    $( "*" ).not('.puzzle').draggable(); });
    // $("*").not('.puzzle, #slider, #slider2').mousedown(function(){
    //   currentel = $(this);
    //   console.log(currentel);

    // });

var slider = document.getElementById("slider");
// Update the current slider value (each time you drag the slider handle)

slider.oninput = function() {
    var zoom = this.value/100;
    $('#outer').css({"transform-origin": "center top", "transform": "scale("+zoom+")"});
}

// var slider2 = document.getElementById("slider2");

// slider2.oninput = function() {
//   var zoom = this.value/100;
//  currentel.css("transform", "scale("+zoom+")");
// }
$('#shuffle').click(function(){
    //  $('#outer').css("transform-origin", "center");
  $( "*:not('.puzzle, #puzzlenav, .w3-container, .w3-section, body, html, #outer')").each(function(){
   
    // this.style.position = "absolute";
    this.style.top = Math.random()*document.scrollHeight-$(this).height()+"px";
    this.style.left = Math.random()*window.outerWidth-$(this).width()+"px";
  })
})