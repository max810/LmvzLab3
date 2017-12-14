/**
 * Created by maxbe on 11.12.2017.
 */
function showFoundElements() {
    var div = $('<div />', {
        class: 'popupWindow',
        id: 'glossaryOpened',
        style: ''
    });
    var headerDiv = $('<div />', {
        text: "All elements"
    });
    var divBody = $('<div />', {
        class: 'divBody',
        style: 'margin: 5px 0 0 25px; height: 90%; overflow-y: scroll;'
    })
        .append($('<h2 />').text("Basic elements"))
        .append(createStaticElement('water', true))
        .append(' ')
        .append(createStaticElement('fire', true))
        .append(' ')
        .append(createStaticElement('rock', true))
        .append(' ')
        .append(createStaticElement('air', true))
        .append($('<br />'))
        .append($('<h2 />').text("Other elements (found " + comb.found.length + '/' + (Object.keys(comb.getAllRecipes())).length + ')'))
        .append($('<br />'));
    for (let i of comb.found) {
        divBody
            .append(createStaticElement(i, true))
            .append(createStaticElement('equals'))
            .append(createStaticElement(comb.recipeFor(i)[0], true))
            .append(createStaticElement('plus'))
            .append(createStaticElement(comb.recipeFor(i)[1], true))
            .append($('<br />'))
            .append($('<br />'));
    }
    for (let i in comb.getAllRecipes()) {
        if (comb.recipeFor(i) == 'unknown') {
            divBody
                .append(createStaticElement('unknown'))
                .append(createStaticElement('equals'))
                .append(createStaticElement('unknown'))
                .append(createStaticElement('plus'))
                .append(createStaticElement('unknown'))
                .append($('<br />'))
                .append($('<br />'));
        }
    }
    $(divBody.children().has('.element'))
        .hover(function () {
            $(this).css('cursor', 'default');
        });
    var button = $('<button />', {
        class: 'btn btn-success',
        text: 'CLOSE',
        style: 'font-size: 24px; font-weight: bold; font-family: Consolas, Monospaced; margin-top: 5px; height: 40px; padding: 0 5px;',
        click: function () {
            div.remove();
        }
    });
    var closeButton = $(`<div id="closeHintButton" class="closeButton"
    style="background: url(./images/ScrollWindowClose.png); background-size: contain;  width: 40px; height: 35px; margin-top: -10px; margin-right: -9px;"></div>`)
    closeButton.click(function () {
        div.remove();
    });
    div.append(closeButton, divBody).css('z-index', 102);
    $('body').append(div);
}