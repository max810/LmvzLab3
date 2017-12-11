/**
 * Created by maxbe on 11.12.2017.
 */
var guides = {};

function setArticle(name){
    $('#articleName').text(name);
    $('#articleContent').text(guides[name] || 'sorry, no article(');
}