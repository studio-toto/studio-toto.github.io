var descriptionList = [ "",
                        "description lost",
                        "Neustadt",
                        "Sehr großes Bild 1,20x1,20m angzugeben, Acryl auf Leinwand, Viertel, bitte PN",
                        "Travel Makeup Brushes von Ecotools in Hemelingen zu verschenken",
                        "In der Hohentorsheerstraße gefunden, wurde wohl von einer Familie verloren. Bitte weiterleiten und teilen. Bei mir per PN melden, wenn Besitzer gefunden wurde!",
                        "Kindertoilettensitz in der Neustadt.",
                        "Bild Ostsee Blick auf Hiddensee , Leinwand",
                        "RESERVIERT Neu, zu verschenken im Schnoor",
                        "Hat jemand verwendung für filmdosen? In der Neustadt RESERVIERT",
                        "A3 Zeichenblöcke zu verschenken - liegen draußen in der hemelinger Straße vor nr 68",
                        "Kinderteller zu verschenkeb",
                        "no description",
                        "kinder neustadt",
                        "eine Zauberbox (ab 6 Jahren, vollständig, gut erhalten",
                        "Utrusta backofen halterung (neu, wurde falsch geliefert)",
                        "Wanduhr.... funktioniert leider nicht....",
                        "Bremen Schwachhausen....",
                        "Schwachhausen....",
                        "Silikon Backform Reserviert",
                        "Spiegel Massiv Eisen Durchmesser: 62 cm",
                        "no description",
                        "Sprechblase die mit einem abwischbaren Stift (whiteboard maker) beschriftet werden kann. Den Stift hab ich nicht mehr",
                        "Große haarklammer und zopfband im Viertel RESERVIERT",
                        "Jemand interessiert? Kann CD, USB und SD Karte. Kabel fehlt. Ist aber auch mit Batterien zu betreiben. Weiß leider nicht, ob der noch geht.",
                        "Kerzenständer zu verschenken in Mitte. - reserviert",
                        "Zwei einwandfreie Stühle. Abzuholen in der Neustadt! Reserviert",
                        "In der Neustadt",
                        "Mandoline (?) in der Neustadt reserviert",
                        "description lost",
                        "description lost",
                        "Selbstverständlich unbenutzt. Nur ein mal geöffnet, um zu prüfen, ob dieses auf meine Maschine passt. Schwachhausen",
                        "Kratzbaumelement: Hängematte für Kitten oder kleine Katzen. Hat einen Riss, kann aber repariert werden oder neu bezogen werden. Müsste aber ein Kitten auch so aushalten :) Neustadt",
                        "Hallo liebe Leute habe eine große halal Geflügelwurst 900g abzugeben bei der Ritterhuder Straße 1 in Gröpelingen bitte PN",
                        "I’m Viertel",
                        "[Reserviert] Plüschiges Sparschweinchen in Schwachhausen abzugeben.",
                        "Buntstifte in der Bahnhofsvorstadt zu verschenken",
                        "Stuhl abzugeben im Viertel :)",
                        "Funktioniert. Sound halt Werbe- Geschenk-entsprechend. Schwachhausen  RESERVIERT",
                        "Tauscht jemand diese nagelneue Gugelhupfform gegen eine Tarte-Form (kann gerne schon alt sein, mag keine neuen Sachen). PN Büdde",
                        "no description",
                        "Zu verschenken in sebaldsbrück",
                        "Klo Bär 🤣 in der Neustadt" ]

//for rainbow text
Splitting();

$("[data-id]").each(function(element) {
    $(this).click(function () {
        $("#description").text(descriptionList[$(this).data("id")]);
    })
    $(this).draggable()
})

$(".object").each(function(element) {
    var number = Math.floor(Math.random() * 80) + 10;
    $(this).css("marginTop", number +"vh");
    var numberleft = Math.floor(Math.random() * 90) + 0;
    $(this).css("marginLeft", numberleft +"vw");
})