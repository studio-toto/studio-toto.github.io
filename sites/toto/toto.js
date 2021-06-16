//click on toto
$("#toto").click(function() {
    //console.log("hey");
    $("#waldo1").attr('src',"media/waldo2.jpeg");
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