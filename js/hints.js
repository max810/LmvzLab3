/**
 * Created by maxbe on 12.12.2017.
 */
var hintsCount = 20;
function getHint() {
    if(hintsCount == 0){
        return false;
    }
    setAchievement('Hint');
    var allButBasic = Object.keys(comb.getAllRecipes());
    var elementName = (allButBasic.filter(x => comb.found.indexOf(x) == -1))[Math.floor(Math.random() * (allButBasic.length - comb.found.length))];
    hintsCount--;
    return elementName;
}