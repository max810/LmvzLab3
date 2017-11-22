/**
 * Created by maxbe on 19.11.2017.
 */

function checkCombo() {
    var x = comb.getCombo(chosen.first(), chosen.second());
    if (x !== undefined) {
        if ($('#book .element[name=' + x + ']').length) {
            alert('Element ' + x + ' already exists.');
        } else {
            var div = jQuery('<div />');
            var el = jQuery('<div />', {
                name: x,
                class: 'element'
            }).css('background-image', 'url(./images/' + x[0].toUpperCase() + x.slice(1) + '.png')
                .draggable(bookElementSettings).disableSelection();
            var text = jQuery('<span />', {
                text: x.toUpperCase(),
                class: 'elementName'
            });
            div.append(el).append(text);
            $('#book').append(div);
            alert("You've created " + x);
        }
        emptyCircle();
    }
}

function emptyCircle() {
    $('#alcCircle > .element').remove();
    chosen.empty();
    $('#alcCircle').css('background-image', 'url(./images/PentagramDis.png)');
}
