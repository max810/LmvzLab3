/**
 * Created by maxbe on 19.11.2017.
 */
function Combinations() {
    this._combs = {
        "water fire": "steam",
        "dirt fire": "lava"
    };
    this.getCombo = function (first, second) {
        return this._combs[first + " " + second] || this._combs[second+ " " + first];
    };
}
// Combinations.prototype.getCombo = function (first, second) {
//     return this._combs[first + "" + second] || this._combs[first + "" + second];
// };

var comb = new Combinations();
var chosen = new Chosen();

function Chosen() {
    this._chosen = [];
    this.isFull = function () {
        return (this.first() && this.second()) == true;
    };
    this.add = function (el) {
        if (this.isFull()) {
            this._chosen[0] = this._chosen[1];
        }
        if(!this._chosen[0])
            this._chosen[0] = el;
        else
            this._chosen[1] = el;
    };
    this.remove = function (el) {
        if (this._chosen[0] == el)
            this._chosen.shift();
        else if (this._chosen[1] == el)
            this._chosen.pop();
    };
    this.first = function () {
        return this._chosen[0];
    };
    this.second = function () {
        return this._chosen[1];
    }
}