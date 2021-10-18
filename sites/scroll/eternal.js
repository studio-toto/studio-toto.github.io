function scrollToHalf() {
    document.body.scrollTo(0, document.body.scrollHeight/2);
    console.log(document.body.scrollHeight/2);

}
var scrollPos = 0;
  // ## function instantiation
//   window.addEventListener('scroll', function(){
//     // detects new state and compares it with the new one
//     if ((document.body.getBoundingClientRect()).top > scrollPos) {
//         $('.scrollimage').css('animation-direction', 'reverse');
//         console.log("up");
//     }
//     else {
//         $('.scrollimage').css('animation-direction', 'normal');
//     }
//         //   document.getElementById('info-box').setAttribute('data-scroll-direction', 'DOWN');
//       // saves the new position for iteration.
//       scrollPos = (document.body.getBoundingClientRect()).top;
//   });

// var offsetStart = 0;
// var offsetEnd = 0;

// divscroll.addEventListener('scroll', () => {
//   document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
// }, false);

// Add loading function as circle is currently empty
// For individual circles different starting time
//const anim;

$(window).ready(function() {
    
scrollToHalf();
    // const circle = document.getElementsByClassName("scrollimage");
const docHeight = document.body.offsetHeight;
// var container = circle[0].parentNode.getBoundingClientRect();
// var bound = circle[0].getBoundingClientRect();

// const keyframes = [{left: 0 +"px", top: 0+"px"}, {left: container.right-circle[0].clientWidth + "px",  top: 0 +"px"}, {left:container.right-circle[0].clientWidth  + "px", top: container.bottom-circle[0].clientHeight + "px"}, {left: 0 + "px", top: container.bottom-circle[0].clientHeight + "px"}, {left: 0 +"px", top: 0 +"px"}];
// console.log(container.right-circle[0].clientWidth*2 + "px");
// console.log(bound.width);
// console.log(window.innerWidth);
// const keyframesRight = keyframes;
 const anim = [];
// console.log($(".scrollimage"));
$(".scrollimage").each((index, element) => {
    // console.log(element);
    let container = element.parentNode.getBoundingClientRect();
let bound = element.getBoundingClientRect();
// console.log(container.width-bound.width + "px");
// console.log(bound.width);
// console.log(window.innerWidth);

    let keyframes = [{left: 0 +"px", top: 0+"px"}, {left: 100-100*bound.width/container.width + "%",  top: 0 +"px"}, {left:100-100*bound.width/container.width + "%",  top: 100-bound.height/container.height*100 + "%"}, {left: 0 + "px", top: 100-bound.height/container.height*100 + "%"}, {left: 0 +"px", top: 0 +"px"}];
//console.log(keyframes);
  anim.push(element.animate(keyframes, {
    duration: 10,
    iterations: Infinity,
   iterationStart: index/4,
    fill: "both"
  }));
  // let width = point.offsetWidth;
  // let scale = width / initialPointWidth;
  // let x = point.offsetLeft;
  // let y = getTop(point);

  // keyframes.push({
  //   transform: `matrix(${scale}, 0, 0, ${scale}, ${x}, ${y})`
  // });
  return anim;
});

// var anim = circle[0].animate(keyframes, {
//   duration: 1,
//   iterations: Infinity,
//   iterationStart: 0.1,
//   fill: "both"
// });
// console.log(anim);
anim.forEach((animation) => {animation.pause();})
// anim.pause();
// Utils
function getTop(el) {
    return el.offsetTop + el.parentNode.offsetTop;
  }
  // reset function when complete
  function calcProgress() {
    return window.pageYOffset / (docHeight - window.innerHeight)*10;
  }
  
  // Listeners
  window.addEventListener("scroll", function(e) {
   
  console.log(anim);
    // anim.currentTime = calcProgress();
  });
  
  window.addEventListener("load", function(e) {
//    anim.currentTime = calcProgress();
  anim.forEach((animation) => {animation.currentTime = calcProgress();});
  });
  
var isScrolling;

$('body').bind('wheel', function (event) {

    $('.scrollimage').css('animation-play-state', 'running');
    // scrollFunction();
    // Clear our timeout throughout the scroll          https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

        // Run the callback
        $('.scrollimage').css('animation-play-state', 'paused');

    }, 66);
 
    // console.log(anim);
    anim.forEach((animation) => {animation.currentTime = calcProgress();});
});
   });



