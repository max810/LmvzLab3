/**
 * Created by maxbe on 12.12.2017.
 */
function showSlide(slideTitle, animated, animations, activeElements, nextSlide, lastCallBack) {
    resetZIndices();
    let oldStyles = [];
    for (let i = 0; i < animated.length; i++) {
        let style = {};
        Object.assign(style, animated[i].style);
        oldStyles.push(style);
    }
    let slide = createSlide(activeElements, slideTitle);
    slide.insertBefore($('#content'));
    applyAnimations(animated, animations);
    if (nextSlide) {
        $('.slide > .nextButton').click(function () {
            animated.finish();
            slide.remove();
            resetZIndices();
            showSlide(nextSlide.slideTitle, nextSlide.animated, nextSlide.animations, nextSlide.activeElements, nextSlide.nextSlide, lastCallBack);
        });
    }
    else {
        $('.slide > .nextButton').click(function () {
            animated.finish();
            slide.remove();
            animated.hide();
            resetZIndices();
            lastCallBack();
        });
    }
    $('.repeatButton').click(function () {
        animated.finish();
        for (let i = 0; i < animated.length; i++) {
            for (let j in oldStyles[i]) {
                animated[i].style[j] = oldStyles[i][j];
            }
        }
        applyAnimations(animated, animations);
    });
}

function createSlide(activeElements, slideTitleText, nextButtonText) {
    let slide = $('<div></div>', {
        class: 'slide'
    });
    slide.append(
        $('<div></div>', {
            class: 'repeatButton usualButton'
        })).append($('<div></div>', {
        class: 'nextButton usualButton',
        style: 'text-align: center'
    }).append($('<span></span>', {
        text: nextButtonText || 'NEXT >',
        style: 'font-size: 64px; font-family: Consolas, font-weight: bold; vertical-align: middle'
    }))).append($('<div></div>', {
        class: 'slideTitle',
        text: slideTitleText
    }));
    if (activeElements) {
        for (let el of activeElements) {
            $(el).css('z-index', 1000);
        }
    }
    return slide;
}

function resetZIndices() {
    $('.row *').css('z-index', 'auto');
    $('#scroll').css('z-index', '0');
    $('#alcCircle').css('z-index', '0')
}

function applyAnimations(animated, animations) {
    for (let animation of animations) {
        if (typeof animation == 'string') {
            let props = animation.trim().split(';').filter(x => Boolean(x)).map(x => x.trim());
            animated.animate({left: '-=0'}, {
                done: function () {
                    for (let prop of props) {
                        let [p, v] = prop.split(':');
                        v = v.trim();
                        animated.css(p, v);
                    }
                }
            });
            animated.animate({left: '+=0'}, "slow");
        }
        else {
            animated.animate(animation, "slow");
        }
    }
}

function showGifWindow() {
    var div = $('<div />', {
        class: 'popupWindow',
        style: 'z-index: ' + $('.popupWindow').css('z-index')
    });
    var headerDiv = $('<div />', {
        class: 'headerDiv',
        text: "One last thing",
        style: 'margin: 0 auto;'
    });
    var divBody = $('<div />', {
        class: 'divBody',
        style: 'text-align: left;'
    }).append($('<div></div>', {
        html: 'The <b>flask</b> indicates current number of elements you are using.<br/>You use <b>2</b> elements to create a new one.<br/>You can combine element with itself.',
        style: 'vertical-align: top; margin-left: 210px;'
    })).append('<img src="./images/CircleFlask.gif" width="190px" style="margin-top: -120px; margin-left: 10px;"/>');
    var button = $('<button />', {
        class: 'btn btn-success',
        text: 'START',
        style: 'font-size: 24px; font-weight: bold; font-family: Consolas, Monospaced; margin-top: -200px; margin-left: 100px',
        click: function () {
            div.remove();
        }
    });
    div.append(headerDiv, divBody, button);
    $('body').append(div);
}

//
// function createSlideLoop(animated, animations, activeElements) {
//     let oldStyles;
//     let t = setInterval(function () {
//         Object.assign(animated[0].style, oldStyles);
//         let slide = showSlide(animated, animations, activeElements);
//         $('.slide > .nextButton').click(function () {
//             clearInterval(t);
//             $('.slide').remove();
//
//         });
//     }, 2000);
//     return slide;
// }