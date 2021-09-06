
// 06.09.21 google changed Spreadsheet API, therefore old one is no longe working
//Thanks to Mike Steelson for updated Spreadsheet API https://stackoverflow.com/a/68948211
var id = '1ESs-bNXfZXeRIq08HuNKmRuP1B9NPV8j_-9jxhG6mK0';
var gid = '0';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
var toDoList = document.getElementById("toDoList");

fetch(url)
  .then(response => response.text())
  .then(data => myItems(data.substring(47).slice(0, -2))
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  json.table.rows.forEach(row => {
    lists= row.c;
        var title = lists[1].v;
        var hide = 'hide' + parseInt(lists[0].v);          //edit here if zusätzliche list items are hardcoded in html file
        
        var li = document.createElement('li');
        li.setAttribute('class', 'listItem');

        var span = document.createElement('span');
        span.setAttribute('class', 'listText');
        span.setAttribute('onClick', 'expand("' + hide + '")');

        //style according to status
        if (lists[4].f === "0") {                        //in progress
            span.innerHTML = title.toString();
            if (lists[3].v != "link"){                   //check if there's already a link
                span.innerHTML += " <div class='progress'></div>";
            }
        } else if (lists[4].f === "1") {
            span.innerHTML = title.toString() + " &#10003";         //done
        } else if (lists[4].f === "2") {
            span.innerHTML = "<s>" + title.toString() + "</s>";     //abandoned
        }
        
        li.appendChild(span);

        var div = document.createElement('div');
        div.setAttribute('class', 'hide');
        div.setAttribute('id', hide);
        div.setAttribute('onClick', 'expand("' + hide + '")');

        var par = document.createElement('p');
        par.innerHTML = lists[2].v;

        var br = document.createElement('br');

        div.appendChild(par);
        div.appendChild(br);

        //only create a DOM element if element's link string is not empty
        if (!(lists[3].v === "link")) {
            var a = document.createElement('a');
            a.setAttribute('class', 'linkToSite');
            a.setAttribute('href', lists[3].v);
            a.innerHTML = "&gt;go to " + title;
            div.appendChild(a);
        }
        

        toDoList.appendChild(li);
        toDoList.appendChild(div);
    })
}

//old processing
// function dataProcess(value) {
//     //console.log(value);
//     var lists = value.feed.entry;
//     var numberOfElements = value.feed.entry.length;

//     for (var i = 5; i < numberOfElements; i += 5) {

//         var title = lists[i+1].content.$t;
//         //var element = listData[title];
//         var hide = 'hide' + parseInt(lists[i].content.$t);          //edit here if zusätzliche list items are hardcoded in html file
        
//         var li = document.createElement('li');
//         li.setAttribute('class', 'listItem');

//         var span = document.createElement('span');
//         span.setAttribute('class', 'listText');
//         span.setAttribute('onClick', 'expand("' + hide + '")');

//         //style according to status
//         if (lists[i+4].content.$t === "0") {                        //in progress
//             span.innerHTML = title.toString();
//             if (lists[i+3].content.$t != "link"){                   //check if there's already a link
//                 span.innerHTML += " <div class='progress'></div>";
//             }
//         } else if (lists[i+4].content.$t === "1") {
//             span.innerHTML = title.toString() + " &#10003";         //done
//         } else if (lists[i+4].content.$t === "2") {
//             span.innerHTML = "<s>" + title.toString() + "</s>";     //abandoned
//         }
        
//         li.appendChild(span);

//         var div = document.createElement('div');
//         div.setAttribute('class', 'hide');
//         div.setAttribute('id', hide);
//         div.setAttribute('onClick', 'expand("' + hide + '")');

//         var par = document.createElement('p');
//         par.innerHTML = lists[i+2].content.$t;

//         var br = document.createElement('br');

//         div.appendChild(par);
//         div.appendChild(br);

//         //only create a DOM element if element's link string is not empty
//         if (!(lists[i+3].content.$t === "link")) {
//             var a = document.createElement('a');
//             a.setAttribute('class', 'linkToSite');
//             a.setAttribute('href', lists[i+3].content.$t);
//             a.innerHTML = "&gt;go to " + title;
//             div.appendChild(a);
//         }
        

//         toDoList.appendChild(li);
//         toDoList.appendChild(div);
//     }
// }