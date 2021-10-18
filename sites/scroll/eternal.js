function scrollToHalf() {
    document.body.scrollTo(0, document.body.scrollHeight / 2);
}
var scrollPos = 0;



$(window).ready(function () {
    history.scrollRestoration = "manual";
    window.onload = scrollToHalf;
    const docHeight = document.body.offsetHeight;
 
    const anim = [];

    function changeToOrdered() {
        anim.length = 0;
        $(".scrollimage").each((index, element) => {
            let container = element.parentNode.getBoundingClientRect();
            let bound = element.getBoundingClientRect();
            let keyframes = [{
                left: 0 + "px",
                top: 0 + "px"
            }, {
                left: 100 - 100 * bound.width / container.width + "%",
                top: 0 + "px"
            }, {
                left: 100 - 100 * bound.width / container.width + "%",
                top: 100 - bound.height / container.height * 100 + "%"
            }, {
                left: 0 + "px",
                top: 100 - bound.height / container.height * 100 + "%"
            }, {
                left: 0 + "px",
                top: 0 + "px"
            }];
            anim.push(element.animate(keyframes, {
                duration: 10,
                iterations: Infinity,
                iterationStart: index / element.parentNode.childElementCount,
                fill: "both"
            }));

            return anim;
        });

        anim.forEach((animation) => {
            animation.pause();
        })
    }
    changeToOrdered();

    anim.forEach((animation) => {
        animation.pause();
    })
    // anim.pause();
    // Utils
    function getTop(el) {
        return el.offsetTop + el.parentNode.offsetTop;
    }
    // reset function when complete
    function calcProgress() {
        return window.pageYOffset / (docHeight - window.innerHeight) * 10;
    }

    // Listeners
    window.addEventListener("scroll", function (e) {

        // anim.currentTime = calcProgress();
    });

    window.addEventListener("load", function (e) {
        //    anim.currentTime = calcProgress();
        anim.forEach((animation) => {
            animation.currentTime = calcProgress();
        });
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
        anim.forEach((animation) => {
            animation.currentTime = calcProgress();
        });
    });

    var el = document.getElementById("random");
    if (el.addEventListener) {
        el.addEventListener("click", changeToRandom, false);
    }
    var el2 = document.getElementById("ordered");
    if (el2.addEventListener) {
        el2.addEventListener("click", changeToOrdered, false);
    }
    document.getElementById("more").addEventListener("click", addMore, false);

    function addMore() {
        var newimg = document.createElement('img');      
        newimg.setAttribute('class', 'scrollimage');
        if (Math.random()<0.25) {
            newimg.src = "media/coin1.png";
            document.getElementById('wrapper3').appendChild(newimg);
        }
        else if (Math.random()<0.5) {
            newimg.src = "media/coin2.png";
            document.getElementById('wrapper2').appendChild(newimg);
        }
        else if (Math.random()<0.75){
            newimg.src = "media/coin5.png";   
            document.getElementById('wrapper1').appendChild(newimg);
        }
        else {
            if (Math.random()<0.33) {
                newimg.src = "media/coin5.png";   
            } else if (Math.random()<0.66) {
                newimg.src = "media/coin2.png";   
            } else {
             newimg.src = "media/coin5.png";   }
             document.getElementById('wrapper4').appendChild(newimg);
        }
        changeToOrdered();
        
    };

    function changeToRandom() {
        console.log("constantly fired");
        anim.length = 0;
        $(".scrollimage").each((index, element) => {
            let container = element.parentNode.getBoundingClientRect();
            let bound = element.getBoundingClientRect();
            let keyframes = [{
                left: 0 + "px",
                top: 0 + "px"
            }, {
                left: 100 - 100 * bound.width / container.width + "%",
                top: 0 + "px"
            }, {
                left: 100 - 100 * bound.width / container.width + "%",
                top: 100 - bound.height / container.height * 100 + "%"
            }, {
                left: 0 + "px",
                top: 100 - bound.height / container.height * 100 + "%"
            }, {
                left: 0 + "px",
                top: 0 + "px"
            }];
            anim.push(element.animate(keyframes, {
                duration: 10,
                iterations: Infinity,
                iterationStart: Math.random(),
                fill: "both"
            }));

            return anim;
        });

        anim.forEach((animation) => {
            animation.pause();
        })
    }
});