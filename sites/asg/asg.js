function changevisible(name) {
    var x = document.getElementById(name);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function activateStyle(name) {
    var element = document.getElementById(name);
    element.classList.toggle("active");
  }

//   function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight()-vh(10);

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }
function clickCheck(name) {
    let item = document.getElementById(name); // what we want to scroll to
let count = item.offsetTop // xx = any extra distance from top ex. 60
let wrapper = document.getElementById('textcontainer');
wrapper.scrollTo({top: count, left: 0, behavior: 'smooth'})
    // document.getElementById(name).scrollIntoView({ behavior: 'smooth'});
    // window.scrollBy(0, -vh(10));
}
$(document).ready(function(){
    $(".text-wrong").each(function(index, value) {
        if ($(this).isInViewport()){
            // console.log("change active");
        //    activateStyle($(this).attr("data-id"));
        
        $(this).addClass("active");
           $("#"+$(this).attr("data-id")).addClass("active");
        } 
        else {
            
           $("#"+$(this).attr("data-id")).removeClass("active"); 
            $(this).removeClass("active");
        }
        
    });
})
$("*").scroll(function() {
    $(".text-wrong").each(function(index, value) {
        if ($(this).isInViewport()){
            // console.log("change active");
        //    activateStyle($(this).attr("data-id"));
        
        $(this).addClass("active");
           $("#"+$(this).attr("data-id")).addClass("active");
        } 
        else {
            
           $("#"+$(this).attr("data-id")).removeClass("active"); 
            $(this).removeClass("active");
        }
        
    });

});
$(function () {
    $('[data-toggle="popover"]').popover({
        trigger : 'click',
        html: true, 
        template: '<div class="popover"><div class="arrow"></div>'+
                  '<h3 class="popover-title"></h3><div class="popover-content">'+
                  '</div><div class="popover-footer"><button type="button" class="btn btn-primary popover-submit">'+
                  '<i class="icon-ok icon-white"></i></button>&nbsp;'+
                  '<button type="button" class="btn btn-default popover-cancel">'+
                  '<i class="icon-remove"></i></button></div></div>' 
    })
  });

  $(".words").hover(function(){
    $(this).addClass("active-hover");
    $("#"+$(this).attr("data-id")).addClass("active-hover");
    }, function(){
    $(this).removeClass("active-hover");
    
    $("#"+$(this).attr("data-id")).removeClass("active-hover");
  });


  $('.check-wrong').click(function(){
      clickCheck($(this).attr("data-id"));
      let name = "#hidden-" + $(this).attr("id");
      console.log(name);
      $('.hidden:not('+name+')').css('display', 'none');
    if ($(name).css('display') == 'block'){
        $(name).css('display', 'none');
    }else {
        $(name).css('display', 'block');
    }
  });