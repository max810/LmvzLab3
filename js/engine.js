/**
 * Created by maxbe on 19.11.2017.
 */

function checkCombo() {
    var x = comb.getCombo(chosen.first(), chosen.second());
    if (x !== undefined) {
        if ($('#book .element[name=' + x + ']').length) {
            showAlreadyExistsWindow(x);
        } else {
            $('#book').append(createDraggableElement(x));
            showCreatedWindow(x, chosen.first(), chosen.second());
        }
        emptyCircle();
    }
}

function emptyCircle() {
    $('#alcCircle > .element').remove();
    chosen.empty();
    $('#alcCircle').css('background-image', 'url(./images/PentagramDis.png)');
}

function showCreatedWindow(elementName, from1Name, from2Name) {
    var div = $('<div />', {
        class: 'elementCreatedWindow'
    });
    var headerDiv = $('<div />', {
        class: 'headerDiv',
        text: "You've created element " + elementName +"!"
    });
    var divBody = $('<div />', {
        class: 'divBody'
    })
        .append(createStaticElement(from1Name, true))
        .append(createStaticElement('plus'))
        .append(createStaticElement(from2Name, true))
        .append(createStaticElement('arrow'))
        .append(createStaticElement(elementName, true));
    $(divBody.children().has('.element'))
        .hover(function () {
            $(this).css('cursor', 'default');
        });
    var button = $('<button />', {
        class: 'btn btn-success',
        text: 'OK',
        style: 'font-size: 24px; font-weight: bold; font-family: Consolas, Monospaced',
        click: function () {
            div.remove();
        }
    });
    div.append(headerDiv, divBody, button);
    $('body').append(div);
}

function showAlreadyExistsWindow(name){
    var el = $('#alreadyExistsWindow');
    $('#alreadyExistsElement').html(createStaticElement(name, true));
    el.slideToggle('slow');
    setTimeout(function () {
        el.slideToggle('slow');
    }, 3000);
}

function updateChosenCount(){
    $('#chosenCount').text(chosen.isFull() ? 2
        : chosen.isEmpty() ? 0
        : 1);
}

