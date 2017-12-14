/**
 * Created by maxbe on 19.11.2017.
 */
function Combinations() {
    this._combs = {
        "water fire": "steam",
        "rock fire": "lava",
        "rock water": "leaf",
        "lava water": "metal",
        "fire air": "energy"
    };
    this._recipes = flip(this._combs);
    this.getAllCombs = function () {
        return Object.assign({}, this._combs);
    };
    this.getAllRecipes = function () {
        return Object.assign({}, this._recipes);
    };
    this.getCombo = function (first, second) {
        var newElem1 = this._combs[first + " " + second];
        var newElem2 = this._combs[second + " " + first];
        if (newElem1) {
            this.found[newElem1] = first + " " + second;
        } else if (newElem2) {
            this.found[newElem2] = second + " " + first;
        }
        return newElem1 || newElem2;
    };
    this.found = [];
    this.recipeFor = function (elem) {
        return this.found[elem] ? this._recipes[elem].split(' ') : 'unknown';
    }
}

var comb = new Combinations();
var chosen = new Chosen();
function Chosen() {
    this._chosen = [];
    this.isFull = function () {
        if (this.first() && this.second()) {
            return true;
        }
        return false;
    };
    this.add = function (el) {
        if (this.isFull()) {
            this._chosen[0] = this._chosen[1];
        }
        if (this._chosen[0])
            this._chosen[1] = el;
        else
            this._chosen[0] = el;
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
    };
    this.empty = function () {
        this._chosen = [];
    };
    this.isEmpty = function () {
        return this._chosen.length == 0;
    };
    this.count = function () {
        return this.isFull() ? 2 : this.isEmpty() ? 0 : 1;
    }
}

function flip(obj) {
    var res = {};
    for (var key in obj) {
        res[obj[key]] = key;
    }
    return res;
}