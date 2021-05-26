Splitting();

function changeText(value) {
    var description = $("#description");
    var text = "";
    console.log(description.text())

    if (value == 1) text += "description lost";
    if (value == 2) text += "Neustadt";
    if (value == 3) text += "Sehr großes Bild 1,20x1,20m angzugeben, Acryl auf Leinwand, Viertel, bitte PN";
    if (value == 4) text += "Travel Makeup Brushes von Ecotools in Hemelingen zu verschenken";
    if (value == 5) text += "In der Hohentorsheerstraße gefunden, wurde wohl von einer Familie verloren. Bitte weiterleiten und teilen. Bei mir per PN melden, wenn Besitzer gefunden wurde!";
    if (value == 6) text += "Kindertoilettensitz in der Neustadt.";
    if (value == 7) text += "Bild Ostsee Blick auf Hiddensee , Leinwand";
    if (value == 8) text += "RESERVIERT Neu, zu verschenken im Schnoor";
    if (value == 9) text += "Hat jemand verwendung für filmdosen? In der Neustadt RESERVIERT";
    if (value == 10) text += "A3 Zeichenblöcke zu verschenken - liegen draußen in der hemelinger Straße vor nr 68";
    if (value == 11) text += "Kinderteller zu verschenkeb";
    if (value == 12) text += "no description";
    if (value == 13) text += "kinder neustadt";
    if (value == 14) text += "eine Zauberbox (ab 6 Jahren, vollständig, gut erhalten";
    if (value == 15) text += "Utrusta backofen halterung (neu, wurde falsch geliefert)";
    if (value == 16) text += "Wanduhr.... funktioniert leider nicht....";
    if (value == 17) text += "Bremen Schwachhausen....";
    if (value == 18) text += "Schwachhausen....";
    if (value == 19) text += "Silikon Backform Reserviert";
    if (value == 20) text += "Spiegel Massiv Eisen Durchmesser: 62 cm";
    if (value == 21) text += "no description";
    if (value == 22) text += "Sprechblase die mit einem abwischbaren Stift (whiteboard maker) beschriftet werden kann. Den Stift hab ich nicht mehr";
    if (value == 23) text += "Große haarklammer und zopfband im Viertel RESERVIERT";
    if (value == 24) text += "Jemand interessiert? Kann CD, USB und SD Karte. Kabel fehlt. Ist aber auch mit Batterien zu betreiben. Weiß leider nicht, ob der noch geht.";
    if (value == 25) text += "Kerzenständer zu verschenken in Mitte. - reserviert";
    if (value == 26) text += "Zwei einwandfreie Stühle. Abzuholen in der Neustadt! Reserviert";
    if (value == 27) text += "In der Neustadt";
    if (value == 28) text += "Mandoline (?) in der Neustadt reserviert";
    if (value == 29) text += "description lost";
    if (value == 30) text += "description lost";
    if (value == 31) text += "Selbstverständlich unbenutzt. Nur ein mal geöffnet, um zu prüfen, ob dieses auf meine Maschine passt. Schwachhausen";
    if (value == 32) text += "Kratzbaumelement: Hängematte für Kitten oder kleine Katzen. Hat einen Riss, kann aber repariert werden oder neu bezogen werden. Müsste aber ein Kitten auch so aushalten :) Neustadt";
    if (value == 33) text += "Hallo liebe Leute habe eine große halal Geflügelwurst 900g abzugeben bei der Ritterhuder Straße 1 in Gröpelingen bitte PN";
    if (value == 34) text += "I’m Viertel";
    if (value == 35) text += "[Reserviert] Plüschiges Sparschweinchen in Schwachhausen abzugeben.";
    if (value == 36) text += "Buntstifte in der Bahnhofsvorstadt zu verschenken";
    if (value == 37) text += "Stuhl abzugeben im Viertel :)";
    if (value == 38) text += "Funktioniert. Sound halt Werbe- Geschenk-entsprechend. Schwachhausen  RESERVIERT";
    if (value == 39) text += "Tauscht jemand diese nagelneue Gugelhupfform gegen eine Tarte-Form (kann gerne schon alt sein, mag keine neuen Sachen). PN Büdde";
    if (value == 40) text += "no description";
    if (value == 41) text += "Zu verschenken in sebaldsbrück";
    if (value == 42) text += "Klo Bär 🤣 in der Neustadt";
    
    description.text(text);
}

$("[data-id]").each(function(element) {
    $(this).click(function () {
        changeText($(this).data("id"))
    })
    $(this).draggable()
})

$(".object").each(function(element) {
    var number = Math.floor(Math.random() * 80) + 10;
    $(this).css("marginTop", number +"vh");
    var numberleft = Math.floor(Math.random() * 90) + 0;
    $(this).css("marginLeft", numberleft +"vw");
})