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

// var myDefaultWhiteList = $.fn.popover.Constructor.DEFAULTS.whiteList

// // To allow table elements
// myDefaultWhiteList.img = ['data-word']

// // To allow td elements and data-option attributes on td elements
// myDefaultWhiteList.div = ['data-colors']

$(function () {
    $('.text-wrong').popover({
      trigger: 'click',
        sanitize: false,
        html: true, 
        template: '<div class="popover"><div class="arrow"></div>'+
                  '<div class="popover-body">'+
                  '</div><div class="popover-footer">'+
                  '<span class="popover-cancel">X'+
                  ' </span><span class="popover-check">✓'+
                  '</span></div></div>' 
    })
  });
  $('.words').on('click', function (e) {
    $('.words').not(this).popover('hide');
    $('.words').on('shown.bs.popover', function () {
      $(this).addClass('enabled');   
    $('.popover').addClass($(this).attr("data-colors"));
    })

});
$('.words').on('hidden.bs.popover', function () {
  $(this).removeClass('enabled');
})
$('*').not('.words .text-wrong del b').on('click', function (e) {
  console.log($(this));
  console.log($(this).hasClass('words'));
  if(!$(this).hasClass('.words .popover') && !$(this).is('del b')){
    $('.words').popover('hide');
  }
  e.stopPropagation();
})
// $('*').not(".popover .text-wrong").click(function()
// {  $('[data-toggle="popover"]').popover('hide');
// });


  $(".words").hover(function(){
    $(this).addClass("active-hover");
    $("#"+$(this).attr("data-id")).addClass("active-hover");
    }, function(){
    $(this).removeClass("active-hover");
    
    $("#"+$(this).attr("data-id")).removeClass("active-hover");
  });

  $("img").click(function(e) {
    if($(this).attr("data-word")) {
      speak($(this).attr("data-word"));
    }
    e.stopPropagation();
 });

  $('.check-wrong').click(function(){
    if($(this).is( "img" )){
      
    } else {
      clickCheck($(this).attr("data-id"));
      let name = "#hidden-" + $(this).attr("id");
      $('.hidden:not('+name+')').css('display', 'none');
      $('.check-wrong').removeClass('show');
    if ($(name).css('display') == 'block'){
      $(this).removeClass('show');
        $(name).css('display', 'none');
    }else {
      $(this).addClass('show');
        $(name).css('display', 'block');
    }
    }
  });

  var speech= new SpeechSynthesisUtterance();
  var myLang = speech.lang;
  speech.lang = 'en-US';
  function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
      return;
    }
  
    var voices = speechSynthesis.getVoices();
//   console.log(voices);
    // speech.voice = voices[1];
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
    //   document.getElementById("voiceSelect").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

function speak(word) {
    var voice = ["Microsoft Matthew - English (United States)"];
    const foundVoice = speechSynthesis.getVoices().find(({ name }) => voice.includes(name));
    // console.log('speaking');

    if (foundVoice) speech.voice = foundVoice;
    var text = word;

    speech.text = text;
    // console.log(speech.text);
    window.speechSynthesis.speak(speech);
  }