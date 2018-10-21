function selector(button,option,data) {
    var item = $(button),
        /* selector button*/
        container = $(button).parent('ul').parent('.select'),
        /* selector container with css class "select"*/
        multiSelect,mutualSwitch;
    /* selector types*/
    var selected, used;


    selected = item.hasClass('checked');
    used = container.find('li').hasClass('checked');


    multiSelect = function (){
        selected ? unchecked():check();
    };

    mutualSwitch = function (){
        if (used){unselected();}
        check();
    };


    var check = function (){
        item.addClass('checked');
    };/* set checked*/

    var unchecked = function (){
        item.removeClass('checked');
    };/* set to default*/

    var unselected =  function (){
        container.find('li').removeClass('checked');
    };


    var setSelections = function (data){
        data.each(function (){
            $(this).addClass('checked');
        });
    };

    return {

        init: function (){
            if (option === true){
                multiSelect();
                return this;
            } else if (option === false || option === undefined){
                mutualSwitch();
                return this;
            }

        },
        set: function (){
            setSelections(data);
        }
    }
}

