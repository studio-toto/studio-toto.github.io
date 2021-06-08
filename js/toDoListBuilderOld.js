var listData = {

    /* 
    "about": {
        "description": "studio toto is a temporal 1 semester gathering for the sake of creating mostly meaningless but joyful web experiences for our mock design studio. this website is our no stress todo list and your playground. <br><br>made by nilya musaeva + lucca vitters + julia vollmer &nbsp",
        "link": ""
    },

    "style fight": {
        "description": 'Choose your fighter: <br> <button class="styleButton" style="background-image: url(\'media/nilya.png\');" onclick="cssChange(\'css/nilya.css\')"></button><button class="styleButton" style="background-image: url(\'media/lucca.png\');" onclick="cssChange(\'css/lucca.css\')"></button><button class="styleButton" style="background-image: url(\'media/julia.png\');" onclick="cssChange(\'css/julia.css\')"></button>',
        "link": ""
    },
    */

    "no escape": {
        "description": "There is no escape. Your only chance to evacuate is to leave with us.",
        "link": "sites/no_escape/no_escape.html"
    },

    "mystery": {
        "description": "Come and see.",
        "link": "sites/mystery/mystery.html"
    },

    "bbq grill": {
        "description": "on the website is nothing but a bbq grill. on the grill is a 3d model of a sausage. when you scroll, the sausage turns. too much scrolling and the sausage starts to burn. additional you can think about changing the sausage to other 3d models and grill them on the bbq.",
        "link": "sites/bbq_grill/bbq_grill.html"
    },

    "zu verschenken pile": {
        "description": '"use the mechanism of <a href="http://www.mloh.ru/">this</a>  website and the Gratisladen Bremen group inputs and create a pile of zu verschenken website."',
        "link": "sites/zu_verschenken/zu_verschenken.html"
    },

    "scroll playground": {
        "description": "different tiny website that only offer different scrolling experiences. e.x.: scroll from bottom to top like a mountain hiker. moving from right to top left like someone on some stairs. circular scroll like a hamster roll: the whole sites turns (maybe other elements will have gravity and fall down?).",
        "link": "sites/scroll/up.html"
    },

    "tickling/rubbellos": {
        "description":"there is something hidden under the surface of the website, to get it, user needs to tickle/scratch the layout with the cursor. <br>features: regulate intensivity? what can be hidden? anecdotes/jokes. something else?",
        "link": ""
    },

    "data bike": {
        "description": '"use the mechanism of mountain bike game but  mountain height is defined with an actual data, such as, for example, corona cases in germany. user plays for a motorbike rider, maybe there is a multiplayer for diff countries. the data will be display on the lower part of the mountains.<a href="https://2020game.io/">inspiration</a>"',
        "link": ""
    },

    "werktage & wochenende": {
        "description": "make website work differently according to a day of the week. during the weekdays, the website is plain, contains tables, ux is pretty reasonable, even dry. during the weekends it turns crazy: some pages are closed, some of them have weird animations/interactions. maybe there are fireworks animation, spilled beer in the bottom of the page...",
        "link": ""
    },

    "fortune wheel": {
        "description": "was the original idea for our portfolio: a user opens a website and presses the lever of the wheel of fortune. then a random project appears. The user can view all previous projects while scrolling, but cannot select them on their own.",
        "link": ""
    },

    "karaoke website": {
        "description": "you are my fire, <br> my one desire <br> believe when i say <br> i want it that way",
        "link": ""
    },

    "style generator": {
        "description": "Drag your favoured styles to a area to make the whole page appear like that.",
        "link": ""
    }
};

var toDoList = document.getElementById("toDoList");

var numberOfElements = Object.keys(listData).length;

for (var i = 0; i < numberOfElements; i++) {

    var title = Object.keys(listData)[i];
    var element = listData[title];
    var hide = 'hide' + parseInt(i) + 2;    //edit here if zusätzliche list items are hardcoded in html file
    
    var li = document.createElement('li');
    li.setAttribute('class', 'listItem');

    var span = document.createElement('span');
    span.setAttribute('class', 'listText');
    span.setAttribute('onClick', 'expand("' + hide + '")');
    pan.innerHTML = title.toString();
    
    li.appendChild(span);

    var div = document.createElement('div');
    iv.setAttribute('class', 'hide');
    iv.setAttribute('id', hide);
    div.setAttribute('onClick', 'expand("' + hide + '")');

    var par = document.createElement('p');
    par.innerHTML = element.description;

    var br = document.createElement('br');

    div.appendChild(par);
    div.appendChild(br);

    //only create a DOM element if element's link string is not empty
    if (element.link != "") {
        var a = document.createElement('a');
        a.setAttribute('class', 'linkToSite');
        a.setAttribute('href', element.link);
        a.innerHTML = "&gt;go to " + title;
        div.appendChild(a);
    }

    toDoList.appendChild(li);
    toDoList.appendChild(div);
}