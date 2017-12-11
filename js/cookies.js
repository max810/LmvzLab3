/**
 * Created by maxbe on 11.12.2017.
 */
function getCookie(name) {
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
        var currentCookie = cookies[i].split('=');
        if (currentCookie[0] == name) {
            return currentCookie[1];
        }
    }
    return '';
}

function setCookie(name, value, expireDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

function deleteCookie(name) {
    document.cookie = name + '=; ' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}