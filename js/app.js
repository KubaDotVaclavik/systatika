$(document).ready(function () {
    $('body').scrollspy({ target: '#navbar' })
    // debugger;
    // var center = SMap.Coords.fromWGS84(14.41790, 50.12655);
    // var m = new SMap(JAK.gel("m"), center, 13);
    // m.addDefaultLayer(SMap.DEF_BASE).enable();

    // Reference rendering
    var data = [
        {
            title: "Odsávání Odléváren VP4 a VP6",
            subtitle: "Třinecké Železárny a.s.",
            doc: "výrobní dokumentace OK",
            date: "červenec  2013"
        },
        {
            title: "Montážní jámy Norsko délky 27,0m",
            doc: "výrobní dokumentace OK",
            date: "říjen  2013",
        },
        {
            title: "Dostavba výrobního areálu Skalice nad Svitavou",
            subtitle: "Baumuller Brno a.s.",
            doc: "výrobní dokumentace OK a opláštění",
            date: "listopad  2013",
        },
        {
            title: "Výrobní hala, administrativní přístavba a vestavba",
            subtitle: "Pyrotek Blansko",
            doc: "projektová dokumentace pro výběr dodavatele",
            date: "březen  2014",
        },
        {
            title: "Nosná OK vestavby kanceláří",
            subtitle: "ITW Pronovia Velká Bíteš",
            doc: "projektová a výrobní dokumentace",
            date: "květen  2014",
        },
        {
            title: "Skladové haly s textilním opláštěním",
            doc: "Projektová a výrobní dokumentace",
            date: "2014-2016",
        },
        {
            title: "Hasičská zbrojnice",
            subtitle: "Město Brno",
            doc: "projektová a výrobní dokumentace zastřešení",
            date: "červenec  2014",
        },
        {
            title: "Inovace výrobkové řady bentonitových steliv",
            subtitle: "Keramost a.s. Prunéřov",
            doc: "projektová dokumentace nosných OK technologických konstrukcí",
            date: "srpen  2014",
        },
        {
            title: "Přístavba výrobní haly Kuřim",
            subtitle: "Strojírny Brno a.s.",
            doc: "výrobní dokumentace OK a opláštění",
            date: "prosinec 2014",
        },
        {
            title: "Přístavby haly 2",
            subtitle: "ITW Pronovia Velká Bíteš",
            doc: "projektová výrobní dokumentace OK",
            date: "2014-2015",
        },
        {
            title: "Výrobní hala",
            subtitle: "Dendera Němčice",
            doc: "projektová a výrobní dokumentace nosné OK a opláštění",
            date: "leden 2015",
        },
        {
            title: "Přístavba provozovny, motosalón",
            subtitle: "Autonova Brno",
            doc: "projektová dokumentace nosné OK",
            date: "březen 2015",
        },
        {
            title: "Dopravní cesta z linky B na plato č.3",
            subtitle: "Sklopísek Střeleč a.s.",
            doc: "projektová dokumentace technologických konstrukcí",
            date: "červenec  2015",
        },
        {
            title: "Novostavba hal A a B",
            subtitle: "Alitech Plus s.r.o. Brno",
            doc: "statický výpočet nosných OK",
            date: "srpen 2015",
        },
        {
            title: "Administrativní budova Pohledy - Samoty",
            subtitle: "Švábstaf s.r.o",
            doc: "projektová a výrobní dokumentace nosné OK a opláštění",
            date: "září 2015",
        },
        {
            title: "Zastřešení hnojiště",
            subtitle: "Agro CS Lučenec",
            doc: "Projektová a výrobní dokumentace",
            date: "prosinec 2015",
        },
        {
            title: "Výrobní hala",
            subtitle: "Marston CZ s.r.o Brno",
            doc: "projektová a výrobní dokumentace nosné OK",
            date: "leden 2016",
        },
        {
            title: "Zastřešení biomasy",
            subtitle: "Agro CS Lučenec",
            doc: "projektová a výrobní dokumentace",
            date: "březen 2016",
        }

    ]

    // for(var i = 0, l = data.length)
    var referenceTemplate =
        '<li class="reference-li">' +
        '<div class="reference-container">' +
        '<div class="reference-content">' +
        '<div><b>{title}</b></div>' +
        '<div>{subtitle}</div>' +
        '<div>- {doc}</div>' +
        '<div><small>- {date}</small></div>' +
        '</div>' +
        '<div class="reference-arrow">»</div>' +
        '</div>' +
        '<img src="img/reference_demo.png" class="reference-img" />' +
        '</li>';

    $.each(data, function (i, item, arr) {
        if (data.length / 2 <= i) {
            $("#reference-list-2").append(nano(referenceTemplate, item))
        } else {
            $("#reference-list-1").append(nano(referenceTemplate, item))
        }
    })

});

$(window).scroll(function (e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.parallax').css('bottom', -(scrolled * 0.3) + 'px');
}

/* Nano Templates - https://github.com/trix/nano */
function nano(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
        var keys = key.split("."), v = data[keys.shift()];
        for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
        return (typeof v !== "undefined" && v !== null) ? v : "";
    });
}