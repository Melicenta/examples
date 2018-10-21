var script = document.createElement('script');
script.src = "/javascripts/jquery.js";
document.body.appendChild(script);

var titleText = document.getElementsByClassName('title')[0].innerHTML;

function afterLoad() {
    //alert("Загрузка завершена: " + typeof(jQuery));
    //var img = document.createElement('img'); // if you need to load a background img
    var scripts = ['/javascripts/jquery.js'];
    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    });

    // img.onload = function () {
    //     //alert("Успех " + this.src);
    // };
    //
    // img.onerror = function () {
    //     // alert("Ошибка " + this.src);
    // };

    //img.src = '/images/exampl.png'

}

script.onload = script.onerror = function() {
    if (!this.executed) {
        this.executed = true;
        afterLoad();
    }
};

script.onreadystatechange = function() {
    var self = this;
    if (this.readyState == "complete" || this.readyState == "loaded") {
        setTimeout(function() {
            self.onload()
        }, 0); // save this
    }
};

window.onload = function () {
    /*controls scripts*/

    var button1 = $('.multi .switch-option');
    var button2 = $('.mutual .switch-option');
    var button3 = $('.single .switch-option');

    /* initialisation with default settings*/
    selector(button1,true,$('[data-code = one]')).set();
    selector(button3,true,$('[data-code = six]')).set();
    selector(button3,true,$('[data-code = eight]')).set();


    /* button triggers*/
    button1.on('click', function () {
        selector($(this),true).init();
    }); /* with multi select option*/

    button2.on('click', function () {
        selector($(this),false).init();
    }); /* with mutual switch option*/

    button3.on('click', function () {
        selector($(this),true).init();
    });/* multi-select option provides self switch off function, in this case the single buttons are used*/


/*controls scripts*/

}