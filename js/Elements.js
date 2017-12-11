/**
 * Created by maxbe on 10.12.2017.
 */

function createStaticElement(name, withName) {
    var div = $('<div />');
    var el = $('<div />', {
        name: name,
        class: 'element'
    }).css('background-image', 'url(./images/' + name[0].toUpperCase() + name.slice(1) + '.png')
        .css('background-size', 'contain')
        .disableSelection();
    div.append(el);
    if(withName){
        var text = $('<span />', {
            text: name.toUpperCase(),
            class: 'elementName'
        });
        div.append(text);
    }
    return div.css('display', 'inline-block').css('vertical-align', 'top');
}

function createDraggableElement(name){
    var div = $('<div />');
    var el = $('<div />', {
        name: name,
        class: 'element draggableElement'
    }).css('background-image', 'url(./images/' + name[0].toUpperCase() + name.slice(1) + '.png')
        .css('background-repeat', 'no-repeat')
        .draggable(scrollElementSettings)
        .addClass('newlyFound')
        .mouseover(function () {
            $(this).removeClass('newlyFound');
        });
    var text = $('<span />', {
        text: name.toUpperCase(),
        class: 'elementName'
    });
    div.append(el).append(text);
    return div;
}