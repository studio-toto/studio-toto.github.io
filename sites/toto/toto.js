//click on toto

var index;
index = index + 1;

var waldoPics = [ "media/waldo2.jpeg",
                  "media/waldo3.jpeg",
                  "media/waldo4.jpeg",
                  "media/waldo5.jpeg",
                  "media/waldo6.jpeg",
                  "media/waldo7.jpeg",
                  "media/waldo8.jpeg",
];



$("#toto").click(function() {
    //console.log("hey");
    if  (index > waldoPics.length) {
        index = 0;
    }
    $("#waldo1").attr("src", waldoPics[index]);
    console.log("moin");
    changePosition();
    
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