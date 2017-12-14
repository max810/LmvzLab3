/**
 * Created by maxbe on 14.12.2017.
 */
var achievements = {
    'Hint': false,
    'One': false,
    'Three': false,
    'Energy': false,
    'All': false
};

var achievementsDescription = {
    'Hint': 'I am lost!:Use a hint once.',
    'One': 'That was easy.:Discover an element.',
    'Three': 'On my way.:Discover three elements.',
    'Energy': 'E = mc²:Discover energy.',
    'All': 'I am the GOD!:Discover all elements.'
};

function showAchievementsWindow() {
    let div = $('<div></div>', {
        class: 'popupWindow',
        id: 'achievementsOpened'
    });
    var closeButton = $('<div></div>', {
        class: 'closeButton',
        style: 'background: url(./images/ScrollWindowClose.png) no-repeat; float: right; background-size: contain; width:33px; height: 46px; margin-top: -36px; margin-right: -12px;'
    });
    closeButton.click(function () {
        div.remove();
    });
    var headerDiv = $('<div />', {
        html: "<h3>Achievements</h3>",
        style: 'display: block; margin-left: 30%;'
    });
    div.append(headerDiv);
    div.append(closeButton);
    for (let ach in achievements) {
        let elem;
        if (achievements[ach]) {
            elem = createStaticElement('Achieve' + ach);
        } else {
            elem = createStaticElement('Achieve' + ach + 'Inactive');
        }
        div.append(elem);
        div.append(createAchievementText(achievementsDescription[ach], achievements[ach]));
        div.append($('<br />'));
        div.append($('<br />'));
    }
    var button = $('<button />', {
        class: 'btn btn-success',
        text: 'CLOSE',
        style: 'font-size: 24px; font-weight: bold; font-family: Consolas, Monospaced; margin-top: 5px; height: 40px; padding: 0 5px; margin-left: 40%',
        click: function () {
            div.remove();
        }
    });
    // div.append(button);
    $('body').append(div);
}

function createAchievementText(text, wasFound) {
    let [title, desc] = text.split(':');
    var container = $('<div></div>', {
        class: ''
    }).append($('<h5></h5>', {
        text: title,
        style: 'margin-top: 5px'
    })).append($('<p></p>', {
        text: desc
    }));
    if (wasFound == false) {
        container.css('color', 'gray');
    }
    return container;
}

function setAchievement(name) {
    if (achievements[name] != true) {
        achievements[name] = true;
        let el = $('#achievementUnlocked');
        $('#achievementUnlockedIcon').html(createStaticElement('Achieve' + name));
        $('#achievementUnlockedText').html(createAchievementText(achievementsDescription[name]));
        el.toggle("slide");
        setTimeout(function () {

            $('#achievementUnlocked').toggle("slide");
        }, 4500);
    }
}