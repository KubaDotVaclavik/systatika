$(document).ready(function () {
    initScrollspy()

    referenceTemplating()

    initMap()

    $('#contact-form').on('submit', function (e) { e.preventDefault() })
    $("#submit-btn").on('click', onSubmitContactForm)
    $("#submit-btn-success").on('click', formDefaultState)
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
            background: "img/gallery/04_pyrotek/thumbnail.jpg",
        },
        {
            title: "Nosná OK vestavby kanceláří",
            subtitle: "ITW Pronovia Velká Bíteš",
            doc: "projektová a výrobní dokumentace",
            date: "květen  2014",
            background: "img/gallery/05_bites/thumbnail.jpg",
        },
        {
            title: "Skladové haly s textilním opláštěním",
            subtitle: "BENALY Holding s.r.o.",
            doc: "projektová a výrobní dokumentace",
            date: "2014-2016",
            background: "img/gallery/06_benaly/thumbnail.jpg",
        },
        {
            title: "Inovace výrobkové řady bentonitových steliv",
            subtitle: "Keramost a.s. Prunéřov",
            doc: "projektová dokumentace nosných OK technologických konstrukcí",
            date: "srpen  2014",
            background: "img/gallery/07_keramost/thumbnail.jpg",
        },
        {
            title: "Přístavba výrobní haly Kuřim",
            subtitle: "Strojírny Brno a.s.",
            doc: "výrobní dokumentace OK a opláštění",
            date: "prosinec 2014",
            background: "img/gallery/08_kurim/thumbnail.jpg",
        },
        {
            title: "Přístavby haly 2",
            subtitle: "ITW Pronovia Velká Bíteš",
            doc: "projektová výrobní dokumentace OK",
            date: "2014-2015",
            background: "img/gallery/09_bites2/thumbnail.jpg",
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
        '<div class="reference-title">{title}</div>' +
        '<div class="reference-subtitle">{subtitle}</div>' +
        '<div class="reference-doc">{doc}</div>' +
        '<div class="reference-date">{date}</div>' +
        '</div>' +
        '<div class="bottom-mask"></div>' +
        '<div class="toggle-wrapper"><div class="toggle">»</div></div>' +
        '</div>' +
        '</div>';


    // var referenceTemplate2 =
    //     '<div class=" col-custom-sm-6 col-xs-12 col-sm-6 col-md-4 col-lg-3">' +
    //     '<div class="ref-container-v2">' +
    //     '<div><a>{title}</a></div>' +
    //     '<div>{subtitle}</div>' +
    //     '<div>- {doc}</div>' +
    //     '<div><small>- {date}</small></div>' +
    //     '<img class="image" />'
    // '</div>' +
    //     '</div>';

    $.each(data, function (i, item, arr) {
        var $item = $(nano(referenceTemplate, item))
        $item.on('click', openGallery.bind(undefined, i))
        var $bgItem = $item.find('.reference-background')
        $bgItem.css("background-image", "url('" + item.background + "')")

        $item.find('.toggle-wrapper').on('click', function(e){
            e.stopPropagation()
            $item.find('.ref-container').toggleClass('slideup')
        })

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

function openGallery(idx) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var galleryItems = {
        '01_odsavani': {
            title: 'Odsávání Odléváren VP4 a VP6',
            items: [
                {w: 1200,h: 579},
                {w: 1200,h: 894},
            ]
        },
        '02_norsko': {
            title: 'Montážní jámy Norsko délky 27,0m',
            items: [
                {w: 1200,h: 497},
                {w: 1200,h: 579},
                {w: 1200,h: 579},
            ]
        },
        '03_baumuller': {
            title: 'Dostavba výrobního areálu Skalice nad Svitavou',
            items: [
                {w: 1200,h: 579},
                {w: 1200,h: 579},
                {w: 1200,h: 579},
            ]
        },
        '04_pyrotek':{
            title: 'Výrobní hala, administrativní přístavba a vestavba',
            items:[
                {w: 1200,h: 579},
                {w: 1200,h: 579}
            ]
        },
        '05_bites':{
            title: 'Nosná OK vestavby kanceláří',
            items:[
                {w: 1200,h: 579},
                {w: 1200,h: 579}
            ]
        },
        '06_benaly':{
            title: 'Skladové haly s textilním opláštěním',
            items:[
                {w: 1200,h: 551},
                {w: 1200,h: 573},
                {w: 1200,h: 573},
                {w: 600,h: 450},
                {w: 600,h: 338},
            ]
        },
        '07_keramost':{
            title: 'Inovace výrobkové řady bentonitových steliv',
            items:[
                {w: 1200,h: 675},
                {w: 1200,h: 675},
                {w: 1200,h: 675}
            ]
        },
        '08_kurim':{
            title: 'Přístavba výrobní haly Kuřim',
            items:[
                {w: 1200,h: 573}
            ]
        },
        '09_bites2':{
            title: 'Přístavby haly 2',
            items:[
                {w: 1200,h: 583},
                {w: 600,h: 450},
                {w: 600,h: 450}
            ]
        }
    }

    startIdx = 0;
    data = [];

    Object.keys(galleryItems).forEach(function(key, i, arr){
        if(i < idx){
            startIdx += galleryItems[key].items.length
        }
        galleryItems[key].items.forEach(function(item, ii){
            data.push({
                src: 'img/gallery/' + key + '/' + ('0' + (ii + 1)).slice(-2) + '.jpg',
                w: item.w,
                h: item.h,
                title: galleryItems[key].title
            })
        })
    })

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: startIdx // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, data, options);
    gallery.init();

}

function onSubmitContactForm(e) {
    e.preventDefault()
    var validName = validateName(),
        validEmail = validateEmail(),
        validText = validateText();

    if (validName && validEmail && validText) {
        var btn = $("#submit-btn"),
            loader = $("#submit-btn-loader"),
            success = $("#submit-btn-success"),
            form = $("#contact-form")[0]

        var data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            text: form.text.value,
        }

        btn.hide();
        loader.show();

        $.post("test.php", data)
            .done(function () {
                btn.hide();
                loader.hide();
                success.show();
                clearForm();
                instantValidateOff();
            })
            .fail(function () {
                btn.show();
                loader.hide();
                success.hide();
            })
    } else {
        instantValidateOn()
    }
}

function validateName() {
    var input = $('#contact-form-name'),
        formGroup = input.closest('.form-group'),
        info = $('#contact-form-name-info'),
        val = input.val();

    if (val) {
        formGroup.removeClass('has-error')
        info.text('')
        return true
    } else {
        formGroup.addClass('has-error')
        info.text('Jméno musí byt vyplněno.')
        return false
    }
}

function validateEmail() {
    var input = $('#contact-form-email'),
        formGroup = input.closest('.form-group'),
        info = $('#contact-form-email-info'),
        val = input.val();

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!val) {
        formGroup.addClass('has-error')
        info.text('Email musí být vyplněný.')
        return false
    }

    if (re.test(val)) {
        formGroup.removeClass('has-error')
        info.text('')
        return true
    } else {
        formGroup.addClass('has-error')
        info.text('Neplatný formát emailu.')
        return false
    }
}

function validateText() {
    var input = $('#contact-form-text'),
        formGroup = input.closest('.form-group'),
        info = $('#contact-form-text-info'),
        val = input.val();

    if (val) {
        formGroup.removeClass('has-error')
        info.text('')
        return true
    } else {
        formGroup.addClass('has-error')
        info.text('Zpráva musí byt vyplněna.')
        return false
    }
}

function clearForm() {
    var form = $("#contact-form")[0]
    form.name.value = ''
    form.email.value = ''
    form.phone.value = ''
    form.text.value = ''
}

function formDefaultState() {
    var btn = $("#submit-btn"),
        loader = $("#submit-btn-loader"),
        success = $("#submit-btn-success")

    success.hide();
    loader.hide();
    btn.show();
}

function instantValidateOn() {
    $('#contact-form-name').on('keyup', validateName)
    $('#contact-form-email').on('keyup', validateEmail)
    $('#contact-form-text').on('keyup', validateText)
}

function instantValidateOff() {
    $('#contact-form-name').off('keyup', validateName)
    $('#contact-form-email').off('keyup', validateEmail)
    $('#contact-form-text').off('keyup', validateText)
}


/* Nano Templates - https://github.com/trix/nano */
function nano(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
        var keys = key.split("."), v = data[keys.shift()];
        for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
        return (typeof v !== "undefined" && v !== null) ? v : "";
    });
}