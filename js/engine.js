/**
 * Created by maxbe on 19.11.2017.
 */

function checkCombo() {
    var x = comb.getCombo(chosen.first(), chosen.second());
    if (x !== undefined) {
        if ($('#book > .element[name=' + x + ']').length) {
            alert('Element ' + x + ' already exists.');
        } else {
            $('#book').append(jQuery('<div />', {
                name: x,
                class: 'element',
                text: x
            }).draggable(bookElementSettings).disableSelection());
            alert("You've created " + x);
        }
    }
}