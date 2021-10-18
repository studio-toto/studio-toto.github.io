// console.clear();

// var group = document.querySelector(".element-wrap");
// var nodes = document.querySelectorAll("img");
// var total = nodes.length;
// console.log(total);
// var ease  = Power1.easeInOut;
// var boxes = [];

// for (var i = 0; i < total; i++) {
    
//   var node = nodes[i];
  
//   // Initialize transforms on node
//   TweenLite.set(node, { x: 0 });
   
//   boxes[i] = {
//     transform: node._gsTransform,
//     x: node.offsetLeft,
//     y: node.offsetTop,
//     node    
//   };
// } 

// group.addEventListener("mouseenter", layout);
// group.addEventListener("mouseleave", layout);

// function layout() {

//   group.classList.toggle("reorder");  
  
//   for (var i = 0; i < total; i++) {
    
//     var box = boxes[i];
        
//     var lastX = box.x;
//     var lastY = box.y;   
    
//     box.x = box.node.offsetLeft;
//     box.y = box.node.offsetTop;
    
//     // Continue if box hasn't moved
//     if (lastX === box.x && lastY === box.y) continue;
    
//     // Reversed delta values taking into account current transforms
//     var x = box.transform.x + lastX - box.x;
//     var y = box.transform.y + lastY - box.y;  
    
//     // Tween to 0 to remove the transforms
//     TweenLite.fromTo(box.node, 0.5, { x, y }, { x: 0, y: 0, ease });    
//   } 
// }
function transformer() {
    var children = this.children;
    console.log(this);
    console.log(children);
    var space = document.body.clientHeight/children.length;
    for (var i = 0; i < children.length; i++) {
         var child = children[i];
        var position = i*space;
        child.style.setProperty('top', position +"px");
    }
}

// document.getElementsByClassName("element-wrap").addEventListener("click", transformer());
var foo = $(".element-wrap");


foo.hover( function (){
    let childrenEls = document.querySelector('.element-wrap').querySelectorAll('img');
    // childrenEls.addClass("reorder");
    // $(this).children('img').attr('class','reorder');
    var space = 0;
    // console.log(this.children.length);
    for (var i = 0; i < childrenEls.length; i++) {
        console.log(childrenEls[i]);
    //    var position = space + childrenEls[i].clientHeight;
     
        // childrenEls[i].style.setProperty('margin-top', space +"px");
        space += childrenEls[i].clientHeight;
    }

},  function (){
    let childrenEls = document.querySelector('.element-wrap').querySelectorAll('img');
    // childrenEls.addClass("reorder");
    // $(this).children('img').attr('class','reorder');
    var space = window.innerHeight/childrenEls.length;
    // console.log(this.children.length);
    for (var i = 0; i < childrenEls.length; i++) {
        console.log(childrenEls[i]);
        var position = i*childrenEls[i].clientHeight;
        // childrenEls[i].style.setProperty('margin-top', 0 );
    }

});
