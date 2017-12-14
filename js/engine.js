/**
 * Created by maxbe on 19.11.2017.
 */

function checkCombo() {
    var x = comb.getCombo(chosen.first(), chosen.second());
    if (x !== undefined) {
        if ($('#scroll .element[name=' + x + ']').length) {
            showAlreadyExistsWindow(x);
        } else {
            $('#scroll').append(createDraggableElement(x));
            showCreatedWindow(x, chosen.first(), chosen.second());
            comb.found.push(x);
            if (comb.found.length == 1)
                setAchievement('One');
            else if (comb.found.length == 3)
                setAchievement('Three');
            else if (comb.found.length == Object.keys(comb.getAllCombs()).length)
                setAchievement('All');
            else if (x == 'energy')
                setAchievement('Energy');
            hintsCount++;
        }
        emptyCircle();
    }
    if (chosen.isFull() && x == undefined) {
        $('#flaskCount').text('2');
        $('#flask').css('background-image', 'url(./images/FlaskCanceled.png)')
    } else{
        updateChosenCount();
    }
}

function emptyCircle() {
    $('#alcCircle > .element').remove();
    chosen.empty();
    $('#alcCircle').css('background-image', 'url(./images/PentagramDis.png)');
}

function showCreatedWindow(elementName, from1Name, from2Name) {
    var div = $('<div />', {
        class: 'popupWindow',
        style: 'z-index: ' + $('.popupWindow').css('z-index')
    });
    var headerDiv = $('<div />', {
        class: 'headerDiv',
        text: "You've created element " + elementName + "! (+1 hint added)"
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
        style: 'font-size: 24px; font-weight: bold; font-family: Consolas, Monospaced; margin-top: -50px;',
        click: function () {
            div.remove();
        }
    });
    div.append(headerDiv, divBody, button);
    $('body').append(div);
}

function showAlreadyExistsWindow(name) {
    var el = $('#alreadyExistsWindow');
    $('#alreadyExistsElement').html(createStaticElement(name, true));
    el.slideToggle('slow');
    setTimeout(function () {
        el.toggle("slide");
    }, 3000);
}

function updateChosenCount() {
    $('#flaskCount').text(chosen.count());
    $('#flask').css('background-image', 'url(./images/Flask' + chosen.count() + '.png)');
    //$('#flask').css('background-image', 'url(./images/Flask1.png)');
}

function showConfirmationWindow() {
    var div = $('<div />', {
        class: 'popupWindow',
        style: 'z-index: ' + $('.popupWindow').css('z-index')
    });
    var headerDiv = $('<div />', {
        class: 'headerDiv',
        text: "Exit confirmation"
    });
    var divBody = $('<div />', {
        class: 'divBody'
    }).append($('<h2></h2>', {
        text: 'Are you sure you want to leave?'
    }));
    var noButton = $('<button />', {
        class: 'btn btn-danger',
        text: 'NO',
        style: 'font-size: 24px; font-weight: bold; font-family: Consolas, Monospaced; margin-left: 50px;',
        click: function () {
            div.remove();
        }
    });
    var yesButton = $('<button />', {
        class: 'btn btn-success',
        text: 'Yes',
        style: 'font-size: 24px; font-weight: bold; font-family: Consolas, Monospaced; margin-right: 50px',
        click: function () {
            window.open('./index.html', "_self")
        }
    });
    div.append(headerDiv, divBody, yesButton, noButton);
    $('body').append(div);
}