/**
 * Created by maxbe on 10.12.2017.
 */
$('#tableOfContents').jstree({
    'plugins': ['search']
});
var searchBarUpdateTimeout;

$('#searchBar').keyup(function () {
    clearTimeout(searchBarUpdateTimeout);
    searchBarUpdateTimeout = setTimeout(function () {
        $('#tableOfContents').jstree(true).search($('#searchBar').val());
    }, 250);
});

$('#searchBar').keydown(function (e) {
    if (e.key == 'Enter') {
        clearTimeout(searchBarUpdateTimeout);
        $('#tableOfContents').jstree(true).search($('#searchBar').val());
    }
});