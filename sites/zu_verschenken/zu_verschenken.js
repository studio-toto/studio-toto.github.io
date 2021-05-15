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



    
    description.text(text);
}

$("[data-id]").each(function() {
    $(this).click(function () {
        changeText($(this).data("id"))
    })
    $(this).draggable()
})