/**
 * Created by maxbe on 10.12.2017.
 */
var Tree = $('#tableOfContents').jstree({
    'plugins': ['search']
});
var searchBarUpdateTimeout;

$('#searchBar').keyup(function () {
    clearTimeout(searchBarUpdateTimeout);
    searchBarUpdateTimeout = setTimeout(function () {
        $('#tableOfContents').jstree(true).search($('#searchBar').val());
    }, 250);
}).keydown(function (e) {
    if (e.key == 'Enter') {
        clearTimeout(searchBarUpdateTimeout);
        $('#tableOfContents').jstree(true).search($('#searchBar').val());
    }
});
Tree.on('changed.jstree', function (e, data) {
    var curr = data.node;
    setArticle(curr.id);
});