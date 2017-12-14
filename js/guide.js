/**
 * Created by maxbe on 11.12.2017.
 */
var guides = {
    'Moving elements': 'To move elements simply hover the cursor over them, press and hold left mouse button and drag them wherever you want.To release element, release the left mouse button.',
    'Combining elements': 'To combine two elements, drag both them to the alchemical circle.',
    'Results': '<b>Success</b>: you\'ll get a popup window with congratulations.<br><b>Failure</b>: flask will get red crossed, meaning there\'s no such combo.<br/><b>Already exists</b>: you\'ll get a notification that element already exists.',
    'Game mechanics': 'Here you can find basic game rules and how to play it.',
    'Hints': 'Here you can find information about in-game hints',
    'What hints are': 'Hint is a little clue to help you proceed further in the game.<br/>Their number is <b>limited</b>!',
    'Using hints': 'To use hints, open hints menu by clicking on the <b>bulb</b> icon. Then click "Get hint" to get one',
    'Achievements': 'Here is some information about achievements.',
    'What for?': 'Achievements must encourage you to continue playing the game.',
    'Where?': 'To get the list of all achievements, open achievements window by clicking on <b>star</b> icon. <br/>Achievements not unlocked yet will be <b>gray</b>.',
    'How to unlock?' : 'Achievements are unlocked by some actions in the game. Every achievement has a description.'
};

function setArticle(name) {
    $('#articleName').text(name);
    $('#articleContent').html(guides[name] || '');
}