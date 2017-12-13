/**
 * Created by maxbe on 12.12.2017.
 */
function showSlide(slideTitle, animated, animations, activeElements, nextSlide) {
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
            showSlide(nextSlide.slideTitle, nextSlide.animated, nextSlide.animations, nextSlide.activeElements, nextSlide.nextSlide);
        });
    }
    else {
        $('.slide > .nextButton').click(function () {
            animated.finish();
            slide.remove();
            animated.hide();
        });
    }
    $('.repeatButton').click(function () {
        animated.finish();
        for (let i = 0; i < animated.length; i++) {
            for(let j in oldStyles[i]){
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