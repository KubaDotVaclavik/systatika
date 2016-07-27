$(document).ready(function () {
    $('body').scrollspy({ target: '#navbar' })

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
        }

    ]

    // for(var i = 0, l = data.length)
    var referenceTemplate = 
            '<li class="reference-li">' +
              '<div class="reference-container">'+
                '<div class="reference-content">'+
                  '<div><b>{title}</b></div>'+
                  '<div>{subtitle}</div>'+
                  '<div>- {doc}</div>'+                
                  '<div><small>- {date}</small></div>'+
                '</div>'+
                '<div class="reference-arrow">»</div>'+
              '</div>'+
              '<img src="img/reference_demo.png" class="reference-img" />'+
            '</li>';

    $.each(data, function(i, item){
        $("#reference-list-1").append(nano(referenceTemplate, item))
    })

});

$(window).scroll(function (e) {
    // parallax();
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