//click on toto

var index;

var waldoPics = [ "media/waldo2.jpeg",
                  "media/waldo3.jpeg",
                  "media/waldo4.jpeg",
                  "media/waldo5.jpeg",
                  "media/waldo6.jpeg",
                  "media/waldo7.jpeg",
                  "media/waldo8.jpeg",
];


var audio = new Audio("media/meow.m4a");

//click on toto
$("#toto").click(function() {
    //console.log("hey");
    if  (index < waldoPics.length) {
        index = index + 1;
    } else {
        index = 0;
    }
    
    $("#waldo1").attr("src", waldoPics[index]);
    changePosition();
    audio.play();
    
});
   
//change position on load
changePosition();

function changePosition() {
     //change x
    document.getElementById("toto").style.left = Math.random() * 100 + "vw";

    //change y
    let totoHeight = Math.random() * (100 - 30) + 30;
    document.getElementById("toto").style.top = totoHeight + "vh";
 }

