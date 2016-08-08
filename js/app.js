$(document).ready(function () {
    initScrollspy()

    referenceTemplating()

    initMap()
});

function initScrollspy() {
    $('body').scrollspy({ target: '#navbar' })
}

function referenceTemplating() {
    // Reference rendering
    var data = [
        {
            title: "Odsávání Odléváren VP4 a VP6",
            subtitle: "Třinecké Železárny a.s.",
            doc: "výrobní dokumentace OK",
            date: "červenec  2013",
            background: "img/gallery/01_odsavani/thumbnail.jpg",
        },
        {
            title: "Montážní jámy Norsko délky 27,0m",
            subtitle: "CS profil s.r.o.",
            doc: "výrobní dokumentace OK",
            date: "říjen  2013",
            background: "img/gallery/02_norsko/thumbnail.jpg",
        },
        {
            title: "Dostavba výrobního areálu Skalice nad Svitavou",
            subtitle: "Baumuller Brno a.s.",
            doc: "výrobní dokumentace OK a opláštění",
            date: "listopad  2013",
            background: "img/gallery/03_baumuller/thumbnail.jpg",
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
            subtitle: "BENALY Holding s.r.o.",
            doc: "projektová a výrobní dokumentace",
            date: "2014-2016",
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
            doc: "projektová a výrobní dokumentace",
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
    // var referenceTemplate =
    //     '<li class="reference-li">' +
    //     '<div class="reference-container">' +
    //     '<div class="reference-content">' +
    //     '<div><b>{title}</b></div>' +
    //     '<div>{subtitle}</div>' +
    //     '<div>- {doc}</div>' +
    //     '<div><small>- {date}</small></div>' +
    //     '</div>' +
    //     '<div class="reference-arrow">»</div>' +
    //     '</div>' +
    //     '<img src="img/reference_demo.png" class="reference-img" />' +
    //     '</li>';

    var referenceTemplate =
        '<div class=" col-custom-sm-6 col-xs-12 col-sm-6 col-md-4 col-lg-3">' +
        '<div class="ref-container reference-background">' +
        '<div class="text-content">' +
        '<div><b>{title}</b></div>' +
        '<div>{subtitle}</div>' +
        '<div>- {doc}</div>' +
        '<div><small>- {date}</small></div>' +
        '</div>' +
        '<div class="bottom-mask"></div>' +
        '</div>' +
        '</div>';


    var referenceTemplate2 =
        '<div class=" col-custom-sm-6 col-xs-12 col-sm-6 col-md-4 col-lg-3">' +
        '<div class="ref-container-v2">' +
        '<div><a>{title}</a></div>' +
        '<div>{subtitle}</div>' +
        '<div>- {doc}</div>' +
        '<div><small>- {date}</small></div>' +
        '<img class="image" />'
    '</div>' +
        '</div>';

    $.each(data, function (i, item, arr) {
        var $item = $(nano(referenceTemplate, item))
        $item.on('click', openGallery.bind(undefined, i))
        var $bgItem = $item.find('.reference-background')
        $bgItem.css("background-image", "url('" + item.background + "')")

        $("#reference-container").append($item)
    })

    $.each(data, function (i, item, arr) {
        var $item = $(nano(referenceTemplate2, item))
        var $bgItem = $item.find('.image')
        $bgItem.attr("src", "img/ref/thumbnails/alitech Brno haly A a B.JPG")

        $("#reference-container").append($item)
    })
}

function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(49.696814, 16.691488),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);


    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(49.6870824, 16.6668806),
        map: map
    });

    // var infowindow = new google.maps.InfoWindow({
    //     content: "<p>Přední Arnoštov 19</p><p>571 01 Moravská Třebová</p>"
    // });

    // infowindow.open(map, marker);

    // marker.addListener('click', function () {
    //     infowindow.open(map, marker);
    // });

}

function openGallery(i) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/gallery/01_odsavani/01.jpg',
            w: 1200,
            h: 579,
            title: 'Odsávání Odléváren VP4 a VP6'
        },
        {
            src: 'img/gallery/01_odsavani/02.jpg',
            w: 1200,
            h: 894,
            title: 'Odsávání Odléváren VP4 a VP6'
        },
        {
            src: 'img/gallery/02_norsko/01.jpg',
            w: 1200,
            h: 497,
            title: 'Montážní jámy Norsko délky 27,0m'
        },
        {
            src: 'img/gallery/02_norsko/02.jpg',
            w: 1200,
            h: 579,
            title: 'Montážní jámy Norsko délky 27,0m'
        },
        {
            src: 'img/gallery/02_norsko/03.jpg',
            w: 1200,
            h: 579,
            title: 'Montážní jámy Norsko délky 27,0m'
        },
        {
            src: 'img/gallery/03_baumuller/01.jpg',
            w: 1200,
            h: 579,
            title: 'Dostavba výrobního areálu Skalice nad Svitavou'
        },
        {
            src: 'img/gallery/03_baumuller/02.jpg',
            w: 1200,
            h: 579,
            title: 'Dostavba výrobního areálu Skalice nad Svitavou'
        },
        {
            src: 'img/gallery/03_baumuller/03.jpg',
            w: 1200,
            h: 579,
            title: 'Dostavba výrobního areálu Skalice nad Svitavou'
        },
    ];

    // var startAt = -1, tempTitle = '';
    

    // while(i > 0){
    //     if(tempTitle !== items[startAt].title){
    //         tempTitle = items[startAt].title
    //         i--;
    //     } 
    //     startAt++;
    // }


    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

}


/* Nano Templates - https://github.com/trix/nano */
function nano(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
        var keys = key.split("."), v = data[keys.shift()];
        for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
        return (typeof v !== "undefined" && v !== null) ? v : "";
    });
}